"use client"

import { motion } from "framer-motion"
import { Globe2 } from "lucide-react"

import { coverageMarkets, coverageOrigin, coveragePoints } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { WORLD_DOTS_PATH, WORLD_VIEWBOX } from "@/lib/world-dots"
import { Reveal } from "./reveal"
import { Container, SectionHeading } from "./ui"

/** Quadratic arc from origin to target; control point biased toward the target so routes fan out. */
function routePath(x: number, y: number) {
  const { x: ox, y: oy } = coverageOrigin
  const dist = Math.hypot(x - ox, y - oy)
  const cx = ox + (x - ox) * 0.6
  const cy = Math.min(oy, y) - dist * 0.18
  return `M${ox} ${oy} Q${cx} ${cy} ${x} ${y}`
}

function labelProps(m: (typeof coverageMarkets)[number]) {
  if (m.labelPos === "left") return { x: m.x - 1.3, y: m.y + 0.5, textAnchor: "end" as const }
  if (m.labelPos === "right") return { x: m.x + 1.3, y: m.y + 0.5, textAnchor: "start" as const }
  if (m.labelPos === "below") return { x: m.x, y: m.y + 2.6, textAnchor: "middle" as const }
  return { x: m.x, y: m.y - 1.4, textAnchor: "middle" as const }
}

export function WorldMap() {
  return (
    <svg
      viewBox={`0 0 ${WORLD_VIEWBOX.width} ${WORLD_VIEWBOX.height}`}
      className="h-auto w-full overflow-visible max-sm:[&_.route]:[stroke-width:0.55]"
      role="img"
      aria-label="Mapa con rutas de pago desde Argentina hacia Estados Unidos, México, Brasil, Europa, Emiratos Árabes y China"
    >
      <path d={WORLD_DOTS_PATH} stroke="#D5D7E3" strokeWidth={0.5} strokeLinecap="round" fill="none" />

      {coverageMarkets.map((m, i) => {
        const d = routePath(m.x, m.y)
        return (
          <g key={m.code} className={m.primary ? undefined : "max-sm:hidden"}>
            <motion.path
              d={d}
              className="route"
              fill="none"
              stroke="#635BFF"
              strokeWidth={0.35}
              strokeLinecap="round"
              strokeOpacity={0.55}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.12 }}
            />
            {/* Travelling pulse along the route — hidden for reduced motion. */}
            <circle r={0.45} fill="#635BFF" className="motion-reduce:hidden">
              <animateMotion dur="4.5s" begin={`${1.6 + i * 0.5}s`} repeatCount="indefinite" path={d} />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur="4.5s"
                begin={`${1.6 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={m.x} cy={m.y} r={0.7} fill="#FFFFFF" stroke="#635BFF" strokeWidth={0.35} />
            <text
              {...labelProps(m)}
              className={cn(
                "fill-text-muted font-sans",
                m.primary ? "max-sm:[font-size:2.6px]" : "max-md:hidden",
              )}
              fontSize={1.5}
              fontWeight={500}
            >
              {m.label}
            </text>
          </g>
        )
      })}

      {/* Origin */}
      <circle cx={coverageOrigin.x} cy={coverageOrigin.y} r={2.4} fill="#635BFF" opacity={0.15} className="motion-safe:animate-ping [transform-box:fill-box] [transform-origin:center]" />
      <circle cx={coverageOrigin.x} cy={coverageOrigin.y} r={1.1} fill="#635BFF" stroke="#FFFFFF" strokeWidth={0.35} />
      <text
        x={coverageOrigin.x + 1.8}
        y={coverageOrigin.y + 0.55}
        className="fill-text-dark font-sans max-sm:[font-size:2.8px]"
        fontSize={1.7}
        fontWeight={700}
      >
        {coverageOrigin.label}
      </text>
    </svg>
  )
}

export function CoverageSection() {
  return (
    <section id="cobertura" className="overflow-hidden bg-white py-24 md:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Cobertura global"
            title="Tu negocio, sin fronteras."
            description="Pagá y cobrá en mercados internacionales con la infraestructura de Tapago."
          />
          <ul className="mt-10 space-y-6">
            {coveragePoints.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Globe2 className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-text-dark">{p.title}</p>
                  <p className="mt-1 leading-relaxed text-text-muted">{p.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <WorldMap />
          <p className="mt-6 text-center text-xs text-text-muted">
            Mercados principales de referencia. La disponibilidad por país está sujeta a la normativa vigente.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
