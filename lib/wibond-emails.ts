const EMAIL_STYLES = `
    body { font-family: Arial, sans-serif; color: #1e293b; background: #f8fafc; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { padding: 28px 32px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; }
    .header p { margin: 4px 0 0; font-size: 14px; }
    .section { padding: 24px 32px; }
    .field { margin-bottom: 12px; }
    .field-label { font-size: 12px; color: #64748b; font-weight: 600; margin-bottom: 2px; }
    .field-value { font-size: 15px; color: #1e293b; font-weight: 500; }
    .footer { background: #f1f5f9; padding: 20px 32px; text-align: center; }
    .footer p { margin: 0; font-size: 12px; color: #94a3b8; }
`

export function wibondConfirmationEmail(nombreOrRazonSocial: string) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <style>${EMAIL_STYLES}</style>
</head>
<body>
  <div class="container">
    <div class="header" style="background: linear-gradient(135deg, #0891b2, #0e7490);">
      <h1>¡Tu cuenta en Tapago Pay fue creada!</h1>
      <p style="color: #a5f3fc;">Ya casi estás listo para operar</p>
    </div>
    <div class="section">
      <p>Hola ${nombreOrRazonSocial},</p>
      <p>Tu solicitud de apertura de cuenta fue aprobada. En los próximos minutos vas a recibir <strong>otro email</strong> de nuestro partner Wibond con el link para iniciar el proceso de onboarding.</p>
      <p>Si no lo ves en tu bandeja de entrada, revisá la carpeta de <strong>spam / correo no deseado</strong>.</p>
      <p>Cualquier duda, escribinos a <a href="mailto:info@tapagopay.net">info@tapagopay.net</a>.</p>
    </div>
    <div class="footer">
      <p>Enviado automáticamente desde tapagopay.net</p>
    </div>
  </div>
</body>
</html>
`
}

interface WibondAlertParams {
  tipo: "Persona Humana" | "Empresa"
  cliente: string
  email: string
  taxID: string
  mensaje: string
}

export function wibondAlertEmail({ tipo, cliente, email, taxID, mensaje }: WibondAlertParams) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <style>${EMAIL_STYLES}</style>
</head>
<body>
  <div class="container">
    <div class="header" style="background: linear-gradient(135deg, #dc2626, #b91c1c);">
      <h1>⚠️ Error al dar de alta en Wibond</h1>
      <p style="color: #fecaca;">Requiere revisión manual</p>
    </div>
    <div class="section">
      <div class="field">
        <div class="field-label">Tipo de solicitud</div>
        <div class="field-value">${tipo}</div>
      </div>
      <div class="field">
        <div class="field-label">Cliente</div>
        <div class="field-value">${cliente}</div>
      </div>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value">${email}</div>
      </div>
      <div class="field">
        <div class="field-label">CUIT/CUIL</div>
        <div class="field-value">${taxID}</div>
      </div>
      <div class="field">
        <div class="field-label">Motivo del error (Wibond)</div>
        <div class="field-value">${mensaje}</div>
      </div>
    </div>
    <div class="footer">
      <p>El mail interno con los datos completos del cliente ya te llegó por separado. Esta alerta es solo para avisarte que el alta automática en Wibond falló y hay que resolverla a mano.</p>
    </div>
  </div>
</body>
</html>
`
}
