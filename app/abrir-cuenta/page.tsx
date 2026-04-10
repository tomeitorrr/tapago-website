import type { Metadata } from "next"
import { Header } from "@/components/tapago/header"
import { Footer } from "@/components/tapago/footer"
import { OnboardingForm } from "@/components/tapago/onboarding-form"
import { Shield, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Abrir cuenta — Tapago Pay",
  description: "Solicitá la apertura de tu cuenta en Tapago Pay. Pagos internacionales sin intermediarios.",
}

const features = [
  {
    icon: Clock,
    title: "Activación en 24-48hs",
    desc: "Revisamos tu solicitud y te damos acceso en menos de dos días hábiles.",
  },
  {
    icon: Globe,
    title: "Pagá al mundo",
    desc: "Proveedores en China, USA y más de 50 países desde el primer día.",
  },
  {
    icon: Shield,
    title: "Regulado por el BCRA",
    desc: "Operamos bajo licencia PSPCP con infraestructura bancaria segura.",
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
              Abrí tu cuenta en Tapago
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Completá el formulario y nuestro equipo revisará tu solicitud. Sin filas, sin papelerío.
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
                  <a href="mailto:hola@tapagopay.net" className="font-semibold underline underline-offset-2">
                    hola@tapagopay.net
                  </a>
                </p>
              </div>
            </div>

            {/* Columna derecha — formulario */}
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h2 className="mb-6 text-lg font-bold text-foreground">Solicitud de apertura de cuenta</h2>
                <OnboardingForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
