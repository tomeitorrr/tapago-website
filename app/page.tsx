import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { TrustStrip } from "@/components/site/trust-strip"
import { Products } from "@/components/site/products"
import { Steps } from "@/components/site/steps"
import { QuoteSection } from "@/components/site/payment-calculator"
// Legacy sections — replaced in the next redesign steps.
import { BridgeSection } from "@/components/tapago/bridge-section"
import { SecuritySection } from "@/components/tapago/security-section"
import { FaqSection } from "@/components/tapago/faq-section"
import { FinalCta } from "@/components/tapago/final-cta"
import { Footer } from "@/components/tapago/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <Steps />
        <QuoteSection />
        <BridgeSection />
        <div id="seguridad">
          <SecuritySection />
        </div>
        <FaqSection />
        <FinalCta />
      </main>
      <div id="contacto">
        <Footer />
      </div>
    </>
  )
}
