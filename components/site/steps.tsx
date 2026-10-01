import { ArrowRight, MapPin, Send, Wallet } from "lucide-react"

import { steps } from "@/lib/site-content"
import { Reveal } from "./reveal"
import { Container } from "./ui"

const icons = { wallet: Wallet, destination: MapPin, send: Send }

function StepCard({ index, title, description, icon }: { index: number; title: string; description: string; icon: keyof typeof icons }) {
  const Icon = icons[icon]
  return (
    <div className="relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 md:p-8">
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <span className="tabular text-sm font-semibold text-text-muted">0{index + 1}</span>
      </div>
      <h3 className="mt-8 text-xl font-bold tracking-tight text-text-dark">{title}</h3>
      <p className="mt-2 leading-relaxed text-text-muted">{description}</p>
    </div>
  )
}

export function Steps() {
  return (
    <section id="como-funciona" className="bg-offwhite py-24 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-5xl font-bold leading-[1] tracking-[-0.04em] text-text-dark md:text-6xl">
            Tres clicks.
            <br />
            <span className="text-brand">Y ya tá-pago.</span>
          </h2>
          <p className="mt-6 text-lg text-text-muted">Pagá a cualquier parte del mundo en simples pasos.</p>
        </Reveal>

        <ol className="mt-16 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-0">
          {steps.map((s, i) => (
            <li key={s.title} className="contents">
              <Reveal delay={i * 0.1} className="h-full">
                <StepCard index={i} {...s} />
              </Reveal>
              {i < steps.length - 1 && (
                <div aria-hidden className="flex justify-center py-1 md:px-3 md:py-0">
                  <div className="flex items-center text-brand/40 max-md:rotate-90">
                    <span className="h-px w-6 bg-[repeating-linear-gradient(90deg,currentColor_0_4px,transparent_4px_8px)] md:w-8" />
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
