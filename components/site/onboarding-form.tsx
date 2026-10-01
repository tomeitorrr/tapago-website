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
  nombre: z.string().min(2, "Este campo es requerido"),
  cuitCuil: z.string().min(1, "Este campo es requerido"),
  fechaNacimiento: z.string().optional(),
  nacionalidad: z.string().optional(),
  actividadEconomica: z.string().optional(),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(1, "El teléfono es requerido"),
  calleNumero: z.string().min(1, "La calle y número son requeridos"),
  ciudad: z.string().min(1, "La ciudad es requerida"),
  provincia: z.string().min(1, "La provincia es requerida"),
  codigoPostal: z.string().min(1, "El código postal es requerido"),
})

type FormData = z.infer<typeof schema>

// ─── Listas de opciones ──────────────────────────────────────────────────────

const ACTIVIDADES = [
  "Empleado/a en relación de dependencia",
  "Monotributista",
  "Autónomo/a",
  "Estudiante",
  "Jubilado/a / Pensionado/a",
  "Desempleado/a",
  "Ama/o de casa",
  "Otro",
]

const PAISES_MERCOSUR = [
  "Argentina",
  "Brasil",
  "Uruguay",
  "Paraguay",
  "Bolivia",
  "Chile",
]

const STEP_LABELS = ["Datos personales", "Contacto y domicilio"]

// ─── Componente principal ────────────────────────────────────────────────────

export function OnboardingForm() {
  const [step, setStep] = useState<1 | 2>(1)
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

  const handleNextStep = async () => {
    const valid = await trigger(["nombre", "cuitCuil"])
    if (valid) setStep(2)
  }

  const onSubmit = async (data: FormData) => {
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/onboarding", {
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

  // ── Estado: éxito ──────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <FormSuccess>
        Gracias por tu interés. Te vamos a contactar cuando Tapago esté disponible para{" "}
        <strong className="font-semibold text-text-dark">continuar con la apertura de tu cuenta.</strong>
      </FormSuccess>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <StepIndicator step={step} labels={STEP_LABELS} />

      <AnimatePresence mode="wait" initial={false}>
        {/* ── PASO 1 ── */}
        {step === 1 && (
          <StepPanel id="step1">
            <TextField
              id="nombre"
              label="Nombre completo"
              required
              placeholder="Ej: Juan García"
              autoComplete="name"
              error={errors.nombre?.message}
              {...register("nombre")}
            />
            <TextField
              id="cuitCuil"
              label="CUIL"
              required
              placeholder="20-12345678-9"
              inputMode="numeric"
              error={errors.cuitCuil?.message}
              {...register("cuitCuil")}
            />
            <TextField
              id="fechaNacimiento"
              label="Fecha de nacimiento"
              type="date"
              autoComplete="bday"
              {...register("fechaNacimiento")}
            />
            <SelectField
              id="nacionalidad"
              label="Nacionalidad"
              placeholder="Seleccioná un país"
              options={PAISES_MERCOSUR}
              defaultValue={getValues("nacionalidad")}
              onValueChange={(val) => setValue("nacionalidad", val)}
            />
            <SelectField
              id="actividadEconomica"
              label="Actividad económica principal"
              placeholder="Seleccioná una actividad"
              options={ACTIVIDADES}
              defaultValue={getValues("actividadEconomica")}
              onValueChange={(val) => setValue("actividadEconomica", val)}
            />
            <div className="mt-2">
              <NextButton onClick={handleNextStep} />
            </div>
          </StepPanel>
        )}

        {/* ── PASO 2 ── */}
        {step === 2 && (
          <StepPanel id="step2">
            <TextField
              id="email"
              label="Email"
              required
              type="email"
              placeholder="tu@email.com"
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

            <FieldGroup legend="Domicilio legal" required>
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
              <BackButton onClick={() => setStep(1)} />
              <SubmitButton loading={status === "loading"} />
            </StepActions>
          </StepPanel>
        )}
      </AnimatePresence>
    </form>
  )
}
