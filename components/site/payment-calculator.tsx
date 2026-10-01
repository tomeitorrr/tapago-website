"use client"

import { useId, useState } from "react"
import { ArrowRight, Info } from "lucide-react"

import { formatArs, formatNumber } from "@/lib/format"
import { illustrativeQuote } from "@/lib/site-content"
import { AnimatedNumber } from "./animated-number"
import { Reveal } from "./reveal"
import { Badge, ButtonLink, Container, SectionHeading } from "./ui"

const MAX_USD = 10_000_000

function parseAmount(raw: string) {
  const digits = raw.replace(/\D/g, "")
  return Math.min(Number(digits || 0), MAX_USD)
}

/**
 * Illustrative quote calculator. Rate comes from `illustrativeQuote`, NOT a live feed —
 * connect to the quotation backend before presenting values as real.
 */
export function PaymentCalculator() {
  const inputId = useId()
  const { rate, defaultUsd } = illustrativeQuote
  const [usd, setUsd] = useState(defaultUsd)

  const total = usd * rate

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_30px_60px_-30px_rgba(99,91,255,0.25)] sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-text-dark">Simulá tu pago</p>
        <Badge tone="neutral">Valores ilustrativos</Badge>
      </div>

      <div className="mt-6 rounded-2xl border border-line p-4 focus-within:border-brand focus-within:ring-4 focus-within:ring-brand/10">
        <label htmlFor={inputId} className="text-[13px] text-text-muted">
          Tu proveedor recibe
        </label>
        <div className="mt-1 flex items-center gap-3">
          <input
            id={inputId}
            inputMode="numeric"
            autoComplete="off"
            value={usd ? formatNumber(usd) : ""}
            placeholder="0"
            onChange={(e) => setUsd(parseAmount(e.target.value))}
            className="tabular w-full min-w-0 flex-1 bg-transparent text-3xl font-bold tracking-tight text-text-dark outline-none placeholder:text-text-muted/40 sm:text-4xl"
          />
          <span className="rounded-full bg-offwhite px-3 py-1.5 text-sm font-semibold text-text-dark ring-1 ring-inset ring-line">
            USD
          </span>
        </div>
      </div>

      <div className="mt-3 rounded-2xl bg-offwhite p-4">
        <p className="text-[13px] text-text-muted">Vos enviás (antes de comisiones)</p>
        <p className="tabular mt-1 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl" aria-live="polite">
          <AnimatedNumber value={total} format={(n) => formatArs(n)} />
        </p>
      </div>

      <dl className="mt-6 space-y-3 text-[15px]">
        <div className="flex justify-between gap-4">
          <dt className="text-text-muted">Tipo de cambio de referencia</dt>
          <dd className="tabular font-medium text-text-dark">1 USD = {formatArs(rate, 2)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-text-muted">Comisión Tapago</dt>
          <dd className="text-right font-medium text-text-dark">Se informa antes de confirmar</dd>
        </div>
      </dl>

      <ButtonLink href="/abrir-cuenta" variant="brand" size="lg" className="mt-7 w-full">
        Continuar <ArrowRight className="h-4 w-4" aria-hidden />
      </ButtonLink>

      <p className="mt-4 flex gap-2 text-xs leading-relaxed text-text-muted">
        <Info className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden />
        Simulación con un tipo de cambio de referencia. No es una cotización real; la cotización y las comisiones
        vigentes se informan en la plataforma antes de confirmar cada operación.
      </p>
    </div>
  )
}

export function QuoteSection() {
  return (
    <section id="cotizar" className="bg-[#F3F2FF] py-24 md:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 [&>*]:min-w-0">
        <Reveal>
          <SectionHeading
            eyebrow="Cotizá antes de operar"
            title="¿Cuánto querés pagar?"
            description="Conocé el monto y los costos antes de confirmar tu operación."
          />
          <ul className="mt-8 space-y-3 text-[15px] text-text-dark">
            <li>— Ves el tipo de cambio antes de confirmar.</li>
            <li>— Conocés los costos antes de confirmar.</li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <PaymentCalculator />
        </Reveal>
      </Container>
    </section>
  )
}
