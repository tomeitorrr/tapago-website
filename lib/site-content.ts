// Home page content. Tapago is not yet operational: every product is flagged "Próximamente".
// Do not add API/developer claims, customer logos, testimonials or unverified metrics.

export const SOON_LABEL = "Próximamente"

export const navProducts = [
  { label: "Cuenta Tapago", href: "#cuenta-tapago", description: "Tu CVU en pesos para operar." },
  { label: "International Pay", href: "#international-pay", description: "Pagá a proveedores del exterior." },
  { label: "International Collect", href: "#international-collect", description: "Recibí pagos del exterior." },
]

export const navLinks = [
  { label: "Empresas", href: "#como-funciona" },
  { label: "Precios", href: "#cotizar" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "Compañía", href: "#contacto" },
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
