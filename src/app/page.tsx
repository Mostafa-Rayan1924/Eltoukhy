import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Suppliers from "@/components/Home/Suppliers";
import WhyUs from "@/components/Home/WhyUs";
import Contact from "@/components/sharable/Contact";
export const metadata = {
  title: "Eltoukhy - Home Page",
  description:
    "Eltoukhy specializes in professional glass installation services for all types of glass, including shower cabins, hinged and sliding doors, glass handrails, folding facades, glass partitions, cladding & mirrors, automatic sliding door operators, and spider systems. Additionally, we provide advanced printing solutions such as paper and fabric printing, laser and fiber technologies, and indoor and outdoor printing to meet all your needs.",
  keywords:
    "Eltoukhy, التوخي, glass installation, shower cabins, hinged doors, sliding doors, glass handrails, folding facades, glass partitions, cladding, mirrors, automatic sliding doors, spider systems, شركة زجاج, خدمات الزجاج, طباعة ورقية, طباعة الأقمشة, تقنيات الليزر, تقنيات الفايبر, الطباعة الداخلية, الطباعة الخارجية",
};

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
