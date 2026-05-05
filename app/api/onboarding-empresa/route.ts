import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const EMAIL_FROM = "noreply@tapagopay.net"
const EMAIL_TO = "compliance@tapagopay.net"

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()

    const {
      razonSocial,
      cuit,
      tipoSocietario,
      actividadPrincipal,
      nombreRepresentante,
      cuilRepresentante,
      cargoRepresentante,
      email,
      telefono,
      calleNumero,
      ciudad,
      provincia,
      codigoPostal,
    } = body

    if (
      !razonSocial || !cuit || !tipoSocietario || !actividadPrincipal ||
      !nombreRepresentante || !cuilRepresentante || !cargoRepresentante ||
      !email || !telefono || !calleNumero || !ciudad || !provincia || !codigoPostal
    ) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

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
    .footer { background: #f1f5f9; padding: 20px 32px; text-align: center; }
    .footer p { margin: 0; font-size: 12px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nueva Solicitud de Apertura de Cuenta</h1>
      <p>Tapago Pay — Formulario de Onboarding · Persona Jurídica</p>
    </div>

    <div class="section">
      <p class="section-title">Datos de la empresa</p>
      <div class="field">
        <div class="field-label">Razón social</div>
        <div class="field-value">${razonSocial}</div>
      </div>
      <div class="field">
        <div class="field-label">CUIT</div>
        <div class="field-value">${cuit}</div>
      </div>
      <div class="field">
        <div class="field-label">Tipo societario</div>
        <div class="field-value">${tipoSocietario}</div>
      </div>
      <div class="field">
        <div class="field-label">Actividad principal</div>
        <div class="field-value">${actividadPrincipal}</div>
      </div>
    </div>

    <div class="section">
      <p class="section-title">Representante legal</p>
      <div class="field">
        <div class="field-label">Nombre y apellido</div>
        <div class="field-value">${nombreRepresentante}</div>
      </div>
      <div class="field">
        <div class="field-label">CUIL</div>
        <div class="field-value">${cuilRepresentante}</div>
      </div>
      <div class="field">
        <div class="field-label">Cargo</div>
        <div class="field-value">${cargoRepresentante}</div>
      </div>
    </div>

    <div class="section">
      <p class="section-title">Contacto</p>
      <div class="field">
        <div class="field-label">Email corporativo</div>
        <div class="field-value">${email}</div>
      </div>
      <div class="field">
        <div class="field-label">Teléfono</div>
        <div class="field-value">${telefono}</div>
      </div>
    </div>

    <div class="section">
      <p class="section-title">Domicilio fiscal (sede social)</p>
      <div class="field">
        <div class="field-label">Calle y número</div>
        <div class="field-value">${calleNumero}</div>
      </div>
      <div class="field">
        <div class="field-label">Ciudad</div>
        <div class="field-value">${ciudad}</div>
      </div>
      <div class="field">
        <div class="field-label">Provincia</div>
        <div class="field-value">${provincia}</div>
      </div>
      <div class="field">
        <div class="field-label">Código Postal</div>
        <div class="field-value">${codigoPostal}</div>
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
      subject: `Nueva solicitud de cuenta — ${razonSocial} (Persona Jurídica)`,
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
    console.error("Error en API /onboarding-empresa:", err)
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    )
  }
}
