import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { TrustStrip } from "@/components/site/trust-strip"
import { Products } from "@/components/site/products"
import { Steps } from "@/components/site/steps"
import { QuoteSection } from "@/components/site/payment-calculator"
import { CoverageSection } from "@/components/site/world-map"
import { SecuritySection } from "@/components/site/security"
import { TrackingSection } from "@/components/site/transaction-tracker"
import { FaqSection } from "@/components/site/faq"
import { CTASection } from "@/components/site/cta-section"
import { Footer } from "@/components/site/footer"

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
        <CoverageSection />
        <SecuritySection />
        <TrackingSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
