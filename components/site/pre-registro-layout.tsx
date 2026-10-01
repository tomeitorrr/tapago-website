import { Mail, type LucideIcon } from "lucide-react"

import { contact } from "@/lib/site-content"
import { Footer } from "./footer"
import { Navbar } from "./navbar"
import { Container, Eyebrow } from "./ui"

interface PreRegistroLayoutProps {
  eyebrow: string
  title: string
  description: string
  features: { icon: LucideIcon; title: string; desc: string }[]
  helpText: string
  formTitle: string
  children: React.ReactNode
}

/**
 * Shared layout for /abrir-cuenta and /empresa. Context column on the left, form card on the right.
 * On mobile the order is: heading → form → "¿Qué pasa después?".
 */
export function PreRegistroLayout({ eyebrow, title, description, features, helpText, formTitle, children }: PreRegistroLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-hidden border-b border-white/10 bg-ink pb-20 pt-28 text-white md:pb-28 md:pt-36">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(55%_50%_at_85%_20%,rgba(99,91,255,0.26),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_0%_85%,rgba(139,131,255,0.12),transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(70%_60%_at_30%_20%,black,transparent)]" />
        </div>

        <Container className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-x-16 lg:gap-y-12">
          {/* Heading */}
          <div className="lg:col-start-1 lg:row-start-1 lg:pt-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 text-[13px] text-white/75">
              <span className="rounded-full bg-lime px-2 py-0.5 text-[11px] font-semibold text-ink">Próximamente</span>
              Pre-registro
            </div>
            <Eyebrow dark>{eyebrow}</Eyebrow>
            <h1 className="mt-4 text-balance text-[40px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-[56px]">
              {title}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/65">{description}</p>
          </div>

          {/* Form card */}
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="rounded-[28px] bg-white p-5 text-text-dark shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)] ring-1 ring-white/10 sm:p-8 md:p-10">
              <h2 className="mb-7 text-xl font-bold tracking-[-0.02em] text-text-dark">{formTitle}</h2>
              {children}
            </div>
          </div>

          {/* What happens next */}
          <div className="lg:col-start-1 lg:row-start-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">¿Qué pasa después?</h2>
            <ul className="mt-6 space-y-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-light ring-1 ring-inset ring-brand/30">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{title}</span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-white/60">{desc}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-medium text-white/80">{helpText}</p>
              <p className="mt-1 text-sm text-white/60">
                Escribinos a{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-1 rounded font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                  {contact.email}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
