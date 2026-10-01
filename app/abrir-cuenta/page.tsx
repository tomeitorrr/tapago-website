import type { Metadata } from "next"
import { Clock, Globe, Shield } from "lucide-react"

import { AccountTypeSelector } from "@/components/site/account-type-selector"
import { PreRegistroLayout } from "@/components/site/pre-registro-layout"
import { pageMetadata } from "@/lib/seo"

const description =
  "Pre-registrate en Tapago, para personas o empresas. Te contactamos apenas estemos operativos para continuar con la apertura de tu cuenta."

export const metadata: Metadata = pageMetadata({ title: "Abrir cuenta", description, path: "/abrir-cuenta" })

const features = [
  {
    icon: Clock,
    title: "Prioridad en el lanzamiento",
    desc: "Pre-registrate y te contactamos apenas lancemos para completar la apertura.",
  },
  {
    icon: Globe,
    title: "Pagá al mundo",
    desc: "Pagos a proveedores en el exterior, en países no sancionados ni de alto riesgo.",
  },
  {
    icon: Shield,
    title: "PSPCP inscripto ante el BCRA",
    desc: "Proveedor de Servicios de Pago que ofrece Cuentas de Pago, con infraestructura bancaria.",
  },
]

export default function AbrirCuentaPage() {
  return (
    <PreRegistroLayout
      eyebrow="Acceso anticipado"
      title="Pre-registrate en Tapago"
      description="Tapago está por lanzar. Completá el pre-registro y te contactamos para continuar con la apertura apenas estemos operativos."
      features={features}
      helpText="¿Tenés dudas antes de completar el formulario?"
      formTitle="Solicitud de apertura de cuenta"
    >
      <AccountTypeSelector />
    </PreRegistroLayout>
  )
}
