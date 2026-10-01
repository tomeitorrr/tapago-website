"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"
import { Check, Loader2 } from "lucide-react"

import { trackerBenefits, trackerStages } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"
import { Badge, Container, SectionHeading } from "./ui"

const STEP_MS = 900

/** Sample operation tracker. Stages complete one by one once in view (instantly with reduced motion). */
export function TransactionTracker() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-120px" })
  const reduceMotion = useReducedMotion()
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setCompleted(trackerStages.length)
      return
    }
    const id = setInterval(() => {
      setCompleted((c) => {
        if (c >= trackerStages.length) {
          clearInterval(id)
          return c
        }
        return c + 1
      })
    }, STEP_MS)
    return () => clearInterval(id)
  }, [inView, reduceMotion])

  const done = completed >= trackerStages.length

  return (
    <div ref={ref} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[13px] text-white/50">Pago a Euro Machinery GmbH</p>
          <p className="tabular mt-1 text-2xl font-bold tracking-tight text-white">USD 18.900,00</p>
        </div>
        <Badge tone={done ? "success" : "dark"} className={cn(done && "bg-success/15 text-[#5BE09D]")}>
          {done ? "Completado" : "En curso"}
        </Badge>
      </div>

      <ol className="mt-8">
        {trackerStages.map((stage, i) => {
          const isDone = i < completed
          const isCurrent = i === completed && !done
          const isLast = i === trackerStages.length - 1
          return (
            <li key={stage.title} className="relative flex gap-4 pb-7 last:pb-0">
              {!isLast && (
                <span aria-hidden className="absolute left-[15px] top-9 h-[calc(100%-2.5rem)] w-px bg-white/10">
                  <span
                    className="block w-full bg-lime transition-[height] duration-700 ease-out"
                    style={{ height: isDone ? "100%" : "0%" }}
                  />
                </span>
              )}
              <span
                className={cn(
                  "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-500",
                  isDone && "border-lime bg-lime text-ink",
                  isCurrent && "border-brand-light/60 bg-brand/20 text-brand-light",
                  !isDone && !isCurrent && "border-white/15 text-white/30",
                )}
              >
                {isDone ? (
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
                ) : isCurrent ? (
                  <Loader2 className="h-4 w-4 motion-safe:animate-spin" aria-hidden />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                )}
              </span>
              <div className="min-w-0 pt-1">
                <p className={cn("font-semibold transition-colors duration-500", isDone || isCurrent ? "text-white" : "text-white/40")}>
                  {stage.title}
                </p>
                <p className="mt-0.5 text-sm text-white/45">{stage.detail}</p>
              </div>
            </li>
          )
        })}
      </ol>
      <p className="sr-only" aria-live="polite">
        {done ? "Operación completada" : ""}
      </p>
    </div>
  )
}

export function TrackingSection() {
  return (
    <section id="seguimiento" className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[120px]"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20 [&>*]:min-w-0">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Control de principio a fin"
            title={
              <>
                Sabé dónde está tu pago.
                <br />
                <span className="text-brand-light">Paso a paso.</span>
              </>
            }
            description="Seguí cada etapa de tu operación desde que enviás los fondos hasta la acreditación."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {trackerBenefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-[15px] text-white/80">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <TransactionTracker />
        </Reveal>
      </Container>
    </section>
  )
}
