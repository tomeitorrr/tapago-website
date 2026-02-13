"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

function MapIllustration() {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl mx-auto opacity-30"
      aria-hidden="true"
    >
      {/* Simplified world map outline */}
      {/* Americas */}
      <ellipse cx="200" cy="180" rx="80" ry="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
      {/* Europe/Africa */}
      <ellipse cx="420" cy="180" rx="60" ry="110" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
      {/* Asia */}
      <ellipse cx="600" cy="160" rx="100" ry="90" stroke="white" strokeWidth="1" strokeDasharray="4 4" />

      {/* Connection lines */}
      <motion.path
        d="M200 180 Q400 80 600 160"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="8 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.path
        d="M200 200 Q350 300 420 200"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="8 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* Dots for cities */}
      <motion.circle
        cx="180" cy="200" r="6" fill="white"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      />
      <text x="180" y="224" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" opacity="0.8">
        Buenos Aires
      </text>

      <motion.circle
        cx="160" cy="160" r="4" fill="white" opacity="0.7"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      />
      <text x="160" y="148" textAnchor="middle" fill="white" fontSize="9" opacity="0.6">
        {"Córdoba"}
      </text>

      <motion.circle
        cx="250" cy="130" r="4" fill="white" opacity="0.7"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 0.7 }}
      />
      <text x="250" y="118" textAnchor="middle" fill="white" fontSize="9" opacity="0.6">
        Los Angeles
      </text>

      <motion.circle
        cx="640" cy="170" r="6" fill="white"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 0.9 }}
      />
      <text x="640" y="194" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" opacity="0.8">
        Shenzhen
      </text>

      {/* Pulse effects */}
      <motion.circle
        cx="180" cy="200" r="12" stroke="white" strokeWidth="1" fill="none"
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
      />
      <motion.circle
        cx="640" cy="170" r="12" stroke="white" strokeWidth="1" fill="none"
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1, delay: 0.5 }}
      />
    </svg>
  )
}

export function BridgeSection() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-olive-600 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl"
        >
          Conectamos tu negocio con el mundo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-teal-100"
        >
          {"No somos solo una wallet. Somos la infraestructura para que tu negocio pague al mundo sin límites."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <MapIllustration />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 text-center text-xl font-bold text-primary-foreground md:text-2xl"
        >
          {"De Buenos Aires a Shenzhen. De Córdoba a Los Ángeles. Sin fronteras."}
        </motion.p>
      </div>
    </section>
  )
}
