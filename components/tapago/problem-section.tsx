"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Clock, DollarSign, Phone, Lock } from "lucide-react"

const painPoints = [
  {
    icon: Clock,
    text: "Esperar días para que alguien más haga tu pago",
  },
  {
    icon: DollarSign,
    text: "Pagar comisiones ocultas y tipos de cambio inflados",
  },
  {
    icon: Phone,
    text: "Depender de horarios, mails y gestiones eternas",
  },
  {
    icon: Lock,
    text: "No saber dónde está tu plata ni cuándo llega",
  },
]

export function ProblemSection() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
        >
          {"Con Tapago le encontramos la vuelta"}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-muted/30 p-6 transition-all duration-300 hover:border-teal-200 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-600/10">
                <point.icon className="h-5 w-5 text-teal-600" />
              </div>
              <p className="text-base leading-relaxed text-foreground">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center text-lg font-semibold text-foreground md:text-xl"
        >
          {"Importar, crecer y pagar al mundo de una forma simple"}
        </motion.p>
      </div>
    </section>
  )
}
