import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// TODO: Cambiar estos valores según el dominio verificado en Resend
const EMAIL_FROM = "noreply@tapagopay.net"
const EMAIL_TO = "compliance@tapagopay.net"

export async function POST(request: NextRequest) {
  // TODO: Configurar RESEND_API_KEY en .env.local antes de deployar
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()

    const {
      tipoCliente,
      nombre,
      cuitCuil,
      fechaNacimiento,
      nacionalidad,
      actividadEconomica,
      email,
      telefono,
      direccion,
    } = body

    // Validaciones básicas en el servidor
    if (!tipoCliente || !nombre || !cuitCuil || !email || !telefono || !direccion) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

    const esJuridica = tipoCliente === "juridica"
    const labelNombre = esJuridica ? "Razón social" : "Nombre completo"
    const labelCuit = esJuridica ? "CUIT" : "CUIL"
    const labelFecha = esJuridica ? "Fecha de constitución" : "Fecha de nacimiento"
    const labelNacionalidad = esJuridica ? "País de incorporación" : "Nacionalidad"

    const htmlEmail = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; color: #1e293b; background: #f8fafc; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0891b2, #0e7490); padding: 28px 32px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; }
    .header p { color: #a5f3fc; margin: 4px 0 0; font-size: 14px; }
    .section { padding: 24px 32px; border-bottom: 1px solid #e2e8f0; }
    .section:last-child { border-bottom: none; }
    .section-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #0891b2; margin: 0 0 16px; }
    .field { margin-bottom: 12px; }
    .field-label { font-size: 12px; color: #64748b; font-weight: 600; margin-bottom: 2px; }
    .field-value { font-size: 15px; color: #1e293b; font-weight: 500; }
    .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; background: #e0f2fe; color: #0891b2; }
    .footer { background: #f1f5f9; padding: 20px 32px; text-align: center; }
    .footer p { margin: 0; font-size: 12px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nueva Solicitud de Apertura de Cuenta</h1>
      <p>Tapago Pay — Formulario de Onboarding</p>
    </div>

    <div class="section">
      <p class="section-title">Tipo de cliente</p>
      <span class="badge">${esJuridica ? "Persona Jurídica" : "Persona Física"}</span>
    </div>

    <div class="section">
      <p class="section-title">Datos del titular</p>
      <div class="field">
        <div class="field-label">${labelNombre}</div>
        <div class="field-value">${nombre}</div>
      </div>
      <div class="field">
        <div class="field-label">${labelCuit}</div>
        <div class="field-value">${cuitCuil}</div>
      </div>
      ${fechaNacimiento ? `
      <div class="field">
        <div class="field-label">${labelFecha}</div>
        <div class="field-value">${fechaNacimiento}</div>
      </div>` : ""}
      ${nacionalidad ? `
      <div class="field">
        <div class="field-label">${labelNacionalidad}</div>
        <div class="field-value">${nacionalidad}</div>
      </div>` : ""}
      ${actividadEconomica ? `
      <div class="field">
        <div class="field-label">Actividad económica</div>
        <div class="field-value">${actividadEconomica}</div>
      </div>` : ""}
    </div>

    <div class="section">
      <p class="section-title">Datos de contacto</p>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value">${email}</div>
      </div>
      <div class="field">
        <div class="field-label">Teléfono</div>
        <div class="field-value">${telefono}</div>
      </div>
      <div class="field">
        <div class="field-label">Dirección legal</div>
        <div class="field-value">${direccion}</div>
      </div>
    </div>

    <div class="footer">
      <p>Enviado automáticamente desde el formulario de onboarding de tapagopay.net</p>
    </div>
  </div>
</body>
</html>
`

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Nueva solicitud de cuenta — ${nombre} (${esJuridica ? "Persona Jurídica" : "Persona Física"})`,
      html: htmlEmail,
    })

    if (error) {
      console.error("Error al enviar email con Resend:", error)
      return NextResponse.json(
        { error: "No se pudo enviar el formulario. Intentá de nuevo." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Error en API /onboarding:", err)
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    )
  }
}
