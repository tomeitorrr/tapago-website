"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Rocket, Diamond, BarChart3, Handshake } from "lucide-react"

const benefits = [
  {
    icon: Rocket,
    title: "Autonomía total",
    description:
      "No dependés de horarios ni de que alguien procese tu pago. Vos decidís cuándo y cómo.",
  },
  {
    icon: Diamond,
    title: "Costos transparentes, sin sorpresas",
    description:
      "Usamos el tipo de cambio del mercado, sin márgenes escondidos ni sorpresas.",
  },
  {
    icon: BarChart3,
    title: "Transparencia total, antes de confirmar",
    description:
      "Ves las comisiones, el cambio y el monto final ANTES de confirmar. Sin letra chica.",
  },
  {
    icon: Handshake,
    title: "Soporte humano cuando lo necesitás",
    description:
      "Arrancamos digital, pero si necesitás ayuda, estamos. Siempre.",
  },
]

export function BenefitsSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section ref={ref} id="beneficios" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Cómo te simplificamos pagar al exterior
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-600/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600/10 transition-transform duration-300 group-hover:scale-110">
                <benefit.icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{benefit.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center text-lg font-semibold text-foreground md:text-xl"
        >
          {"Porque tu crecimiento no debería depender de terceros."}
        </motion.p>
      </div>
    </section>
  )
}
