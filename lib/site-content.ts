// Home page content. Tapago is not yet operational: every product is flagged "Próximamente".
// Do not add API/developer claims, customer logos, testimonials or unverified metrics.

export const SOON_LABEL = "Próximamente"

export const navProducts = [
  { label: "Cuenta Tapago", href: "/#cuenta-tapago", description: "Tu CVU en pesos para operar." },
  { label: "International Pay", href: "/#international-pay", description: "Pagá a proveedores del exterior." },
  { label: "International Collect", href: "/#international-collect", description: "Recibí pagos del exterior." },
]

export const navLinks = [
  { label: "Empresas", href: "/#como-funciona" },
  { label: "Precios", href: "/#cotizar" },
  { label: "Seguridad", href: "/#seguridad" },
  { label: "Compañía", href: "/#contacto" },
]

export const trustItems = [
  "PSPCP inscripto ante el BCRA",
  "CVU en pesos",
  "Infraestructura bancaria",
  "Seguridad y monitoreo",
]

export const products = [
  {
    id: "cuenta-tapago",
    name: "Cuenta Tapago",
    description: "Tu CVU en pesos para recibir, administrar y operar con tu saldo.",
    features: ["Cargá pesos por transferencia", "Gestioná tu saldo y movimientos", "Todo desde un solo lugar"],
    cta: "Conocé Cuenta Tapago",
    icon: "wallet",
  },
  {
    id: "international-pay",
    name: "International Pay",
    description: "Pagá proveedores internacionales de forma simple y transparente.",
    features: ["Cotización antes de operar", "Pagos internacionales", "Seguimiento de operaciones", "Costos claros"],
    cta: "Conocé International Pay",
    icon: "send",
  },
  {
    id: "international-collect",
    name: "International Collect",
    description: "Recibí pagos del exterior y liquidalos localmente a través de Tapago.",
    features: ["Cobros desde el exterior", "Liquidación local en tu cuenta", "Seguimiento de cada cobro"],
    cta: "Conocé International Collect",
    icon: "download",
  },
] as const

export const steps = [
  { title: "Cargá pesos", description: "Transferí a tu cuenta Tapago desde tu banco.", icon: "wallet" },
  { title: "Elegí el destino", description: "Seleccioná tu proveedor y la moneda.", icon: "destination" },
  { title: "Pagá", description: "Confirmá la operación y seguí su estado.", icon: "send" },
] as const

export type TransactionStatus = "Completado" | "Procesando" | "Enviado"

// Fictional sample data for the dashboard mockup.
export const sampleTransactions: {
  counterparty: string
  country: string
  amount: string
  date: string
  status: TransactionStatus
}[] = [
  { counterparty: "Shenzhen Tech Co.", country: "CN", amount: "USD 10.000,00", date: "Hoy", status: "Procesando" },
  { counterparty: "ABC Trading LLC", country: "US", amount: "USD 4.250,00", date: "Ayer", status: "Enviado" },
  { counterparty: "Euro Machinery GmbH", country: "DE", amount: "USD 18.900,00", date: "12 sep", status: "Completado" },
  { counterparty: "Lisboa Textiles Lda.", country: "PT", amount: "USD 2.300,00", date: "08 sep", status: "Completado" },
]

// Illustrative quote parameters — NOT live rates. Replace with the quotation backend before launch.
// No fee is published until it is legally approved.
export const illustrativeQuote = {
  rate: 1239, // ARS per USD
  defaultUsd: 10000,
}

// Coverage: every country that is neither sanctioned nor FATF high-risk. Never publish a country count.
// Pins are pre-snapped to the dot grid in lib/world-dots.ts (viewBox units). `primary` routes stay visible on mobile.
export const coverageOrigin = { label: "Argentina", x: 33.5, y: 46.77 }

export const coverageMarkets: {
  code: string
  label: string
  x: number
  y: number
  primary: boolean
  labelPos?: "left" | "right" | "below"
}[] = [
  { code: "US", label: "Estados Unidos", x: 29, y: 21.65, primary: true },
  { code: "MX", label: "México", x: 21.5, y: 29.44, primary: false, labelPos: "left" },
  { code: "BR", label: "Brasil", x: 37, y: 42.44, primary: true, labelPos: "right" },
  { code: "ES", label: "España", x: 50, y: 21.65, primary: true },
  { code: "GB", label: "Reino Unido", x: 51.5, y: 17.32, primary: false, labelPos: "left" },
  { code: "DE", label: "Alemania", x: 56, y: 16.45, primary: false, labelPos: "right" },
  { code: "AE", label: "Emiratos Árabes", x: 68.5, y: 27.71, primary: false, labelPos: "below" },
  { code: "CN", label: "China", x: 88, y: 25.11, primary: true },
]

export const coveragePoints = [
  {
    title: "Cobertura amplia",
    description: "Todos los países que no estén sancionados ni sean considerados de alto riesgo según el GAFI.",
  },
  {
    title: "Desde tu cuenta en pesos",
    description: "Operás con proveedores del exterior desde tu cuenta Tapago, sin abrir cuentas afuera.",
  },
]

export const securityFeatures = [
  {
    title: "PSPCP inscripto ante el BCRA",
    description: "Proveedor de Servicios de Pago que ofrece Cuentas de Pago, inscripto ante el Banco Central.",
    icon: "landmark",
  },
  {
    title: "CVU propio",
    description: "Tu cuenta en pesos con CVU para cargar fondos por transferencia desde tu banco.",
    icon: "wallet",
  },
  {
    title: "KYC / KYB",
    description: "Verificamos la identidad de cada persona y empresa antes de habilitar operaciones.",
    icon: "id",
  },
  {
    title: "Monitoreo transaccional",
    description: "Cada operación se analiza según perfil y patrones de riesgo.",
    icon: "activity",
  },
  {
    title: "Prevención de lavado (AML)",
    description: "Políticas y controles de prevención de lavado de activos y financiamiento del terrorismo.",
    icon: "shield",
  },
  {
    title: "Infraestructura bancaria",
    description: "Los fondos se mueven a través de entidades financieras reguladas.",
    icon: "building",
  },
] as const

// Operations tracking. Do not claim real-time tracking.
export const trackerStages = [
  { title: "Fondos recibidos", detail: "ARS acreditados en tu cuenta Tapago" },
  { title: "Operación confirmada", detail: "Cotización y costos aceptados" },
  { title: "Pago enviado", detail: "Transferencia emitida al beneficiario" },
  { title: "Acreditación", detail: "Fondos acreditados en destino" },
]

export const trackerBenefits = [
  "Seguimiento de operaciones",
  "Historial centralizado",
  "Información del beneficiario",
  "Estado de cada etapa",
  "Soporte especializado",
]

// FAQ answers must stay conservative: no fees, no settlement times, no country counts.
export const faqs = [
  {
    question: "¿Qué es Tapago?",
    answer:
      "Tapago es una plataforma para que empresas en Argentina paguen a proveedores del exterior desde una cuenta en pesos. Tapago S.A. es un PSPCP inscripto ante el BCRA. Todavía no estamos operativos: podés pre-registrarte y te avisamos cuando esté disponible.",
  },
  {
    question: "¿Quién puede abrir una cuenta?",
    answer:
      "Empresas y personas humanas con actividad en Argentina. Toda cuenta queda sujeta a la verificación de identidad (KYC/KYB) y a las políticas de cumplimiento de Tapago.",
  },
  {
    question: "¿Cómo cargo pesos?",
    answer: "Con una transferencia desde tu banco al CVU de tu cuenta Tapago.",
  },
  {
    question: "¿Cómo hago un pago internacional?",
    answer:
      "Cargás pesos, elegís a tu proveedor y la moneda, revisás la cotización y los costos, y confirmás. Después podés seguir cada etapa de la operación desde la plataforma.",
  },
  {
    question: "¿Qué monedas están disponibles?",
    answer:
      "Los pagos internacionales se realizan en dólares estadounidenses (USD). Si necesitás operar en otra moneda, escribinos y lo analizamos.",
  },
  {
    question: "¿Cuánto tarda una operación?",
    answer:
      "Depende del país de destino y de la entidad del beneficiario. Antes de confirmar vas a ver la información de la operación, y después podés seguir su estado desde la plataforma.",
  },
  {
    question: "¿Qué costos tiene?",
    answer: "Los costos de cada operación se informan en la plataforma antes de que la confirmes.",
  },
  {
    question: "¿Cómo funciona International Collect?",
    answer:
      "Te va a permitir recibir pagos del exterior y liquidarlos localmente en tu cuenta Tapago. Lo lanzamos próximamente.",
  },
  {
    question: "¿Cómo protege Tapago mis fondos?",
    answer:
      "Tapago opera como PSPCP inscripto ante el BCRA y aplica verificación de identidad (KYC/KYB), monitoreo transaccional y políticas de prevención de lavado de activos.",
  },
  {
    question: "¿Dónde puedo consultar la información regulatoria?",
    answer:
      "Tapago S.A. figura como Proveedor de Servicios de Pago que ofrece Cuentas de Pago en los registros del BCRA. Si necesitás más información, escribinos a info@tapagopay.net.",
  },
]

export const contact = {
  email: "info@tapagopay.net",
  whatsapp: "https://wa.me/5493518676992?text=Hola,%20tengo%20una%20consulta%20sobre%20Tapago",
}

// Only links that exist today. Add Nosotros/Partners/Centro de ayuda/AML/etc. when those pages are published.
export const footerColumns = [
  {
    title: "Productos",
    links: [
      { label: "Cuenta Tapago", href: "/#cuenta-tapago" },
      { label: "International Pay", href: "/#international-pay" },
      { label: "International Collect", href: "/#international-collect" },
      { label: "Cotizador", href: "/#cotizar" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Seguridad", href: "/#seguridad" },
      { label: "Cobertura", href: "/#cobertura" },
      { label: "Preguntas frecuentes", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos y condiciones", href: "/terminos" },
      { label: "Política de privacidad", href: "/privacidad" },
    ],
  },
]
