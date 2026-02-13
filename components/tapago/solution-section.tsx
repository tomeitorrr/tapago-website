"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Check } from "lucide-react"

const features = [
  "Abrí tu cuenta 100% online",
  "Cargá pesos desde tu banco o billetera",
  "Pagá al exterior de forma automática",
  "Seguí cada pago en tiempo real",
]

function DetailedMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-teal-600/10">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" />
              <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Tapago Pay</p>
            <p className="text-xs text-muted-foreground">Enviar pago</p>
          </div>
        </div>

        {/* Transfer form */}
        <div className="space-y-4">
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Enviás
            </p>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-foreground">1.200.000</span>
              <span className="rounded-md bg-muted px-2 py-1 text-xs font-semibold text-foreground">ARS</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-4">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Recibe
            </p>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-teal-700">1,200.00</span>
              <span className="rounded-md bg-teal-100 px-2 py-1 text-xs font-semibold text-teal-700">USD</span>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
            <span className="text-xs text-muted-foreground">Tipo de cambio</span>
            <span className="text-xs font-semibold text-foreground">1 USD = 1.000 ARS</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
            <span className="text-xs text-muted-foreground">Comisión</span>
            <span className="text-xs font-semibold text-teal-600">2%</span>
          </div>
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-xl bg-teal-600 py-3 text-sm font-semibold text-primary-foreground"
        >
          Confirmar envío
        </button>
      </div>
    </div>
  )
}

export function SolutionSection() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <DetailedMockup />
          </motion.div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
            >
              Tu wallet para pagos internacionales
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg leading-relaxed text-muted-foreground"
            >
              {"Autogestion real. Desde tu celular o computadora, pagas a proveedores internacionales en minutos."}
            </motion.p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-600">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-base text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 text-lg font-bold text-foreground"
            >
              Sin intermediarios. Sin esperas. Sin excusas.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
