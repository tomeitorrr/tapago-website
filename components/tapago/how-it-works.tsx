"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Target, Wallet, Globe } from "lucide-react"

const steps = [
  {
    icon: Target,
    title: "Registrate en minutos",
    description: "Validá tu identidad online y recibí tu CVU para cargar fondos.",
    step: "01",
  },
  {
    icon: Wallet,
    title: "Cargá pesos",
    description: "Transferí desde tu banco o billetera directo a tu cuenta Tapago.",
    step: "02",
  },
  {
    icon: Globe,
    title: "Pagá al exterior",
    description: "Elegí destino, ingresá datos del proveedor y confirmá. Listo.",
    step: "03",
  },
]

export function HowItWorks() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} id="como-funciona" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
        >
          Tres clicks y ya tá-pago. Nunca fue tan veloz
        </motion.h2>

        <div className="relative mt-16">
          {/* Connecting line - desktop */}
          <div className="absolute top-16 right-0 left-0 hidden h-0.5 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="mx-auto h-full max-w-[600px] origin-left bg-gradient-to-r from-teal-600 via-teal-400 to-olive-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:border-teal-300 hover:shadow-xl">
                  <span className="mb-1 text-xs font-bold uppercase tracking-widest text-teal-600">
                    Paso {step.step}
                  </span>
                  <step.icon className="h-8 w-8 text-teal-600" />
                </div>

                {/* Connecting line - mobile */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.2 }}
                    className="my-2 h-8 w-0.5 origin-top bg-gradient-to-b from-teal-600 to-olive-500 lg:hidden"
                  />
                )}

                <h3 className="mt-6 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 max-w-xs text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-14 text-center text-lg font-semibold text-foreground md:text-xl"
        >
          {"Así de simple. Así de rápido."}
        </motion.p>
      </div>
    </section>
  )
}
