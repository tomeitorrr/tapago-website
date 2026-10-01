import { Mail, MessageCircle } from "lucide-react"

import { TapagoLogo } from "./logo"
import { contact, footerColumns } from "@/lib/site-content"
import { Container } from "./ui"

const linkClass =
  "rounded text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"

export function Footer() {
  return (
    <footer id="contacto" className="bg-ink pt-20 pb-10 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <TapagoLogo variant="onDark" className="h-12" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
              Conectamos empresas en Argentina con el mundo.
            </p>
            <ul className="mt-8 space-y-3">
              <li>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={`${linkClass} inline-flex items-center gap-2`}>
                  <Mail className="h-4 w-4" aria-hidden />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Pie de página" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className={linkClass}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/40 md:flex-row md:justify-between">
          <p className="max-w-2xl">
            Tapago S.A. es un Proveedor de Servicios de Pago que ofrece Cuentas de Pago (PSPCP), inscripto ante el
            Banco Central de la República Argentina.
          </p>
          <p className="shrink-0">© {new Date().getFullYear()} Tapago S.A.</p>
        </div>
      </Container>
    </footer>
  )
}
