import { Building2, Landmark, ScanEye, ShieldCheck } from "lucide-react"

import { Reveal } from "./reveal"
import { Container } from "./ui"

// Factual infrastructure indicators — used instead of customer logos until there is authorization to publish them.
const items = [
  { icon: Landmark, title: "PSPCP inscripto ante el BCRA", text: "Proveedor de Servicios de Pago que ofrece Cuentas de Pago." },
  { icon: Building2, title: "CVU en pesos", text: "Cuenta propia para cargar y administrar tu saldo." },
  { icon: ShieldCheck, title: "Infraestructura bancaria", text: "Operamos sobre entidades financieras reguladas." },
  { icon: ScanEye, title: "Seguridad y monitoreo", text: "KYC/KYB y monitoreo transaccional en cada operación." },
]

export function TrustStrip() {
  return (
    <section aria-label="Indicadores de confianza" className="border-b border-line bg-white py-14 md:py-16">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.06} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-text-dark">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
