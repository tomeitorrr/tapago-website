import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header simple */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1000px] px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Contenido */}
      <main className="mx-auto max-w-[1000px] px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Términos y Condiciones — Tapago Pay
        </h1>
        <p className="mt-2 text-muted-foreground">Versión 2.0 — Marzo 2026</p>

        <div className="mt-8 space-y-8 text-muted-foreground">

          {/* 1. Identificación */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Identificación
            </h2>
            <div className="space-y-4">
              <p>
                <strong>TAPAGO S.A.</strong> (en adelante "TAPAGO"), CUIT 33-71919122-9, con domicilio legal en
                Tristan Malbran 4011, piso 2, oficina 2, Córdoba, Argentina (CP 5009), pone a disposición de los
                usuarios la plataforma <strong>"Tapago Pay"</strong> (en adelante, la "PLATAFORMA"), que permite
                acceder a servicios de pagos y transferencias internacionales.
              </p>
              <div>
                <p className="font-semibold text-foreground mb-2">Contacto:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email: info@tapagopay.net</li>
                  <li>WhatsApp: +54 9 351 867 6992</li>
                  <li>Web: https://tapagopay.net</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Objeto y Alcance */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Objeto y Alcance de los Servicios
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Naturaleza del Servicio</h3>
                <p>
                  TAPAGO opera como plataforma digital que facilita el acceso a servicios de pagos internacionales.
                  Los servicios técnicos y operativos son provistos por <strong>WIBOND SAS</strong> (CUIT 30-71610872-0),
                  Proveedor de Servicios de Pago de Cuenta de Pago (PSPCP) autorizado por el Banco Central de la
                  República Argentina bajo el número de registro #33551.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Servicios Disponibles</h3>
                <p className="mb-3">A través de la PLATAFORMA, los usuarios pueden acceder a:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>
                    <strong>Servicio de Transferencias Internacionales:</strong> Permite enviar fondos en pesos
                    argentinos a beneficiarios en el exterior, que se liquidan en la moneda del país de destino.
                  </li>
                  <li>
                    <strong>Cuenta de Pago Digital:</strong> Apertura y gestión de una cuenta de pago digital en
                    pesos argentinos para la operatoria de transferencias internacionales.
                  </li>
                  <li>
                    <strong>Información y Seguimiento:</strong> Consulta del estado de operaciones, historial de
                    transacciones y comprobantes.
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Prestación Técnica de Servicios</h3>
                <p className="mb-3">Los usuarios reconocen y aceptan expresamente que:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>WIBOND SAS</strong> (domicilio: Obispo Oro N° 324, Nueva Córdoba, Córdoba, Argentina;
                    contacto: hola@wibond.co, +54 9 351 686 6709) es quien presta los siguientes servicios técnicos:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Apertura y administración de cuentas de pago</li>
                      <li>Custodia de fondos</li>
                      <li>Procesamiento de transferencias internacionales</li>
                      <li>Conversión y liquidación de fondos en destino</li>
                      <li>Validación de identidad (KYC)</li>
                      <li>Monitoreo de cumplimiento normativo (PLA/FT)</li>
                      <li>Emisión de comprobantes</li>
                    </ul>
                  </li>
                  <li>
                    <strong>TAPAGO</strong> actúa como interfaz y marca comercial, proveyendo:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Plataforma web y aplicación móvil</li>
                      <li>Atención al usuario</li>
                      <li>Soporte y gestión de reclamos</li>
                      <li>Marketing y comunicación</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2.4 Responsabilidad ante el Usuario</h3>
                <p>
                  TAPAGO asume la responsabilidad frente al usuario por la correcta prestación de los servicios
                  ofrecidos a través de la PLATAFORMA, sin perjuicio de las acciones de repetición que pudiera
                  ejercer contra WIBOND SAS u otros terceros prestadores.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2.5 Modificación del Prestador de Servicios</h3>
                <p>
                  TAPAGO se reserva el derecho de modificar el prestador técnico de los servicios (actualmente
                  WIBOND SAS) o incorporar servicios propios bajo su licencia PSPCP en el futuro, notificando a los
                  usuarios con al menos 30 días de anticipación. Los usuarios podrán rescindir el servicio sin costo
                  si no aceptan el cambio.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Aceptación */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Aceptación de los Términos
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Vinculación Contractual</h3>
                <p>
                  El uso de la PLATAFORMA implica la aceptación plena y sin reservas de los presentes Términos y
                  Condiciones, así como de las Políticas de Privacidad publicadas en{" "}
                  <Link href="/privacidad" className="text-teal-600 hover:underline">
                    https://tapagopay.net/privacidad
                  </Link>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Capacidad Legal</h3>
                <p className="mb-3">Para utilizar los servicios, el usuario debe:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ser mayor de 18 años</li>
                  <li>Tener capacidad legal para contratar</li>
                  <li>Residir en Argentina (por el momento, el servicio está limitado a residentes argentinos)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Modificaciones</h3>
                <p>
                  TAPAGO podrá modificar estos Términos en cualquier momento. Las modificaciones serán notificadas
                  por email y/o mediante aviso en la PLATAFORMA con 15 días de anticipación. El uso continuado del
                  servicio implicará la aceptación de los nuevos términos.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Registro y KYC */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Registro y Validación de Identidad (KYC)
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Proceso de Registro</h3>
                <p className="mb-3">Para acceder a los servicios, el usuario deberá:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>Completar el formulario de registro con datos personales veraces y actualizados</li>
                  <li>Proporcionar documentación de respaldo (DNI, comprobante de domicilio)</li>
                  <li>Realizar el proceso de validación de identidad mediante selfie y/o videollamada</li>
                  <li>Aceptar estos Términos y la Política de Privacidad</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Información Requerida</h3>
                <p className="mb-3">El usuario proporcionará:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nombre y apellido completos</li>
                  <li>Número de DNI/CUIT/CUIL</li>
                  <li>Domicilio real</li>
                  <li>Email y teléfono</li>
                  <li>Información sobre el origen de fondos</li>
                  <li>Declaración de Persona Expuesta Políticamente (PEP), si corresponde</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Verificación y Aprobación</h3>
                <p>
                  WIBOND SAS, como prestador técnico, realizará el proceso de validación de identidad (KYC) conforme
                  a la normativa del BCRA y UIF. TAPAGO informará al usuario sobre el estado de su solicitud. El
                  proceso puede demorar entre 24 y 72 horas hábiles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">4.4 Rechazo de Solicitud</h3>
                <p className="mb-3">
                  TAPAGO y/o WIBOND SAS podrán rechazar una solicitud de registro sin expresión de causa,
                  especialmente cuando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Los datos proporcionados sean falsos o inconsistentes</li>
                  <li>El usuario figure en listas de sanciones internacionales</li>
                  <li>Se detecten indicios de lavado de activos o financiación del terrorismo</li>
                  <li>No se complete satisfactoriamente el proceso KYC</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Uso de los Servicios */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Uso de los Servicios
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Carga de Fondos</h3>
                <p className="mb-3">El usuario podrá cargar pesos argentinos en su cuenta mediante:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transferencia bancaria desde cuenta propia (CBU/CVU)</li>
                  <li>Otros medios habilitados por la PLATAFORMA</li>
                </ul>
                <p className="mt-3">
                  Los fondos estarán disponibles una vez acreditados y verificados, lo cual puede demorar entre 15
                  minutos y 24 horas hábiles según el medio utilizado.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Transferencias Internacionales</h3>
                <p className="mb-3">Para realizar una transferencia internacional, el usuario deberá:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>Contar con saldo suficiente en su cuenta</li>
                  <li>Ingresar los datos del beneficiario (nombre, cuenta bancaria, país de destino)</li>
                  <li>Revisar y aceptar el tipo de conversión, comisiones y monto final a recibir en destino</li>
                  <li>Confirmar la operación</li>
                </ol>
                <p className="mt-3">
                  <strong>Importante:</strong> El servicio consiste en transferencias internacionales usando pesos
                  argentinos como moneda de origen. No se ofrece compra/venta de moneda extranjera ni operaciones
                  cambiarias. La conversión y liquidación en destino es realizada por WIBOND SAS conforme a las
                  regulaciones aplicables.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Tipo de Conversión y Costos</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Tipo de conversión:</strong> Se utilizará el tipo de conversión informado al momento de
                    confirmar la operación, el cual puede variar según las condiciones de mercado.
                  </li>
                  <li>
                    <strong>Comisiones:</strong> Se informarán de manera transparente antes de confirmar cada
                    operación. Las comisiones pueden variar según el monto, destino y medio de pago.
                  </li>
                  <li>
                    <strong>Costos de terceros:</strong> Pueden aplicarse costos adicionales del banco intermediario
                    o receptor en destino, los cuales no son controlados por TAPAGO ni WIBOND.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">5.4 Tiempos de Procesamiento</h3>
                <p>
                  Las transferencias internacionales pueden demorar entre 1 y 5 días hábiles, dependiendo del país
                  de destino, el banco receptor y las verificaciones de cumplimiento normativo. TAPAGO informará
                  estimaciones pero no garantiza plazos específicos ya que dependen de terceros.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">5.5 Límites Operativos</h3>
                <p>
                  Existen límites mensuales y por operación establecidos por WIBOND SAS conforme a la normativa del
                  BCRA. Estos límites pueden consultarse en la PLATAFORMA y están sujetos a cambios según el perfil
                  del usuario y el nivel de validación completado.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Obligaciones del Usuario */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Obligaciones del Usuario
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Uso Lícito</h3>
                <p className="mb-3">El usuario se compromete a utilizar los servicios exclusivamente para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pagos comerciales legítimos (pago a proveedores, servicios)</li>
                  <li>Remesas familiares</li>
                  <li>Otros fines lícitos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Prohibiciones</h3>
                <p className="mb-3">Está prohibido utilizar la PLATAFORMA para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Actividades ilegales o fraudulentas</li>
                  <li>Lavado de activos o financiación del terrorismo</li>
                  <li>Evasión fiscal o violación de controles cambiarios</li>
                  <li>Transacciones relacionadas con armas, drogas, trata de personas</li>
                  <li>Cualquier actividad prohibida por la legislación argentina o internacional</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">6.3 Veracidad de la Información</h3>
                <p className="mb-3">El usuario garantiza que:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Toda la información proporcionada es verdadera, completa y actualizada</li>
                  <li>Los fondos utilizados provienen de fuentes lícitas</li>
                  <li>Actualizará su información ante cualquier cambio (domicilio, teléfono, situación PEP)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">6.4 Seguridad de la Cuenta</h3>
                <p className="mb-3">El usuario es responsable de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                  <li>Notificar inmediatamente cualquier uso no autorizado</li>
                  <li>No compartir su cuenta con terceros</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. Comisiones y Tarifas */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Comisiones y Tarifas
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Estructura de Costos</h3>
                <p className="mb-3">
                  TAPAGO aplicará las siguientes comisiones, que serán informadas antes de cada operación:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Comisión por transferencia internacional:</strong> Variable según destino y monto</li>
                  <li><strong>Comisión por conversión:</strong> Incluida en el tipo de conversión aplicado</li>
                  <li><strong>Costo de mantenimiento de cuenta:</strong> Sin costo en esta etapa</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">7.2 Modificación de Tarifas</h3>
                <p>
                  Las comisiones pueden modificarse con 30 días de aviso previo mediante notificación por email y
                  publicación en la PLATAFORMA.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">7.3 IVA y otros Impuestos</h3>
                <p>
                  Todas las comisiones se expresan en pesos argentinos e incluyen IVA cuando corresponda. El usuario
                  es responsable del cumplimiento de sus obligaciones fiscales derivadas del uso del servicio.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Protección de Datos */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Protección de Datos Personales
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">8.1 Tratamiento de Datos</h3>
                <p>
                  TAPAGO y WIBOND SAS tratarán los datos personales de los usuarios conforme a la Ley 25.326 de
                  Protección de Datos Personales y normativa complementaria. Para mayor información, consultar la{" "}
                  <Link href="/privacidad" className="text-teal-600 hover:underline">
                    Política de Privacidad
                  </Link>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">8.2 Finalidad del Tratamiento</h3>
                <p className="mb-3">Los datos serán utilizados para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prestación de los servicios contratados</li>
                  <li>Cumplimiento de obligaciones legales (KYC, PLA/FT)</li>
                  <li>Comunicaciones relacionadas con el servicio</li>
                  <li>Análisis de riesgo y prevención de fraude</li>
                  <li>Marketing (con consentimiento expreso del usuario)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">8.3 Compartición de Datos</h3>
                <p className="mb-3">Los datos del usuario serán compartidos con:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>WIBOND SAS (prestador técnico)</li>
                  <li>Bancos y entidades financieras (para procesar operaciones)</li>
                  <li>Autoridades competentes (BCRA, UIF, AFIP) cuando sea legalmente requerido</li>
                  <li>Proveedores de servicios de verificación de identidad y prevención de fraude</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">8.4 Derechos del Usuario</h3>
                <p className="mb-3">El usuario tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la supresión de datos (cuando no exista obligación legal de retención)</li>
                  <li>Oponerse al tratamiento para fines de marketing</li>
                  <li>Solicitar portabilidad de datos</li>
                </ul>
                <p className="mt-3">Para ejercer estos derechos: info@tapagopay.net</p>
              </div>
            </div>
          </section>

          {/* 9. Prevención de Lavado */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Prevención de Lavado de Activos (PLA/FT)
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">9.1 Cumplimiento Normativo</h3>
                <p>
                  TAPAGO y WIBOND SAS cumplen estrictamente con las normas de Prevención de Lavado de Activos y
                  Financiación del Terrorismo establecidas por la UIF (Unidad de Información Financiera).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">9.2 Monitoreo de Operaciones</h3>
                <p className="mb-3">
                  Todas las operaciones son monitoreadas y pueden ser objeto de reportes a la UIF cuando se detecten:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Operaciones inusuales o sospechosas</li>
                  <li>Inconsistencias en la información del usuario</li>
                  <li>Patrones de comportamiento atípicos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">9.3 Suspensión o Rechazo de Operaciones</h3>
                <p className="mb-3">
                  TAPAGO y/o WIBOND SAS podrán suspender, rechazar o revertir operaciones cuando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Existan dudas sobre la licitud del origen de fondos</li>
                  <li>El usuario no responda satisfactoriamente a requerimientos de información</li>
                  <li>Se detecten señales de alerta conforme a la normativa UIF</li>
                  <li>Exista sospecha fundada de lavado de activos o financiación del terrorismo</li>
                </ul>
                <p className="mt-3">
                  El usuario no será notificado en todos los casos (especialmente cuando pueda entorpecer
                  investigaciones).
                </p>
              </div>
            </div>
          </section>

          {/* 10. Responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Responsabilidad y Limitaciones
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">10.1 Responsabilidad de TAPAGO</h3>
                <p className="mb-3">TAPAGO responde ante el usuario por:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El correcto funcionamiento de la PLATAFORMA</li>
                  <li>La seguridad de los datos personales</li>
                  <li>La gestión adecuada de reclamos</li>
                  <li>La coordinación con WIBOND SAS para la prestación de servicios</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">10.2 Exclusiones de Responsabilidad</h3>
                <p className="mb-3">TAPAGO no será responsable por:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Demoras atribuibles a bancos intermediarios o receptores en destino</li>
                  <li>Costos adicionales aplicados por bancos terceros</li>
                  <li>Fallas en sistemas de terceros (bancos, procesadores de pago)</li>
                  <li>Fluctuaciones en tipos de conversión una vez confirmada la operación</li>
                  <li>Operaciones rechazadas por incumplimiento normativo del usuario</li>
                  <li>Indisponibilidad del servicio por mantenimientos programados (avisados con anticipación)</li>
                  <li>Fuerza mayor, caso fortuito, actos de autoridad, huelgas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">10.3 Límite de Responsabilidad</h3>
                <p>
                  En caso de incumplimiento imputable a TAPAGO, la responsabilidad estará limitada al reintegro de
                  las comisiones cobradas en la operación afectada, salvo dolo o culpa grave.
                </p>
              </div>
            </div>
          </section>

          {/* 11. Suspensión y Terminación */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Suspensión y Terminación
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">11.1 Suspensión de Cuenta</h3>
                <p className="mb-3">TAPAGO podrá suspender temporalmente una cuenta cuando:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Se requiera información adicional del usuario</li>
                  <li>Existan operaciones en investigación</li>
                  <li>Se detecten indicios de fraude o uso indebido</li>
                  <li>El usuario incumpla estos Términos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">11.2 Cierre de Cuenta por TAPAGO</h3>
                <p className="mb-3">TAPAGO podrá cerrar definitivamente una cuenta cuando:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El usuario incurra en violaciones graves de estos Términos</li>
                  <li>Proporcione información falsa o fraudulenta</li>
                  <li>Utilice el servicio para actividades ilícitas</li>
                  <li>No complete el proceso KYC en tiempo y forma</li>
                  <li>Exista orden judicial o de autoridad competente</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">11.3 Cierre de Cuenta por el Usuario</h3>
                <p className="mb-3">
                  El usuario podrá cerrar su cuenta en cualquier momento solicitándolo a info@tapagopay.net.
                  Previamente deberá:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Completar todas las operaciones pendientes</li>
                  <li>Retirar el saldo disponible</li>
                  <li>Pagar cualquier comisión pendiente</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">11.4 Conservación de Datos</h3>
                <p>
                  Aún después del cierre, TAPAGO y WIBOND SAS conservarán la información del usuario por el plazo
                  legal mínimo de 10 años conforme a la normativa del BCRA y UIF.
                </p>
              </div>
            </div>
          </section>

          {/* 12. Propiedad Intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. Propiedad Intelectual
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">12.1 Titularidad</h3>
                <p>
                  Todos los contenidos de la PLATAFORMA (textos, imágenes, logos, código, diseño) son propiedad de
                  TAPAGO o sus licenciantes y están protegidos por las leyes de propiedad intelectual.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">12.2 Licencia de Uso</h3>
                <p>
                  TAPAGO otorga al usuario una licencia personal, no exclusiva, intransferible y revocable para usar
                  la PLATAFORMA exclusivamente para los fines previstos en estos Términos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">12.3 Prohibiciones</h3>
                <p className="mb-3">El usuario no podrá:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copiar, modificar o distribuir el contenido de la PLATAFORMA</li>
                  <li>Realizar ingeniería inversa del software</li>
                  <li>Usar la marca "Tapago" o "Tapago Pay" sin autorización</li>
                  <li>Crear productos o servicios derivados</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 13. Atención al Usuario */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              13. Atención al Usuario y Reclamos
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">13.1 Canales de Contacto</h3>
                <p className="mb-3">Para consultas, reclamos o asistencia:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: info@tapagopay.net</li>
                  <li>WhatsApp: +54 9 351 867 6992</li>
                  <li>Horario de atención: Lunes a viernes de 9 a 18 hs (hora de Argentina)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">13.2 Procedimiento de Reclamos</h3>
                <p className="mb-3">
                  Los reclamos deben presentarse por escrito a info@tapagopay.net indicando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Datos del usuario (nombre, email, número de cuenta)</li>
                  <li>Descripción detallada del problema</li>
                  <li>Documentación de respaldo (comprobantes, capturas de pantalla)</li>
                </ul>
                <p className="mt-3">TAPAGO responderá en un plazo máximo de 10 días hábiles.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">13.3 Escalamiento</h3>
                <p className="mb-3">Si el usuario no está conforme con la respuesta, podrá:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Solicitar escalamiento interno dirigiendo su reclamo a reclamos@tapagopay.net</li>
                  <li>Presentar denuncia ante la Dirección de Defensa del Consumidor de su jurisdicción</li>
                  <li>Contactar al BCRA: www.bcra.gob.ar</li>
                  <li>Iniciar acciones judiciales (ver sección 14)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 14. Jurisdicción */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              14. Jurisdicción y Ley Aplicable
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">14.1 Ley Aplicable</h3>
                <p className="mb-3">
                  Estos Términos se rigen por las leyes de la República Argentina, especialmente:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ley 25.065 de Tarjetas de Crédito (aplicable supletoriamente)</li>
                  <li>Comunicación BCRA "A" 7030 y modificatorias (PSPCP)</li>
                  <li>Ley 25.326 de Protección de Datos Personales</li>
                  <li>Ley 25.246 de Prevención de Lavado de Activos</li>
                  <li>Código Civil y Comercial de la Nación</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">14.2 Jurisdicción</h3>
                <p>
                  Para toda controversia derivada de estos Términos, las partes se someten a la jurisdicción de los
                  Tribunales Ordinarios de la Ciudad de Córdoba, renunciando a cualquier otro fuero que pudiera
                  corresponder.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">14.3 Resolución Alternativa de Conflictos</h3>
                <p>
                  Previamente a cualquier acción judicial, las partes acuerdan intentar resolver el conflicto
                  mediante negociación directa o mediación, conforme a la Ley 26.589.
                </p>
              </div>
            </div>
          </section>

          {/* 15. Disposiciones Generales */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              15. Disposiciones Generales
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">15.1 Integridad del Acuerdo</h3>
                <p>
                  Estos Términos, junto con la Política de Privacidad, constituyen el acuerdo completo entre TAPAGO
                  y el usuario, reemplazando cualquier acuerdo previo.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">15.2 Nulidad Parcial</h3>
                <p>
                  Si alguna cláusula fuera declarada nula o inaplicable, el resto de los Términos mantendrá plena
                  vigencia.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">15.3 Renuncia</h3>
                <p>
                  La falta de ejercicio por TAPAGO de cualquier derecho no implicará renuncia al mismo.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">15.4 Cesión</h3>
                <p>
                  TAPAGO podrá ceder estos Términos a cualquier entidad vinculada o en caso de reorganización
                  societaria. El usuario no podrá ceder su posición contractual sin autorización escrita.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">15.5 Notificaciones</h3>
                <p>
                  Todas las notificaciones se realizarán al email registrado por el usuario. Es responsabilidad del
                  usuario mantener actualizada esta información.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">15.6 Idioma</h3>
                <p>
                  Estos Términos están redactados en español. En caso de traducción, prevalecerá la versión en
                  español.
                </p>
              </div>
            </div>
          </section>

          {/* 16. Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              16. Contacto
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">TAPAGO S.A.</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>CUIT:</strong> 33-71919122-9</li>
                  <li><strong>Domicilio:</strong> Tristan Malbran 4011, piso 2, oficina 2, Córdoba, Argentina (CP 5009)</li>
                  <li><strong>Email:</strong> info@tapagopay.net</li>
                  <li><strong>WhatsApp:</strong> +54 9 351 867 6992</li>
                  <li><strong>Web:</strong> https://tapagopay.net</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">WIBOND SAS (Prestador Técnico)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>CUIT:</strong> 30-71610872-0</li>
                  <li><strong>PSPCP:</strong> #33551 (BCRA)</li>
                  <li><strong>Domicilio:</strong> Obispo Oro N° 324, Nueva Córdoba, Córdoba, Argentina</li>
                  <li><strong>Email:</strong> hola@wibond.co</li>
                  <li><strong>Teléfono:</strong> +54 9 351 686 6709</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Última actualización:</strong> Marzo 2026
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Versión 2.0
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Al utilizar los servicios de Tapago Pay, el usuario declara haber leído, comprendido y aceptado
              estos Términos y Condiciones en su totalidad.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
