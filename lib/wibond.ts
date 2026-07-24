interface CreateWibondUserParams {
  email: string
  taxID: string
  externalUserID: string
}

interface WibondResult {
  success: boolean
  message: string
  raw?: unknown
}

export async function createWibondUser({
  email,
  taxID,
  externalUserID,
}: CreateWibondUserParams): Promise<WibondResult> {
  const apiUrl = process.env.WIBOND_API_URL
  const clientId = process.env.WIBOND_CLIENT_ID
  const clientSecret = process.env.WIBOND_CLIENT_SECRET
  const partnerId = process.env.WIBOND_PARTNER_ID

  if (!apiUrl || !clientId || !clientSecret || !partnerId) {
    return {
      success: false,
      message: "Faltan variables de entorno de Wibond en el servidor (WIBOND_API_URL / WIBOND_CLIENT_ID / WIBOND_CLIENT_SECRET / WIBOND_PARTNER_ID)",
    }
  }

  let response: Response
  try {
    response = await fetch(`${apiUrl}/public/wibond-connect/user/auth/user`, {
      method: "POST",
      headers: {
        "client-id": clientId,
        "client-secret": clientSecret,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        externalPartnerID: partnerId,
        externalUserID,
        email,
        taxID,
      }),
    })
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? `No se pudo contactar a Wibond: ${err.message}` : "No se pudo contactar a Wibond",
    }
  }

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    return {
      success: false,
      message: data?.message || `Wibond respondió con error HTTP ${response.status}`,
      raw: data,
    }
  }

  if (data?.status !== true) {
    return {
      success: false,
      message: data?.message || "Wibond rechazó el alta (status: false)",
      raw: data,
    }
  }

  return {
    success: true,
    message: data.message || "Usuario creado en Wibond",
    raw: data,
  }
}
