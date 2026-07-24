interface LogWibondAttemptParams {
  tipo: "Persona Humana" | "Empresa"
  cliente: string
  email: string
  taxID: string
  resultado: "Éxito" | "Error"
  mensaje: string
}

// Registra cada intento de alta en Wibond en una planilla de Google (vía Apps Script Web App).
// Si GOOGLE_SHEET_WEBHOOK_URL no está configurada, no rompe el flujo: solo lo avisa en los logs.
export async function logWibondAttempt(params: LogWibondAttemptParams) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
  const secret = process.env.GOOGLE_SHEET_WEBHOOK_SECRET

  if (!webhookUrl) {
    console.warn("GOOGLE_SHEET_WEBHOOK_URL no configurada — no se registró el intento en la planilla")
    return
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        fecha: new Date().toISOString(),
        ...params,
      }),
    })
  } catch (err) {
    console.error("No se pudo registrar el intento en la planilla de Google:", err)
  }
}
