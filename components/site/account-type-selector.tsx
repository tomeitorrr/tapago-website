"use client"

import { useState } from "react"
import { Building2, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { OnboardingForm } from "./onboarding-form"
import { OnboardingFormEmpresa } from "./onboarding-form-empresa"

type AccountType = "persona" | "empresa"

const OPTIONS: { value: AccountType; label: string; hint: string; icon: typeof User }[] = [
  { value: "persona", label: "Persona humana", hint: "Cuenta individual", icon: User },
  { value: "empresa", label: "Empresa", hint: "Persona jurídica", icon: Building2 },
]

export function AccountTypeSelector() {
  const [type, setType] = useState<AccountType>("persona")

  return (
    <div>
      {/* Selector de tipo */}
      <div role="radiogroup" aria-label="Tipo de cuenta" className="mb-8 grid grid-cols-2 gap-2 rounded-2xl bg-offwhite p-1.5 ring-1 ring-inset ring-line">
        {OPTIONS.map(({ value, label, hint, icon: Icon }) => {
          const active = type === value
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setType(value)}
              className={cn(
                "flex min-w-0 items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 sm:px-4",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                active ? "bg-white shadow-[0_6px_20px_-10px_rgba(9,11,20,0.3)]" : "hover:bg-white/60",
              )}
            >
              <span
                className={cn(
                  "hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors sm:flex",
                  active ? "bg-brand text-white" : "bg-white text-text-muted ring-1 ring-inset ring-line",
                )}
              >
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className={cn("block truncate text-sm font-semibold", active ? "text-text-dark" : "text-text-muted")}>
                  {label}
                </span>
                <span className="block truncate text-xs text-text-muted">{hint}</span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Formulario correspondiente */}
      {type === "persona" ? <OnboardingForm /> : <OnboardingFormEmpresa />}
    </div>
  )
}
