import { MessageCircle, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="Tapago" 
              className="h-8 w-auto brightness-0 invert"
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Pie de pagina">
            <a
              href="/terminos"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Términos
            </a>
            <a
              href="/privacidad"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Privacidad
            </a>
            <a
              href="mailto:info@tapagopay.net"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Contacto
            </a>
            <a
              href="https://wa.me/5493518676992?text=Hola,%20tengo%20una%20consulta%20sobre%20Tapago%20Pay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Habla con nosotros
            </a>
          </nav>
        </div>

        {/* Redes sociales */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
            aria-label="X (Twitter)"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#tiktok"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
            aria-label="TikTok"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            {"© 2025 Tapago S.A. - Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
