"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { ParticleNetwork } from "./particle-network"

function WalletMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-teal-600/10">
        {/* Status bar */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">9:41</span>
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-teal-600" />
            <div className="h-2 w-2 rounded-full bg-teal-400" />
            <div className="h-2 w-2 rounded-full bg-teal-200" />
          </div>
        </div>

        {/* Balance */}
        <div className="mb-6">
          <p className="text-xs font-medium text-muted-foreground">Saldo disponible</p>
          <p className="text-3xl font-bold text-foreground">$2.450.000</p>
          <p className="text-xs text-muted-foreground">ARS</p>
        </div>

        {/* Quick actions */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          {[
            { label: "Cargar", color: "bg-teal-600" },
            { label: "Enviar", color: "bg-olive-500" },
            { label: "Historial", color: "bg-soft-orange-400" },
          ].map((action) => (
            <div key={action.label} className="flex flex-col items-center gap-1.5">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${action.color}`}>
                <div className="h-4 w-4 rounded bg-primary-foreground/30" />
              </div>
              <span className="text-[11px] font-medium text-muted-foreground">{action.label}</span>
            </div>
          ))}
        </div>

        {/* Recent transaction */}
        <div className="rounded-xl border border-border bg-muted/50 p-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">Pago a Shenzhen</span>
            <span className="text-xs font-bold text-teal-600">USD 1,200</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground">Proveedor: Tech Components Ltd</span>
            <span className="inline-flex items-center rounded-full bg-olive-500/10 px-2 py-0.5 text-[10px] font-medium text-olive-600">
              Completado
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
      {/* Particle network background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50/60 via-card to-teal-50/20" />
      <ParticleNetwork />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left: Text content (60%) */}
        <div className="flex-[3] text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center rounded-full bg-soft-orange-400/15 px-3.5 py-1 text-xs font-semibold text-soft-orange-500">
              Acceso anticipado
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] md:text-5xl lg:text-6xl"
          >
            {"Dejá de depender de intermediarios para pagar al exterior"}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0 mx-auto"
          >
            {"Pagá a tus proveedores en el mundo, directo desde tu wallet. Tipo de cambio real, costos claros y todo bajo control."}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center"
          >
            <a
              href="/abrir-cuenta"
              className="group inline-flex items-center gap-2 rounded-lg bg-teal-600 px-7 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/20 cursor-pointer"
            >
              Abrir mi cuenta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#como-funciona"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-7 py-3.5 text-base font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg"
            >
              <Play className="h-4 w-4 text-teal-600" />
              Ver como funciona
            </a>
          </motion.div>
        </div>

        {/* Right: App Mockup (40%) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-[2]"
        >
          <WalletMockup />
        </motion.div>
      </div>
    </section>
  )
}
