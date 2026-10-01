import type { Metadata } from "next"
import { Header } from "@/components/tapago/header"
import { Footer } from "@/components/tapago/footer"
import { AccountTypeSelector } from "@/components/tapago/account-type-selector"
import { Shield, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Abrir cuenta — Tapago Pay",
  description: "Solicitá la apertura de tu cuenta en Tapago Pay. Para personas o empresas. Pagos internacionales sin intermediarios.",
}

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
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">

          {/* Encabezado */}
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-700">
              Acceso anticipado
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Pre-registrate en Tapago
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Tapago está por lanzar. Completá el pre-registro y te contactamos para continuar con la apertura apenas estemos operativos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">

            {/* Columna izquierda — beneficios */}
            <div className="order-2 lg:order-1">
              <div className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="mb-6 text-lg font-bold text-foreground">¿Qué pasa después?</h2>
                <div className="flex flex-col gap-6">
                  {features.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600/10">
                        <Icon className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{title}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
                <p className="text-sm font-medium text-teal-800">
                  ¿Tenés dudas antes de completar el formulario?
                </p>
                <p className="mt-1 text-sm text-teal-700">
                  Escribinos a{" "}
                  <a href="mailto:info@tapagopay.net" className="font-semibold underline underline-offset-2">
                    info@tapagopay.net
                  </a>
                </p>
              </div>
            </div>

            {/* Columna derecha — formulario */}
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h2 className="mb-6 text-lg font-bold text-foreground">Solicitud de apertura de cuenta</h2>
                <AccountTypeSelector />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
