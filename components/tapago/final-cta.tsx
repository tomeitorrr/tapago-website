"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { ArrowRight } from "lucide-react"

export function FinalCta() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section
      ref={ref}
      id="cta-final"
      className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-olive-600 py-24 md:py-32"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance"
        >
          Todo listo para empezar a pagar al mundo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-teal-100"
        >
          {"Dejá de esperar. Dejá de depender. Empezá a pagar al mundo en minutos."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="/abrir-cuenta"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-lg font-bold text-teal-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-900/30 cursor-pointer"
          >
            Crear mi cuenta gratis
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-sm text-teal-200/80"
        >
          Acceso anticipado disponible. Unité ahora.
        </motion.p>
      </div>
    </section>
  )
}
