import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ValueProposition } from "@/components/value-proposition";
import { DemosShowcase } from "@/components/demos-showcase";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <DemosShowcase />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
