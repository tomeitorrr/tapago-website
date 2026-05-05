"use client"

import { useState } from "react"
import { Building2, User } from "lucide-react"
import { OnboardingForm } from "@/components/tapago/onboarding-form"
import { OnboardingFormEmpresa } from "@/components/tapago/onboarding-form-empresa"

type AccountType = "persona" | "empresa"

export function AccountTypeSelector() {
  const [type, setType] = useState<AccountType>("persona")

  return (
    <div>
      {/* Selector de tipo */}
      <div className="mb-8 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setType("persona")}
          className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors ${
            type === "persona"
              ? "border-teal-600 bg-teal-50 text-teal-700"
              : "border-border bg-background text-muted-foreground hover:border-teal-300 hover:bg-teal-50/50"
          }`}
        >
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
            type === "persona" ? "bg-teal-600" : "bg-muted"
          }`}>
            <User className={`h-4 w-4 ${type === "persona" ? "text-white" : "text-muted-foreground"}`} />
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">Persona humana</p>
            <p className="text-xs text-muted-foreground">Cuenta individual</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setType("empresa")}
          className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors ${
            type === "empresa"
              ? "border-teal-600 bg-teal-50 text-teal-700"
              : "border-border bg-background text-muted-foreground hover:border-teal-300 hover:bg-teal-50/50"
          }`}
        >
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
            type === "empresa" ? "bg-teal-600" : "bg-muted"
          }`}>
            <Building2 className={`h-4 w-4 ${type === "empresa" ? "text-white" : "text-muted-foreground"}`} />
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">Empresa</p>
            <p className="text-xs text-muted-foreground">Persona jurídica</p>
          </div>
        </button>
      </div>

      {/* Formulario correspondiente */}
      {type === "persona" ? <OnboardingForm /> : <OnboardingFormEmpresa />}
    </div>
  )
}
