import { ArrowDownToLine, ArrowRight, Check, Send, Wallet } from "lucide-react"

import { products, SOON_LABEL } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"
import { Badge, Container, SectionHeading } from "./ui"

const icons = { wallet: Wallet, send: Send, download: ArrowDownToLine }

type Product = (typeof products)[number]

function ProductCard({ product, featured }: { product: Product; featured?: boolean }) {
  const Icon = icons[product.icon]
  return (
    <article
      id={product.id}
      className={cn(
        "group flex h-full scroll-mt-28 flex-col rounded-3xl border p-7 transition-all duration-300 md:p-8",
        featured
          ? "border-transparent bg-ink text-white"
          : "border-line bg-white hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(16,18,37,0.25)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-2xl",
            featured ? "bg-brand text-white" : "bg-brand-soft text-brand",
          )}
        >
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <Badge tone={featured ? "dark" : "soon"}>{SOON_LABEL}</Badge>
      </div>

      <h3 className={cn("mt-8 text-2xl font-bold tracking-tight", featured ? "text-white" : "text-text-dark")}>
        {product.name}
      </h3>
      <p className={cn("mt-3 leading-relaxed", featured ? "text-white/65" : "text-text-muted")}>{product.description}</p>

      <ul className="mt-7 space-y-3">
        {product.features.map((f) => (
          <li key={f} className={cn("flex items-start gap-3 text-[15px]", featured ? "text-white/85" : "text-text-dark")}>
            <Check className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-lime" : "text-brand")} aria-hidden />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#como-funciona"
        className={cn(
          "mt-auto inline-flex items-center gap-1.5 pt-10 text-sm font-semibold transition-colors focus-visible:underline focus-visible:outline-none",
          featured ? "text-lime hover:text-white" : "text-brand hover:text-text-dark",
        )}
      >
        {product.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </a>
    </article>
  )
}

export function Products() {
  return (
    <section id="productos" className="bg-white py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Una plataforma, tres soluciones"
            title="Todo lo que tu negocio necesita para operar global."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <ProductCard product={p} featured={p.id === "international-pay"} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
