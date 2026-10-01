import type { Metadata } from "next"
import { Clock, Globe, Shield } from "lucide-react"

import { OnboardingFormEmpresa } from "@/components/site/onboarding-form-empresa"
import { PreRegistroLayout } from "@/components/site/pre-registro-layout"
import { pageMetadata } from "@/lib/seo"

const description =
  "Pre-registrá a tu empresa en Tapago. Pagos a proveedores del exterior para personas jurídicas; te contactamos apenas estemos operativos."

export const metadata: Metadata = pageMetadata({ title: "Cuenta para empresas", description, path: "/empresa" })

const features = [
  {
    icon: Clock,
    title: "Prioridad en el lanzamiento",
    desc: "Pre-registrate y te contactamos apenas lancemos para completar la apertura.",
  },
  {
    icon: Globe,
    title: "Pagos al mundo para tu empresa",
    desc: "Pagos a proveedores en el exterior, en países no sancionados ni de alto riesgo.",
  },
  {
    icon: Shield,
    title: "PSPCP inscripto ante el BCRA",
    desc: "Proveedor de Servicios de Pago que ofrece Cuentas de Pago, con infraestructura bancaria.",
  },
]

export default function EmpresaPage() {
  return (
    <PreRegistroLayout
      eyebrow="Persona jurídica"
      title="Pre-registrá a tu empresa"
      description="Tapago está por lanzar. Completá el pre-registro de tu empresa y te contactamos para continuar con la apertura apenas estemos operativos."
      features={features}
      helpText="¿Necesitás más información antes de completar el formulario?"
      formTitle="Solicitud de apertura de cuenta — Empresa"
    >
      <OnboardingFormEmpresa />
    </PreRegistroLayout>
  )
}
