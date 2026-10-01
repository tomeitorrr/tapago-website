import { Activity, Building2, Fingerprint, Landmark, ShieldCheck, Wallet } from "lucide-react"

import { securityFeatures } from "@/lib/site-content"
import { Reveal } from "./reveal"
import { Container, SectionHeading } from "./ui"

const icons = {
  landmark: Landmark,
  wallet: Wallet,
  id: Fingerprint,
  activity: Activity,
  shield: ShieldCheck,
  building: Building2,
}

function TrustFeature({ title, description, icon }: { title: string; description: string; icon: keyof typeof icons }) {
  const Icon = icons[icon]
  return (
    <div className="h-full rounded-3xl border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(16,18,37,0.18)] md:p-7">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-6 text-[17px] font-bold tracking-tight text-text-dark">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{description}</p>
    </div>
  )
}

export function SecuritySection() {
  return (
    <section id="seguridad" className="bg-offwhite py-24 md:py-32">
      <Container className="grid gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Seguridad y regulación"
            title="Infraestructura financiera regulada. En serio."
            description="Operá con una plataforma diseñada bajo estándares de seguridad, cumplimiento y monitoreo transaccional."
          />
          <p className="mt-8 border-l-2 border-brand pl-4 text-[15px] leading-relaxed text-text-dark">
            Tapago S.A. es un Proveedor de Servicios de Pago que ofrece Cuentas de Pago (PSPCP), inscripto ante el
            Banco Central de la República Argentina.
          </p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {securityFeatures.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={(i % 2) * 0.08} className="h-full">
                <TrustFeature {...f} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
