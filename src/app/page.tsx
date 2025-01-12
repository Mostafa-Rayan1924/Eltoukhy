import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Suppliers from "@/components/Home/Suppliers";
import WhyUs from "@/components/Home/WhyUs";
import Contact from "@/components/sharable/Contact";

export default function Home() {
  return (
    <main className="space-y-16 md:space-y-24">
      <Hero />
      <About />
      <Services />
      <Suppliers />
      <Projects />
      <WhyUs />
      <Contact />
    </main>
  );
}
