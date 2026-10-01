"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

import { trustItems } from "@/lib/site-content"
import { Dashboard } from "./dashboard"
import { ButtonLink, Container, Eyebrow } from "./ui"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-24 pt-32 text-white md:pb-32 md:pt-40">
      {/* Atmospheric navy/purple gradient */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_75%_30%,rgba(99,91,255,0.28),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_90%,rgba(139,131,255,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_70%,#090B14)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      </div>

      <Container className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 text-[13px] text-white/75">
            <span className="rounded-full bg-lime px-2 py-0.5 text-[11px] font-semibold text-ink">Próximamente</span>
            Estamos preparando el lanzamiento
          </div>

          <Eyebrow dark>Pagos internacionales para empresas</Eyebrow>

          <h1 className="mt-5 text-[44px] font-bold leading-[0.98] tracking-[-0.04em] sm:text-[56px] lg:text-[72px]">
            Pagá al mundo.
            <br />
            <span className="bg-gradient-to-r from-brand-light to-[#B9B4FF] bg-clip-text text-transparent">
              Desde pesos.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
            Tu cuenta Tapago conecta tu negocio con proveedores internacionales. Cargá pesos, cotizá y pagá en USD
            desde una sola plataforma.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/abrir-cuenta" variant="lime" size="lg" className="w-full sm:w-auto">
              Abrir una cuenta <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="#como-funciona" variant="ghost-dark" size="lg" className="w-full sm:w-auto">
              Ver cómo funciona
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
            {trustItems.map((item) => (
              <li key={item} className="inline-flex items-center gap-2 text-[13px] text-white/60">
                <Check className="h-3.5 w-3.5 text-lime" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
        >
          <Dashboard />
        </motion.div>
      </Container>
    </section>
  )
}
