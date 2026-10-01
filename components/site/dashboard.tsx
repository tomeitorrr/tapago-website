"use client"

import { useEffect, useState } from "react"
import { animate, motion } from "framer-motion"
import { ArrowDownLeft, ArrowRight, ArrowUpRight, Bell } from "lucide-react"

import { illustrativeQuote, sampleTransactions } from "@/lib/site-content"
import { formatArs, formatUsd } from "@/lib/format"
import { TransactionRow } from "./transaction-row"

const BALANCE = 18_420_500

function useCountUp(target: number, duration = 1.2) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [target, duration])
  return value
}

/** Product mockup for the hero. Fictional data, labeled as a preview. */
export function Dashboard() {
  const balance = useCountUp(BALANCE)
  const { rate, defaultUsd } = illustrativeQuote
  const total = defaultUsd * rate

  return (
    <div className="relative" role="img" aria-label="Vista previa del panel de Tapago con saldo, un pago internacional en curso y actividad reciente">
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-[48px] bg-brand/25 blur-3xl" />

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]" aria-hidden>
        {/* Window bar */}
        <div className="flex items-center justify-between border-b border-line bg-offwhite px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-text-muted ring-1 ring-inset ring-line">
            Vista previa del producto
          </span>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-[1.25fr_1fr] sm:p-6">
          {/* Left: greeting + balance + activity */}
          <div className="min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-bold tracking-tight text-text-dark">Hola, Juan</p>
                <p className="text-[13px] text-text-muted">Tu negocio, ahora global.</p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-offwhite ring-1 ring-inset ring-line">
                <Bell className="h-4 w-4 text-text-muted" />
              </span>
            </div>

            <div className="mt-5 rounded-2xl bg-ink p-4 text-white">
              <p className="text-[12px] text-white/60">Saldo disponible</p>
              <p className="tabular mt-1 text-2xl font-bold tracking-tight">{formatArs(balance)}</p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium">
                  <ArrowDownLeft className="h-3 w-3" /> Cargar
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[11px] font-medium">
                  <ArrowUpRight className="h-3 w-3" /> Pagar
                </span>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-text-muted">Actividad</p>
              <div className="mt-1 divide-y divide-line">
                {sampleTransactions.slice(0, 3).map((t) => (
                  <TransactionRow key={t.counterparty} {...t} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: payment widget */}
          <div className="flex flex-col rounded-2xl border border-line p-4">
            <p className="text-sm font-semibold text-text-dark">Nuevo pago internacional</p>

            <div className="mt-4 rounded-xl bg-offwhite p-3">
              <p className="text-[11px] text-text-muted">Vos enviás</p>
              <p className="tabular mt-0.5 text-lg font-bold text-text-dark">{formatArs(total)}</p>
            </div>
            <div className="mt-2 rounded-xl bg-offwhite p-3">
              <p className="text-[11px] text-text-muted">Proveedor recibe</p>
              <p className="tabular mt-0.5 text-lg font-bold text-text-dark">{formatUsd(defaultUsd)}</p>
            </div>

            <dl className="mt-4 space-y-2 text-[12px]">
              <div className="flex justify-between">
                <dt className="text-text-muted">Tipo de cambio</dt>
                <dd className="tabular font-medium text-text-dark">1 USD = {formatArs(rate, 2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text-muted">Estado</dt>
                <dd className="font-medium text-success">Cotización confirmada</dd>
              </div>
            </dl>

            <motion.span
              whileHover={{ y: -1 }}
              className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand sm:mt-auto px-4 py-2.5 text-[13px] font-semibold text-white"
            >
              Enviar {formatUsd(defaultUsd, 0)} <ArrowRight className="h-3.5 w-3.5" />
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  )
}
