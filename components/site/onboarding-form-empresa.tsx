"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import {
  BackButton,
  FieldGroup,
  FormError,
  FormSuccess,
  NextButton,
  SelectField,
  StepActions,
  StepIndicator,
  StepPanel,
  SubmitButton,
  TextField,
} from "./form-ui"

// ─── Esquema de validación ───────────────────────────────────────────────────

const schema = z.object({
  // Paso 1 — Datos de la empresa
  razonSocial: z.string().min(2, "La razón social es requerida"),
  cuit: z.string().min(1, "El CUIT es requerido"),
  tipoSocietario: z.string({ required_error: "El tipo societario es requerido" }).min(1, "El tipo societario es requerido"),
  actividadPrincipal: z.string({ required_error: "La actividad principal es requerida" }).min(1, "La actividad principal es requerida"),

  // Paso 2 — Representante legal
  nombreRepresentante: z.string().min(2, "El nombre es requerido"),
  cuilRepresentante: z.string().min(1, "El CUIL es requerido"),
  cargoRepresentante: z.string({ required_error: "El cargo es requerido" }).min(1, "El cargo es requerido"),

  // Paso 3 — Contacto y sede social
  email: z.string().email("Email inválido"),
  telefono: z.string().min(1, "El teléfono es requerido"),
  calleNumero: z.string().min(1, "La calle y número son requeridos"),
  ciudad: z.string().min(1, "La ciudad es requerida"),
  provincia: z.string().min(1, "La provincia es requerida"),
  codigoPostal: z.string().min(1, "El código postal es requerido"),
})

type FormData = z.infer<typeof schema>

// ─── Listas de opciones ──────────────────────────────────────────────────────

const TIPOS_SOCIETARIOS = [
  "Sociedad Anónima (SA)",
  "Sociedad de Responsabilidad Limitada (SRL)",
  "Sociedad por Acciones Simplificada (SAS)",
  "Sociedad en Comandita Simple",
  "Sociedad Colectiva",
  "Cooperativa",
  "Asociación Civil",
  "Fundación",
  "Otro",
]

const ACTIVIDADES = [
  "Importaciones de bienes",
  "Exportaciones de bienes",
  "Comercio exterior de servicios",
  "Comercio minorista / mayorista",
  "Producción agropecuaria",
  "Industria manufacturera",
  "Construcción",
  "Servicios profesionales",
  "Tecnología / Software",
  "Transporte y logística",
  "Otro",
]

const CARGOS = [
  "Presidente / Presidenta",
  "Gerente General",
  "Director / Directora",
  "Socio/a Gerente",
  "Apoderado/a",
  "Representante Legal",
  "Otro",
]

const STEP_FIELDS: Record<number, (keyof FormData)[]> = {
  1: ["razonSocial", "cuit", "tipoSocietario", "actividadPrincipal"],
  2: ["nombreRepresentante", "cuilRepresentante", "cargoRepresentante"],
  3: ["email", "telefono", "calleNumero", "ciudad", "provincia", "codigoPostal"],
}

const STEP_LABELS = ["Datos de la empresa", "Representante legal", "Contacto y sede social"]

// ─── Componente principal ────────────────────────────────────────────────────

export function OnboardingFormEmpresa() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const handleNext = async () => {
    const valid = await trigger(STEP_FIELDS[step])
    if (valid) setStep((s) => (s + 1) as 1 | 2 | 3)
  }

  const onSubmit = async (data: FormData) => {
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/onboarding-empresa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const text = await res.text()
      const json = text ? JSON.parse(text) : {}
      if (!res.ok) throw new Error(json.error || "Error al enviar. Intentá de nuevo.")
      setStatus("success")
    } catch (err: unknown) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Error al enviar. Intentá de nuevo.")
    }
  }

  if (status === "success") {
    return (
      <FormSuccess>
        Gracias por tu interés. Vamos a contactar a tu empresa cuando Tapago esté disponible para{" "}
        <strong className="font-semibold text-text-dark">continuar con la apertura de la cuenta.</strong>
      </FormSuccess>
    )
  }

  // Required selects revalidate on change so their error clears as soon as an option is picked.
  const selectValue = (field: "tipoSocietario" | "actividadPrincipal" | "cargoRepresentante") => (val: string) =>
    setValue(field, val, { shouldValidate: !!errors[field] })

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <StepIndicator step={step} labels={STEP_LABELS} />

      <AnimatePresence mode="wait" initial={false}>
        {/* ── PASO 1 — Datos de la empresa ── */}
        {step === 1 && (
          <StepPanel id="step1">
            <TextField
              id="razonSocial"
              label="Razón social"
              required
              placeholder="Ej: Empresa SA"
              autoComplete="organization"
              error={errors.razonSocial?.message}
              {...register("razonSocial")}
            />
            <TextField
              id="cuit"
              label="CUIT de la empresa"
              required
              placeholder="30-12345678-9"
              inputMode="numeric"
              error={errors.cuit?.message}
              {...register("cuit")}
            />
            <SelectField
              id="tipoSocietario"
              label="Tipo societario"
              required
              placeholder="Seleccioná el tipo"
              options={TIPOS_SOCIETARIOS}
              defaultValue={getValues("tipoSocietario")}
              onValueChange={selectValue("tipoSocietario")}
              error={errors.tipoSocietario?.message}
            />
            <SelectField
              id="actividadPrincipal"
              label="Actividad principal"
              required
              placeholder="Seleccioná una actividad"
              options={ACTIVIDADES}
              defaultValue={getValues("actividadPrincipal")}
              onValueChange={selectValue("actividadPrincipal")}
              error={errors.actividadPrincipal?.message}
            />
            <div className="mt-2">
              <NextButton onClick={handleNext} />
            </div>
          </StepPanel>
        )}

        {/* ── PASO 2 — Representante legal ── */}
        {step === 2 && (
          <StepPanel id="step2">
            <TextField
              id="nombreRepresentante"
              label="Nombre y apellido del representante"
              required
              placeholder="Ej: María López"
              autoComplete="name"
              error={errors.nombreRepresentante?.message}
              {...register("nombreRepresentante")}
            />
            <TextField
              id="cuilRepresentante"
              label="CUIL del representante"
              required
              placeholder="20-12345678-9"
              inputMode="numeric"
              error={errors.cuilRepresentante?.message}
              {...register("cuilRepresentante")}
            />
            <SelectField
              id="cargoRepresentante"
              label="Cargo"
              required
              placeholder="Seleccioná el cargo"
              options={CARGOS}
              defaultValue={getValues("cargoRepresentante")}
              onValueChange={selectValue("cargoRepresentante")}
              error={errors.cargoRepresentante?.message}
            />
            <StepActions>
              <BackButton onClick={() => setStep(1)} />
              <NextButton onClick={handleNext} />
            </StepActions>
          </StepPanel>
        )}

        {/* ── PASO 3 — Contacto y sede social ── */}
        {step === 3 && (
          <StepPanel id="step3">
            <TextField
              id="email"
              label="Email corporativo"
              required
              type="email"
              placeholder="contacto@empresa.com"
              autoComplete="email"
              error={errors.email?.message}
              {...register("email")}
            />
            <TextField
              id="telefono"
              label="Teléfono"
              required
              type="tel"
              placeholder="+54 11 1234-5678"
              autoComplete="tel"
              error={errors.telefono?.message}
              {...register("telefono")}
            />

            <FieldGroup legend="Domicilio fiscal (sede social)" required>
              <TextField
                id="calleNumero"
                label="Calle y número"
                hideLabel
                required
                placeholder="Calle y número — Ej: Av. Corrientes 1234"
                autoComplete="street-address"
                error={errors.calleNumero?.message}
                {...register("calleNumero")}
              />
              <TextField
                id="ciudad"
                label="Ciudad"
                hideLabel
                required
                placeholder="Ciudad — Ej: Buenos Aires"
                autoComplete="address-level2"
                error={errors.ciudad?.message}
                {...register("ciudad")}
              />
              <div className="flex gap-3">
                <TextField
                  id="provincia"
                  label="Provincia"
                  hideLabel
                  required
                  className="min-w-0 flex-1"
                  placeholder="Provincia — Ej: CABA"
                  autoComplete="address-level1"
                  error={errors.provincia?.message}
                  {...register("provincia")}
                />
                <TextField
                  id="codigoPostal"
                  label="Código postal"
                  hideLabel
                  required
                  className="w-32 shrink-0 sm:w-36"
                  placeholder="Cód. Postal"
                  autoComplete="postal-code"
                  error={errors.codigoPostal?.message}
                  {...register("codigoPostal")}
                />
              </div>
            </FieldGroup>

            {status === "error" && <FormError message={errorMsg} />}

            <StepActions>
              <BackButton onClick={() => setStep(2)} />
              <SubmitButton loading={status === "loading"} />
            </StepActions>
          </StepPanel>
        )}
      </AnimatePresence>
    </form>
  )
}
