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
          Términos y Condiciones Generales
        </h1>
        
        <div className="mt-8 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Identificación de las partes
            </h2>
            <div className="space-y-4">
              <p>
                <strong>TAPAGO S.A.</strong> (en adelante, "TAPAGO" o la "Sociedad"), CUIT 30-71877638-4, 
                con domicilio legal en Rivadavia N° 250, piso 10, oficina D de la Ciudad de Córdoba, 
                Provincia de Córdoba, República Argentina, es un proveedor de servicios de pago que 
                actúa bajo la supervisión del Banco Central de la República Argentina (en adelante, "BCRA").
              </p>
              <p>
                Los presentes Términos y Condiciones Generales (en adelante, los "Términos y Condiciones" 
                o los "T&C") regulan el uso y acceso a los servicios prestados por TAPAGO (en adelante, 
                los "Servicios") a sus Clientes (en adelante, el "Cliente" o el "Usuario").
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Objeto
            </h2>
            <p>
              Los presentes T&C tienen por objeto regular la relación entre TAPAGO y el Cliente para la 
              prestación de los Servicios de pago que TAPAGO ofrece a través de su plataforma digital.
            </p>
            <p className="mt-4">
              Los Servicios incluyen, de manera enunciativa pero no limitativa:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Cuenta de pago (wallet digital)</li>
              <li>Pagos y transferencias nacionales e internacionales</li>
              <li>Recepción de fondos</li>
              <li>Conversión de divisas</li>
              <li>Otros servicios financieros complementarios que TAPAGO pueda ofrecer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Aceptación de los Términos y Condiciones
            </h2>
            <p>
              Al registrarse como Cliente y utilizar los Servicios de TAPAGO, el Usuario declara haber leído, 
              comprendido y aceptado en su totalidad los presentes T&C, así como la Política de Privacidad y 
              cualquier otro documento complementario que TAPAGO ponga a disposición.
            </p>
            <p className="mt-4">
              La aceptación de estos T&C es obligatoria para poder utilizar los Servicios. En caso de no estar 
              de acuerdo con alguna de las cláusulas, el Usuario deberá abstenerse de utilizar los Servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Registro y Cuenta del Usuario
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">4.1. Requisitos para el Registro</h3>
              <p>
                Para utilizar los Servicios, el Usuario deberá completar el proceso de registro proporcionando 
                información veraz, exacta, completa y actualizada. El proceso de registro incluye:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Datos personales: nombre completo, fecha de nacimiento, nacionalidad, domicilio</li>
                <li>Documento de identidad válido (DNI, pasaporte)</li>
                <li>Datos de contacto: correo electrónico, número de teléfono</li>
                <li>Información adicional requerida por las normativas de Prevención de Lavado de Activos y 
                    Financiación del Terrorismo (PLA/FT)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">4.2. Validación de Identidad (KYC)</h3>
              <p>
                TAPAGO se reserva el derecho de solicitar documentación adicional y realizar verificaciones de 
                identidad (Know Your Customer - KYC) antes, durante o después del registro, en cumplimiento de 
                las regulaciones del BCRA y normativas aplicables.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">4.3. Responsabilidad del Usuario</h3>
              <p>
                El Usuario es responsable de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>Notificar inmediatamente a TAPAGO cualquier uso no autorizado de su cuenta</li>
                <li>Actualizar su información personal cuando corresponda</li>
                <li>Cumplir con todas las leyes y regulaciones aplicables</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Uso de los Servicios
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">5.1. Uso Permitido</h3>
              <p>
                El Usuario se compromete a utilizar los Servicios de TAPAGO únicamente para fines lícitos y 
                de conformidad con estos T&C.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">5.2. Actividades Prohibidas</h3>
              <p>
                Queda expresamente prohibido utilizar los Servicios para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Actividades ilícitas o fraudulentas</li>
                <li>Lavado de activos o financiamiento del terrorismo</li>
                <li>Transacciones relacionadas con actividades ilegales</li>
                <li>Evasión fiscal o violación de regulaciones cambiarias</li>
                <li>Cualquier actividad que viole las leyes aplicables</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Comisiones y Tarifas
            </h2>
            <p>
              TAPAGO podrá cobrar comisiones y tarifas por la prestación de sus Servicios. Las comisiones 
              aplicables serán informadas al Usuario de manera clara y transparente antes de la ejecución 
              de cada operación.
            </p>
            <p className="mt-4">
              TAPAGO se reserva el derecho de modificar sus comisiones y tarifas, notificando al Usuario con 
              la debida antelación a través de los medios habituales de comunicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Protección de Datos Personales
            </h2>
            <p>
              TAPAGO se compromete a proteger los datos personales de sus Clientes de conformidad con la 
              Ley N° 25.326 de Protección de Datos Personales y su normativa complementaria.
            </p>
            <p className="mt-4">
              Para más información sobre el tratamiento de datos personales, consulte nuestra 
              <Link href="/privacidad" className="text-teal-600 hover:underline ml-1">
                Política de Privacidad
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Limitación de Responsabilidad
            </h2>
            <p>
              TAPAGO no será responsable por:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Daños derivados del uso incorrecto de los Servicios por parte del Usuario</li>
              <li>Interrupciones del servicio por causas de fuerza mayor o caso fortuito</li>
              <li>Demoras en las transacciones debidas a terceros proveedores de servicios</li>
              <li>Pérdidas derivadas de fluctuaciones en tipos de cambio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Suspensión y Terminación
            </h2>
            <div className="space-y-4">
              <p>
                TAPAGO se reserva el derecho de suspender o terminar el acceso del Usuario a los Servicios en 
                cualquier momento, sin previo aviso, en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Incumplimiento de estos T&C</li>
                <li>Sospecha de actividades fraudulentas o ilícitas</li>
                <li>Requerimiento de autoridades competentes</li>
                <li>Decisión unilateral de TAPAGO por motivos comerciales o regulatorios</li>
              </ul>
              <p className="mt-4">
                El Usuario podrá solicitar la cancelación de su cuenta en cualquier momento, sin perjuicio 
                de las obligaciones pendientes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Modificaciones
            </h2>
            <p>
              TAPAGO se reserva el derecho de modificar estos T&C en cualquier momento. Las modificaciones 
              serán notificadas a los Usuarios con una antelación razonable y entrarán en vigencia en la 
              fecha indicada.
            </p>
            <p className="mt-4">
              El uso continuado de los Servicios luego de la entrada en vigencia de las modificaciones 
              implicará la aceptación de los nuevos T&C.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Ley Aplicable y Jurisdicción
            </h2>
            <p>
              Estos T&C se regirán e interpretarán de conformidad con las leyes de la República Argentina.
            </p>
            <p className="mt-4">
              Cualquier controversia derivada de estos T&C será sometida a los tribunales competentes de la 
              Ciudad de Córdoba, Provincia de Córdoba, Argentina.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. Contacto
            </h2>
            <p>
              Para consultas, reclamos o sugerencias relacionadas con estos T&C o los Servicios, puede 
              contactarnos en:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email:</strong> info@tapagopay.net</p>
              <p><strong>Domicilio:</strong> Rivadavia N° 250, piso 10, oficina D, Córdoba Capital, Argentina</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Última actualización:</strong> Febrero 2025
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Versión 1.0
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
