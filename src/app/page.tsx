import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Magic } from "@/components/magic";
import { Pricing } from "@/components/pricing";
import { UseCases } from "@/components/use-cases";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Section 1: Hero - Above the fold */}
      <Hero />

      {/* Section 2: What makes it different - ChatGPT vs TypeBetter */}
      <Comparison />

      {/* Section 3: Use Cases - Where it works */}
      <UseCases />

      {/* Section 4: Why it feels magic */}
      <Magic />

      {/* Section 5: Honest strip - no fake metrics or testimonials */}
      <section className="bg-[#0a0a0a] px-4 py-16 md:px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-gray-400 sm:text-xl">
            Built for people who write all day — powered by your own API key.
          </p>
        </div>
      </section>

      {/* Section 6: Pricing with Free vs Pro */}
      <Pricing />

      {/* Section 7: FAQ - Objection handling */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Desktop-only callout */}
      <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-sm px-4 py-3 shadow-xl max-w-sm">
          <img src="/ralph-vibe-coder.png" alt="" className="h-12 w-12 shrink-0 rounded-lg object-cover" />
          <p className="text-sm text-gray-400">
            Yes, this is a GPT wrapper coded in 3 hours — it&apos;s free and useful
          </p>
        </div>
      </div>
    </main>
  );
}
