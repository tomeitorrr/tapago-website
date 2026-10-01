"use client"

import { forwardRef, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { AlertCircle, ArrowRight, Check, Loader2 } from "lucide-react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Button } from "./ui"

/* Shared building blocks for the pre-registro forms (/abrir-cuenta, /empresa). */

const controlClass =
  "flex h-12 w-full rounded-xl border bg-white px-4 text-[15px] text-text-dark transition-colors placeholder:text-text-muted/70 " +
  "focus-visible:outline-none focus-visible:ring-4 focus:outline-none focus:ring-4"

function controlState(invalid: boolean) {
  return invalid
    ? "border-red-500 focus-visible:ring-red-500/15 focus:ring-red-500/15"
    : "border-line hover:border-text-dark/25 focus-visible:border-brand focus-visible:ring-brand/15 focus:border-brand focus:ring-brand/15"
}

function FieldLabel({ htmlFor, required, hidden, children }: { htmlFor: string; required?: boolean; hidden?: boolean; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className={cn("mb-2 block text-sm font-semibold text-text-dark", hidden && "sr-only")}>
      {children}
      {required && (
        <span className="ml-0.5 text-brand" aria-hidden>
          *
        </span>
      )}
    </label>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-[13px] font-medium text-red-600">
      {message}
    </p>
  )
}

/* ---------- TextField ---------- */

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  error?: string
  hideLabel?: boolean
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { id, label, error, hideLabel, required, className, ...props },
  ref,
) {
  const errorId = `${id}-error`
  return (
    <div className={className}>
      <FieldLabel htmlFor={id} required={required} hidden={hideLabel}>
        {label}
      </FieldLabel>
      <input
        ref={ref}
        id={id}
        aria-required={required || undefined}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(controlClass, controlState(!!error))}
        {...props}
      />
      <FieldError id={errorId} message={error} />
    </div>
  )
})

/* ---------- SelectField ---------- */

interface SelectFieldProps {
  id: string
  label: string
  placeholder: string
  options: string[]
  onValueChange: (value: string) => void
  defaultValue?: string
  error?: string
  required?: boolean
}

export function SelectField({ id, label, placeholder, options, onValueChange, defaultValue, error, required }: SelectFieldProps) {
  const errorId = `${id}-error`
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <Select defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger
          id={id}
          aria-required={required || undefined}
          aria-invalid={!!error || undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(controlClass, controlState(!!error), "ring-offset-0 focus:ring-offset-0 data-[placeholder]:text-text-muted/70")}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="rounded-xl border-line shadow-[0_20px_50px_-20px_rgba(9,11,20,0.35)]">
          {options.map((o) => (
            <SelectItem key={o} value={o} className="rounded-lg py-2.5 text-[14px] focus:bg-brand-soft focus:text-brand">
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldError id={errorId} message={error} />
    </div>
  )
}

/* ---------- Fieldset (group of fields under one legend) ---------- */

export function FieldGroup({ legend, required, children }: { legend: string; required?: boolean; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-text-dark">
        {legend}
        {required && (
          <span className="ml-0.5 text-brand" aria-hidden>
            *
          </span>
        )}
      </legend>
      <div className="flex flex-col gap-3">{children}</div>
    </fieldset>
  )
}

/* ---------- Step indicator ---------- */

export function StepIndicator({ step, labels }: { step: number; labels: string[] }) {
  return (
    <div className="mb-7">
      <p className="text-[13px] font-medium text-text-muted" aria-live="polite">
        Paso {step} de {labels.length} · <span className="font-semibold text-text-dark">{labels[step - 1]}</span>
      </p>
      <div className="mt-3 flex gap-1.5" aria-hidden>
        {labels.map((l, i) => (
          <span
            key={l}
            className={cn("h-1.5 flex-1 rounded-full transition-colors duration-300", i < step ? "bg-brand" : "bg-line")}
          />
        ))}
      </div>
    </div>
  )
}

/* ---------- Animated step wrapper ---------- */

export function StepPanel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-5"
    >
      {children}
    </motion.div>
  )
}

/* ---------- Actions ---------- */

export function NextButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="lime" size="lg" onClick={onClick} className="w-full focus-visible:ring-offset-white">
      Continuar <ArrowRight className="h-4 w-4" aria-hidden />
    </Button>
  )
}

export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="ghost-light" size="lg" onClick={onClick} className="w-full sm:w-auto sm:px-7">
      Volver
    </Button>
  )
}

export function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <Button type="submit" variant="lime" size="lg" disabled={loading} aria-busy={loading} className="w-full focus-visible:ring-offset-white">
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          Enviando...
        </>
      ) : (
        <>
          Enviar solicitud <ArrowRight className="h-4 w-4" aria-hidden />
        </>
      )}
    </Button>
  )
}

/** Back + primary action. Stacks on mobile with the primary action on top. */
export function StepActions({ children }: { children: React.ReactNode }) {
  return <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row">{children}</div>
}

/* ---------- Status messages ---------- */

export function FormError({ message }: { message: string }) {
  return (
    <div role="alert" className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <span>{message}</span>
    </div>
  )
}

export function FormSuccess({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  // The card shrinks on success: bring the confirmation into view and move focus to it.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    el.focus({ preventScroll: true })
    el.scrollIntoView({ block: "center", behavior: reduced ? "auto" : "smooth" })
  }, [])

  return (
    <motion.div
      ref={ref}
      tabIndex={-1}
      role="status"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center px-2 py-8 text-center outline-none"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime ring-8 ring-lime/20">
        <Check className="h-8 w-8 text-ink" strokeWidth={2.5} aria-hidden />
      </div>
      <h3 className="mt-7 text-2xl font-bold tracking-[-0.02em] text-text-dark">¡Pre-registro recibido!</h3>
      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-text-muted">{children}</p>
      <a
        href="/"
        className="mt-8 rounded text-sm font-semibold text-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
      >
        Volver al inicio
      </a>
    </motion.div>
  )
}
