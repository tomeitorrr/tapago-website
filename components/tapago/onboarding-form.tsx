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

// ─── Componente principal ────────────────────────────────────────────────────

export function OnboardingForm() {
  const [step, setStep] = useState<1 | 2>(1)
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
            Revisaremos tu información y te enviaremos el acceso en{" "}
            <strong>24-48 horas hábiles.</strong>
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Indicador de pasos */}
      <div className="mb-8 flex items-center gap-3">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                step >= s
                  ? "bg-teal-600 text-white"
                  : "border-2 border-border text-muted-foreground"
              }`}
            >
              {s}
            </div>
            <span className={`text-sm font-medium ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
              {s === 1 ? "Datos personales" : "Contacto y domicilio"}
            </span>
            {s < 2 && <div className="h-px w-8 bg-border" />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ── PASO 1 ── */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-5"
          >
            {/* Nombre completo */}
            <div>
              <Label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold">
                Nombre completo <span className="text-destructive">*</span>
              </Label>
              <Input
                id="nombre"
                placeholder="Ej: Juan García"
                {...register("nombre")}
                className={errors.nombre ? "border-destructive" : ""}
              />
              {errors.nombre && (
                <p className="mt-1 text-xs text-destructive">{errors.nombre.message}</p>
              )}
            </div>

            {/* CUIL */}
            <div>
              <Label htmlFor="cuitCuil" className="mb-1.5 block text-sm font-semibold">
                CUIL <span className="text-destructive">*</span>
              </Label>
              <Input
                id="cuitCuil"
                placeholder="20-12345678-9"
                {...register("cuitCuil")}
                className={errors.cuitCuil ? "border-destructive" : ""}
              />
              {errors.cuitCuil && (
                <p className="mt-1 text-xs text-destructive">{errors.cuitCuil.message}</p>
              )}
            </div>

            {/* Fecha de nacimiento */}
            <div>
              <Label htmlFor="fechaNacimiento" className="mb-1.5 block text-sm font-semibold">
                Fecha de nacimiento
              </Label>
              <Input
                id="fechaNacimiento"
                type="date"
                {...register("fechaNacimiento")}
              />
            </div>

            {/* Nacionalidad — solo Mercosur */}
            <div>
              <Label className="mb-1.5 block text-sm font-semibold">Nacionalidad</Label>
              <Select onValueChange={(val) => setValue("nacionalidad", val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccioná un país" />
                </SelectTrigger>
                <SelectContent>
                  {PAISES_MERCOSUR.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Actividad económica */}
            <div>
              <Label className="mb-1.5 block text-sm font-semibold">Actividad económica principal</Label>
              <Select onValueChange={(val) => setValue("actividadEconomica", val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccioná una actividad" />
                </SelectTrigger>
                <SelectContent>
                  {ACTIVIDADES.map((a) => (
                    <SelectItem key={a} value={a}>{a}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="button"
              onClick={handleNextStep}
              className="mt-2 w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-base font-semibold"
              size="lg"
            >
              Continuar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {/* ── PASO 2 ── */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-5"
          >
            {/* Email */}
            <div>
              <Label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Teléfono */}
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

            {/* Dirección legal — 4 campos separados */}
            <div>
              <Label className="mb-2 block text-sm font-semibold">
                Domicilio legal <span className="text-destructive">*</span>
              </Label>
              <div className="flex flex-col gap-3">
                {/* Calle y número */}
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

                {/* Ciudad */}
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

                {/* Provincia y Código Postal en la misma fila */}
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

            {/* Error global */}
            {status === "error" && (
              <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Botones */}
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
