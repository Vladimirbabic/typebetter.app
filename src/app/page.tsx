import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Magic } from "@/components/magic";
import { Pricing } from "@/components/pricing";
import { SocialProof } from "@/components/social-proof";
import { UseCases } from "@/components/use-cases";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Section 1: Hero - Above the fold */}
      <Hero />

      {/* Section 2: What makes it different - ChatGPT vs TypeBetter */}
      <Comparison />

      {/* Section 3: Use Cases - Where it works */}
      <UseCases />

      {/* Section 4: Why it feels magic */}
      <Magic />

      {/* Section 5: Social Proof - Testimonials & Metrics */}
      <SocialProof />

      {/* Section 6: Pricing with Free vs Pro */}
      <Pricing />

      {/* Section 7: FAQ - Objection handling */}
      <FAQ />

      {/* Section 8: Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
