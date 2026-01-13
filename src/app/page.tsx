import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Privacy } from "@/components/privacy";
import { Testimonials } from "@/components/testimonials";
import { UseCases } from "@/components/use-cases";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <Testimonials />
      <UseCases />
      <Pricing />
      <Privacy />
      <FAQ />
      <Footer />
    </main>
  );
}
