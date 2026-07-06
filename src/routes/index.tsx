import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/cuddle/Header";
import { Masthead } from "@/components/cuddle/Masthead";
import { HeroSequence } from "@/components/cuddle/HeroSequence";
import { GroundingTransition } from "@/components/cuddle/GroundingTransition";
import { FeaturedCollection } from "@/components/cuddle/FeaturedCollection";
import { Marquee } from "@/components/cuddle/Marquee";
import { Faq } from "@/components/cuddle/Faq";
import { SpecCards } from "@/components/cuddle/SpecCards";
import { FoundersNote } from "@/components/cuddle/FoundersNote";
import { Testimonials } from "@/components/cuddle/Testimonials";
import { SensoryCheck } from "@/components/cuddle/SensoryCheck";
import { Footer } from "@/components/cuddle/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main style={{ scrollSnapType: "y proximity" }}>
      <Header />
      <Masthead />
      <HeroSequence />
      <GroundingTransition />
      <FeaturedCollection />
      <Marquee />
      <Faq />
      <SpecCards />
      <FoundersNote />
      <Testimonials />
      <SensoryCheck />
      <Footer />
    </main>
  );
}
