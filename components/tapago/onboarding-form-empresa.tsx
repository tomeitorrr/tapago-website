"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ArrowRight, ArrowLeft, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// ─── Esquema de validación ───────────────────────────────────────────────────

const schema = z.object({
  // Paso 1 — Datos de la empresa
  razonSocial: z.string().min(2, "La razón social es requerida"),
  cuit: z.string().min(1, "El CUIT es requerido"),
  tipoSocietario: z.string().min(1, "El tipo societario es requerido"),
  actividadPrincipal: z.string().min(1, "La actividad principal es requerida"),

  // Paso 2 — Representante legal
  nombreRepresentante: z.string().min(2, "El nombre es requerido"),
  cuilRepresentante: z.string().min(1, "El CUIL es requerido"),
  cargoRepresentante: z.string().min(1, "El cargo es requerido"),

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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 rounded-2xl border border-teal-200 bg-teal-50 px-8 py-12 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-600">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">¡Solicitud enviada!</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Revisaremos la información de tu empresa y nos pondremos en contacto en{" "}
            <strong>24-48 horas hábiles.</strong>
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Indicador de pasos */}
      <div className="mb-8 flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                step >= s
                  ? "bg-teal-600 text-white"
                  : "border-2 border-border text-muted-foreground"
              }`}
            >
              {s}
            </div>
            <span className={`hidden text-sm font-medium sm:block ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
              {STEP_LABELS[s - 1]}
            </span>
            {s < 3 && <div className="h-px w-4 bg-border sm:w-6" />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ── PASO 1 — Datos de la empresa ── */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-5"
          >
            <div>
              <Label htmlFor="razonSocial" className="mb-1.5 block text-sm font-semibold">
                Razón social <span className="text-destructive">*</span>
              </Label>
              <Input
                id="razonSocial"
                placeholder="Ej: Empresa SA"
                {...register("razonSocial")}
                className={errors.razonSocial ? "border-destructive" : ""}
              />
              {errors.razonSocial && (
                <p className="mt-1 text-xs text-destructive">{errors.razonSocial.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="cuit" className="mb-1.5 block text-sm font-semibold">
                CUIT de la empresa <span className="text-destructive">*</span>
              </Label>
              <Input
                id="cuit"
                placeholder="30-12345678-9"
                {...register("cuit")}
                className={errors.cuit ? "border-destructive" : ""}
              />
              {errors.cuit && (
                <p className="mt-1 text-xs text-destructive">{errors.cuit.message}</p>
              )}
            </div>

            <div>
              <Label className="mb-1.5 block text-sm font-semibold">
                Tipo societario <span className="text-destructive">*</span>
              </Label>
              <Select onValueChange={(val) => setValue("tipoSocietario", val)}>
                <SelectTrigger className={errors.tipoSocietario ? "border-destructive" : ""}>
                  <SelectValue placeholder="Seleccioná el tipo" />
                </SelectTrigger>
                <SelectContent>
                  {TIPOS_SOCIETARIOS.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.tipoSocietario && (
                <p className="mt-1 text-xs text-destructive">{errors.tipoSocietario.message}</p>
              )}
            </div>

            <div>
              <Label className="mb-1.5 block text-sm font-semibold">
                Actividad principal <span className="text-destructive">*</span>
              </Label>
              <Select onValueChange={(val) => setValue("actividadPrincipal", val)}>
                <SelectTrigger className={errors.actividadPrincipal ? "border-destructive" : ""}>
                  <SelectValue placeholder="Seleccioná una actividad" />
                </SelectTrigger>
                <SelectContent>
                  {ACTIVIDADES.map((a) => (
                    <SelectItem key={a} value={a}>{a}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.actividadPrincipal && (
                <p className="mt-1 text-xs text-destructive">{errors.actividadPrincipal.message}</p>
              )}
            </div>

            <Button
              type="button"
              onClick={handleNext}
              className="mt-2 w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-base font-semibold"
              size="lg"
            >
              Continuar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {/* ── PASO 2 — Representante legal ── */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-5"
          >
            <div>
              <Label htmlFor="nombreRepresentante" className="mb-1.5 block text-sm font-semibold">
                Nombre y apellido del representante <span className="text-destructive">*</span>
              </Label>
              <Input
                id="nombreRepresentante"
                placeholder="Ej: María López"
                {...register("nombreRepresentante")}
                className={errors.nombreRepresentante ? "border-destructive" : ""}
              />
              {errors.nombreRepresentante && (
                <p className="mt-1 text-xs text-destructive">{errors.nombreRepresentante.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="cuilRepresentante" className="mb-1.5 block text-sm font-semibold">
                CUIL del representante <span className="text-destructive">*</span>
              </Label>
              <Input
                id="cuilRepresentante"
                placeholder="20-12345678-9"
                {...register("cuilRepresentante")}
                className={errors.cuilRepresentante ? "border-destructive" : ""}
              />
              {errors.cuilRepresentante && (
                <p className="mt-1 text-xs text-destructive">{errors.cuilRepresentante.message}</p>
              )}
            </div>

            <div>
              <Label className="mb-1.5 block text-sm font-semibold">
                Cargo <span className="text-destructive">*</span>
              </Label>
              <Select onValueChange={(val) => setValue("cargoRepresentante", val)}>
                <SelectTrigger className={errors.cargoRepresentante ? "border-destructive" : ""}>
                  <SelectValue placeholder="Seleccioná el cargo" />
                </SelectTrigger>
                <SelectContent>
                  {CARGOS.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.cargoRepresentante && (
                <p className="mt-1 text-xs text-destructive">{errors.cargoRepresentante.message}</p>
              )}
            </div>

            <div className="mt-2 flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1"
                size="lg"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-base font-semibold"
                size="lg"
              >
                Continuar
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* ── PASO 3 — Contacto y sede social ── */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-5"
          >
            <div>
              <Label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                Email corporativo <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="contacto@empresa.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold">
                Teléfono <span className="text-destructive">*</span>
              </Label>
              <Input
                id="telefono"
                type="tel"
                placeholder="+54 11 1234-5678"
                {...register("telefono")}
                className={errors.telefono ? "border-destructive" : ""}
              />
              {errors.telefono && (
                <p className="mt-1 text-xs text-destructive">{errors.telefono.message}</p>
              )}
            </div>

            <div>
              <Label className="mb-2 block text-sm font-semibold">
                Domicilio fiscal (sede social) <span className="text-destructive">*</span>
              </Label>
              <div className="flex flex-col gap-3">
                <div>
                  <Input
                    id="calleNumero"
                    placeholder="Calle y número — Ej: Av. Corrientes 1234"
                    {...register("calleNumero")}
                    className={errors.calleNumero ? "border-destructive" : ""}
                  />
                  {errors.calleNumero && (
                    <p className="mt-1 text-xs text-destructive">{errors.calleNumero.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    id="ciudad"
                    placeholder="Ciudad — Ej: Buenos Aires"
                    {...register("ciudad")}
                    className={errors.ciudad ? "border-destructive" : ""}
                  />
                  {errors.ciudad && (
                    <p className="mt-1 text-xs text-destructive">{errors.ciudad.message}</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <div className="flex-1">
                    <Input
                      id="provincia"
                      placeholder="Provincia — Ej: CABA"
                      {...register("provincia")}
                      className={errors.provincia ? "border-destructive" : ""}
                    />
                    {errors.provincia && (
                      <p className="mt-1 text-xs text-destructive">{errors.provincia.message}</p>
                    )}
                  </div>
                  <div className="w-36">
                    <Input
                      id="codigoPostal"
                      placeholder="Cód. Postal"
                      {...register("codigoPostal")}
                      className={errors.codigoPostal ? "border-destructive" : ""}
                    />
                    {errors.codigoPostal && (
                      <p className="mt-1 text-xs text-destructive">{errors.codigoPostal.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {status === "error" && (
              <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="mt-2 flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(2)}
                className="flex-1"
                size="lg"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver
              </Button>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-base font-semibold"
                size="lg"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar solicitud
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
