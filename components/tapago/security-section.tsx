"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Landmark, Shield, ClipboardCheck } from "lucide-react"

const badges = [
  {
    icon: Landmark,
    title: "Licencia PSPCP",
    subtitle: "Banco Central de la República Argentina",
  },
  {
    icon: Shield,
    title: "Infraestructura bancaria",
    subtitle: "Regulada y auditada",
  },
  {
    icon: ClipboardCheck,
    title: "Cumplimiento normativo",
    subtitle: "Full compliance",
  },
]

export function SecuritySection() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left: Text (60%) */}
          <div className="w-full lg:w-3/5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
            >
              Regulados. Seguros. En serio.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              {"Tapago opera bajo licencia PSPCP otorgada por el BCRA y está respaldado por infraestructura bancaria regulada para pagos internacionales. Tu dinero está protegido. Tus operaciones, auditadas. Tu confianza, ganada."}
            </motion.p>
          </div>

          {/* Right: Badges (40%) */}
          <div className="w-full lg:w-2/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-col">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-muted/30 p-5 transition-all duration-300 hover:border-teal-200 hover:shadow-md sm:flex-1 lg:flex-none"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-600/10">
                    <badge.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{badge.title}</p>
                    <p className="text-sm text-muted-foreground">{badge.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
