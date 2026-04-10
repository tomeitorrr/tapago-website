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
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// ─── Esquema de validación ───────────────────────────────────────────────────

const schema = z.object({
  tipoCliente: z.enum(["fisica", "juridica"]),
  nombre: z.string().min(2, "Este campo es requerido"),
  cuitCuil: z.string().min(1, "Este campo es requerido"),
  fechaNacimiento: z.string().optional(),
  nacionalidad: z.string().optional(),
  actividadEconomica: z.string().optional(),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(1, "El teléfono es requerido"),
  direccion: z.string().min(1, "La dirección es requerida"),
})

type FormData = z.infer<typeof schema>

// ─── Listas de opciones ──────────────────────────────────────────────────────

const ACTIVIDADES = [
  "Comercio minorista",
  "Comercio mayorista",
  "Servicios profesionales",
  "Tecnología",
  "Gastronomía",
  "Salud",
  "Educación",
  "Construcción / Inmobiliario",
  "Transporte",
  "Industria",
  "Agro",
  "Otro",
]

const PAISES = [
  "Argentina", "Brasil", "Chile", "Colombia", "México", "Uruguay", "Perú",
  "Bolivia", "Paraguay", "Venezuela", "Ecuador", "Estados Unidos", "China",
  "España", "Alemania", "Francia", "Italia", "Reino Unido", "Japón", "Otro",
]

// ─── Componente principal ────────────────────────────────────────────────────

export function OnboardingForm() {
  const [step, setStep] = useState<1 | 2>(1)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { tipoCliente: "fisica" },
  })

  const tipoCliente = watch("tipoCliente")
  const esJuridica = tipoCliente === "juridica"

  const labels = {
    nombre: esJuridica ? "Razón social" : "Nombre completo",
    cuitCuil: esJuridica ? "CUIT" : "CUIL",
    fecha: esJuridica ? "Fecha de constitución" : "Fecha de nacimiento",
    nacionalidad: esJuridica ? "País de incorporación" : "Nacionalidad",
  }

  const handleNextStep = async () => {
    const valid = await trigger(["tipoCliente", "nombre", "cuitCuil"])
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
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Error desconocido")
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
              {s === 1 ? "Datos del titular" : "Contacto"}
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
            {/* Tipo de cliente */}
            <div>
              <Label className="mb-2 block text-sm font-semibold">Tipo de cliente</Label>
              <div className="flex gap-4">
                {(["fisica", "juridica"] as const).map((tipo) => (
                  <label
                    key={tipo}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-all ${
                      tipoCliente === tipo
                        ? "border-teal-600 bg-teal-50 text-teal-700"
                        : "border-border bg-background text-foreground hover:border-teal-300"
                    }`}
                  >
                    <input
                      type="radio"
                      value={tipo}
                      {...register("tipoCliente")}
                      className="sr-only"
                    />
                    <span className={`h-4 w-4 rounded-full border-2 transition-colors ${
                      tipoCliente === tipo ? "border-teal-600 bg-teal-600" : "border-muted-foreground"
                    }`} />
                    {tipo === "fisica" ? "Persona Física" : "Persona Jurídica"}
                  </label>
                ))}
              </div>
            </div>

            {/* Nombre / Razón social */}
            <div>
              <Label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold">
                {labels.nombre} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="nombre"
                placeholder={esJuridica ? "Ej: Mi Empresa SRL" : "Ej: Juan García"}
                {...register("nombre")}
                className={errors.nombre ? "border-destructive" : ""}
              />
              {errors.nombre && (
                <p className="mt-1 text-xs text-destructive">{errors.nombre.message}</p>
              )}
            </div>

            {/* CUIT / CUIL */}
            <div>
              <Label htmlFor="cuitCuil" className="mb-1.5 block text-sm font-semibold">
                {labels.cuitCuil} <span className="text-destructive">*</span>
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

            {/* Fecha */}
            <div>
              <Label htmlFor="fechaNacimiento" className="mb-1.5 block text-sm font-semibold">
                {labels.fecha}
              </Label>
              <Input
                id="fechaNacimiento"
                type="date"
                {...register("fechaNacimiento")}
              />
            </div>

            {/* Nacionalidad / País */}
            <div>
              <Label className="mb-1.5 block text-sm font-semibold">{labels.nacionalidad}</Label>
              <Select onValueChange={(val) => setValue("nacionalidad", val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccioná un país" />
                </SelectTrigger>
                <SelectContent>
                  {PAISES.map((p) => (
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
                Email principal <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@empresa.com"
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

            {/* Dirección */}
            <div>
              <Label htmlFor="direccion" className="mb-1.5 block text-sm font-semibold">
                Dirección legal <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="direccion"
                placeholder="Av. Corrientes 1234, CABA, Argentina"
                rows={3}
                {...register("direccion")}
                className={errors.direccion ? "border-destructive" : ""}
              />
              {errors.direccion && (
                <p className="mt-1 text-xs text-destructive">{errors.direccion.message}</p>
              )}
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
