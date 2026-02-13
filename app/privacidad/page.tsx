import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacidadPage() {
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
          Política de Privacidad y Protección de Datos Personales
        </h1>
        
        <div className="mt-8 space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Información General
            </h2>
            <div className="space-y-4">
              <p>
                <strong>TAPAGO S.A.</strong> (en adelante, "TAPAGO", "nosotros" o "la Sociedad"), CUIT 30-71877638-4, 
                con domicilio legal en Rivadavia N° 250, piso 10, oficina D de la Ciudad de Córdoba, Provincia de 
                Córdoba, República Argentina, es responsable del tratamiento de los datos personales de sus Clientes.
              </p>
              <p>
                La presente Política de Privacidad (en adelante, la "Política") describe cómo TAPAGO recopila, 
                utiliza, almacena, comparte y protege los datos personales de los Usuarios de sus servicios, en 
                cumplimiento de la Ley N° 25.326 de Protección de Datos Personales, su Decreto Reglamentario 
                N° 1558/2001, y las normativas del Banco Central de la República Argentina (BCRA).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Datos Personales que Recopilamos
            </h2>
            <div className="space-y-4">
              <p>
                TAPAGO recopila las siguientes categorías de datos personales:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">2.1. Datos de Identificación</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre y apellido completo</li>
                <li>Número de documento de identidad (DNI, CUIT, CUIL)</li>
                <li>Fecha y lugar de nacimiento</li>
                <li>Nacionalidad</li>
                <li>Sexo/Género</li>
                <li>Fotografía del rostro (para verificación de identidad)</li>
                <li>Imágenes del documento de identidad</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">2.2. Datos de Contacto</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dirección de domicilio (calle, número, localidad, provincia, código postal)</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono móvil y/o fijo</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">2.3. Datos Financieros</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Información sobre cuentas bancarias (CBU, CVU, alias)</li>
                <li>Historial de transacciones y operaciones</li>
                <li>Saldos y movimientos en la cuenta TAPAGO</li>
                <li>Información sobre ingresos y actividad económica (cuando corresponda)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">2.4. Datos Técnicos y de Uso</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dirección IP</li>
                <li>Datos de geolocalización</li>
                <li>Información del dispositivo (modelo, sistema operativo, navegador)</li>
                <li>Cookies y tecnologías similares</li>
                <li>Patrones de uso de la plataforma</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">2.5. Datos para Cumplimiento Regulatorio</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Información sobre la condición de Persona Expuesta Políticamente (PEP)</li>
                <li>Origen de los fondos</li>
                <li>Actividad económica principal</li>
                <li>Cualquier otra información requerida por las normativas de Prevención de Lavado de Activos 
                    y Financiación del Terrorismo (PLA/FT)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Finalidades del Tratamiento de Datos
            </h2>
            <div className="space-y-4">
              <p>
                TAPAGO utiliza los datos personales para las siguientes finalidades:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">3.1. Prestación de Servicios</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Crear y gestionar la cuenta del Usuario</li>
                <li>Procesar transacciones de pago y transferencias</li>
                <li>Ofrecer servicios de conversión de divisas</li>
                <li>Gestionar depósitos y retiros de fondos</li>
                <li>Proporcionar atención al cliente y soporte técnico</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">3.2. Cumplimiento Legal y Regulatorio</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verificar la identidad del Usuario (KYC - Know Your Customer)</li>
                <li>Cumplir con obligaciones de Prevención de Lavado de Activos y Financiación del Terrorismo</li>
                <li>Reportar operaciones sospechosas a la Unidad de Información Financiera (UIF)</li>
                <li>Cumplir con requerimientos del BCRA y otras autoridades competentes</li>
                <li>Conservar registros conforme a obligaciones legales</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">3.3. Seguridad y Prevención de Fraude</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Detectar y prevenir actividades fraudulentas</li>
                <li>Proteger la seguridad de la plataforma y de los Usuarios</li>
                <li>Monitorear transacciones para identificar comportamientos inusuales</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">3.4. Mejora de Servicios y Comunicaciones</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mejorar la experiencia del Usuario</li>
                <li>Desarrollar nuevos productos y servicios</li>
                <li>Enviar comunicaciones relacionadas con el servicio (notificaciones de transacciones, 
                    actualizaciones de términos, etc.)</li>
                <li>Realizar análisis estadísticos y estudios de mercado</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">3.5. Marketing (con consentimiento previo)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enviar comunicaciones comerciales sobre productos y servicios de TAPAGO</li>
                <li>Realizar campañas de marketing personalizadas</li>
              </ul>
              <p className="mt-2 text-sm">
                <em>Nota: El Usuario puede revocar su consentimiento para recibir comunicaciones comerciales 
                en cualquier momento.</em>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Base Legal del Tratamiento
            </h2>
            <div className="space-y-4">
              <p>
                TAPAGO trata los datos personales bajo las siguientes bases legales:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ejecución del contrato:</strong> Para prestar los servicios solicitados por el Usuario</li>
                <li><strong>Cumplimiento de obligaciones legales:</strong> Para cumplir con normativas del BCRA, UIF 
                    y otras autoridades</li>
                <li><strong>Interés legítimo:</strong> Para mejorar los servicios, prevenir fraudes y garantizar 
                    la seguridad</li>
                <li><strong>Consentimiento:</strong> Para enviar comunicaciones comerciales (cuando aplique)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Compartir y Transferencia de Datos
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">5.1. Terceros con los que Compartimos Datos</h3>
              <p>
                TAPAGO puede compartir datos personales con terceros en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a prestar servicios (procesamiento 
                    de pagos, verificación de identidad, almacenamiento en la nube, servicios de marketing)</li>
                <li><strong>Socios comerciales:</strong> Instituciones financieras y proveedores de servicios de pago 
                    necesarios para ejecutar transacciones</li>
                <li><strong>Autoridades competentes:</strong> BCRA, UIF, AFIP, organismos judiciales y administrativos 
                    cuando sea requerido por ley</li>
                <li><strong>Auditores y asesores:</strong> Profesionales que nos asisten en el cumplimiento legal y auditorías</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">5.2. Transferencias Internacionales</h3>
              <p>
                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de Argentina. En estos casos, 
                TAPAGO garantiza que dichos proveedores cumplan con estándares de protección de datos equivalentes a 
                los establecidos en la legislación argentina.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Seguridad de los Datos
            </h2>
            <div className="space-y-4">
              <p>
                TAPAGO implementa medidas técnicas y organizativas apropiadas para proteger los datos personales contra:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceso no autorizado</li>
                <li>Pérdida accidental</li>
                <li>Destrucción o daño</li>
                <li>Divulgación no autorizada</li>
              </ul>
              <p className="mt-4">
                Las medidas de seguridad incluyen, entre otras:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cifrado de datos en tránsito y en reposo</li>
                <li>Autenticación de dos factores (2FA)</li>
                <li>Controles de acceso basados en roles</li>
                <li>Monitoreo continuo de sistemas</li>
                <li>Auditorías de seguridad periódicas</li>
                <li>Capacitación del personal en protección de datos</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Conservación de Datos
            </h2>
            <div className="space-y-4">
              <p>
                TAPAGO conserva los datos personales durante el tiempo necesario para cumplir con las finalidades 
                descritas en esta Política y para cumplir con obligaciones legales.
              </p>
              <p className="mt-4">
                Los plazos de conservación incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Datos de transacciones:</strong> 10 años desde la fecha de la operación (requerimiento 
                    de normativas PLA/FT)</li>
                <li><strong>Datos de cuenta:</strong> Mientras la cuenta esté activa y hasta 5 años después de su cierre</li>
                <li><strong>Registros de auditoría:</strong> Según lo requieran las normativas aplicables</li>
              </ul>
              <p className="mt-4">
                Una vez transcurridos los plazos de conservación, los datos serán eliminados de forma segura o 
                anonimizados.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Derechos del Titular de Datos
            </h2>
            <div className="space-y-4">
              <p>
                De conformidad con la Ley N° 25.326, los titulares de datos personales tienen los siguientes derechos:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">8.1. Derecho de Acceso</h3>
              <p>
                Solicitar información sobre qué datos personales TAPAGO posee sobre usted.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">8.2. Derecho de Rectificación</h3>
              <p>
                Solicitar la corrección de datos personales inexactos o incompletos.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">8.3. Derecho de Actualización</h3>
              <p>
                Solicitar la actualización de datos personales desactualizados.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">8.4. Derecho de Supresión</h3>
              <p>
                Solicitar la eliminación de datos personales cuando ya no sean necesarios, salvo que existan 
                obligaciones legales que requieran su conservación.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">8.5. Derecho de Portabilidad</h3>
              <p>
                Solicitar una copia de sus datos personales en un formato estructurado y de uso común.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">8.6. Derecho de Oposición</h3>
              <p>
                Oponerse al tratamiento de datos personales para finalidades específicas, como marketing directo.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">8.7. Cómo Ejercer sus Derechos</h3>
              <p>
                Para ejercer cualquiera de estos derechos, puede contactarnos en:
              </p>
              <div className="mt-4 space-y-2 bg-muted/30 p-4 rounded-lg">
                <p><strong>Email:</strong> info@tapagopay.net</p>
                <p><strong>Asunto:</strong> "Ejercicio de Derechos ARCO"</p>
              </div>
              <p className="mt-4 text-sm">
                TAPAGO responderá a su solicitud dentro de los 10 días hábiles de recibida, conforme a lo 
                establecido por la normativa vigente.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Cookies y Tecnologías Similares
            </h2>
            <div className="space-y-4">
              <p>
                TAPAGO utiliza cookies y tecnologías similares para mejorar la experiencia del Usuario, analizar 
                el uso de la plataforma y personalizar contenido.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">9.1. Tipos de Cookies que Utilizamos</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico de la plataforma</li>
                <li><strong>Cookies de rendimiento:</strong> Para analizar cómo los usuarios utilizan el sitio</li>
                <li><strong>Cookies funcionales:</strong> Para recordar preferencias del usuario</li>
                <li><strong>Cookies de marketing:</strong> Para personalizar anuncios (con consentimiento previo)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">9.2. Gestión de Cookies</h3>
              <p>
                Puede configurar su navegador para rechazar todas las cookies o para recibir una notificación 
                cuando se envíe una cookie. Sin embargo, algunas funciones de la plataforma pueden no funcionar 
                correctamente sin cookies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Datos de Menores de Edad
            </h2>
            <p>
              Los servicios de TAPAGO están dirigidos a personas mayores de 18 años. No recopilamos 
              intencionalmente datos personales de menores de edad. Si TAPAGO tiene conocimiento de que 
              ha recopilado datos de un menor sin el consentimiento parental adecuado, tomará medidas para 
              eliminar esa información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Modificaciones a esta Política
            </h2>
            <p>
              TAPAGO se reserva el derecho de modificar esta Política en cualquier momento. Las modificaciones 
              entrarán en vigencia desde su publicación en la plataforma.
            </p>
            <p className="mt-4">
              Notificaremos a los Usuarios sobre cambios significativos mediante:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Correo electrónico</li>
              <li>Notificaciones en la plataforma</li>
              <li>Avisos destacados en el sitio web</li>
            </ul>
            <p className="mt-4">
              Le recomendamos revisar periódicamente esta Política para estar informado sobre cómo protegemos 
              sus datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. Base de Datos Registrada
            </h2>
            <p>
              La base de datos de TAPAGO está inscripta ante la Dirección Nacional de Protección de Datos 
              Personales (DNPDP), conforme a lo dispuesto por la Ley N° 25.326.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              13. Reclamos ante la Autoridad de Control
            </h2>
            <p>
              Si considera que sus derechos han sido vulnerados, puede presentar un reclamo ante la Dirección 
              Nacional de Protección de Datos Personales:
            </p>
            <div className="mt-4 space-y-2 bg-muted/30 p-4 rounded-lg">
              <p><strong>Agencia de Acceso a la Información Pública</strong></p>
              <p><strong>Dirección Nacional de Protección de Datos Personales</strong></p>
              <p>Av. Pte. Gral. Julio A. Roca 710, Piso 3°</p>
              <p>Ciudad Autónoma de Buenos Aires (C1067ABP)</p>
              <p>Tel: 0800-444-2297</p>
              <p>Web: www.argentina.gob.ar/aaip</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              14. Contacto
            </h2>
            <p>
              Para cualquier consulta relacionada con esta Política de Privacidad o el tratamiento de sus 
              datos personales, puede contactarnos en:
            </p>
            <div className="mt-4 space-y-2 bg-muted/30 p-4 rounded-lg">
              <p><strong>TAPAGO S.A.</strong></p>
              <p><strong>Responsable de Protección de Datos</strong></p>
              <p>Email: info@tapagopay.net</p>
              <p>Domicilio: Rivadavia N° 250, piso 10, oficina D</p>
              <p>Córdoba Capital, Provincia de Córdoba, Argentina</p>
              <p>CUIT: 30-71877638-4</p>
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
