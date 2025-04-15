import About from "@/app/[lang]/_components/Home/About";
import Hero from "@/app/[lang]/_components/Home/Hero";
import Projects from "@/app/[lang]/_components/Home/Projects";
import Services from "@/app/[lang]/_components/Home/Services";
import Suppliers from "@/app/[lang]/_components/Home/Suppliers";
import WhyUs from "@/app/[lang]/_components/Home/WhyUs";
import Contact from "@/app/[lang]/_components/sharable/Contact";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
export const metadata = {
  title: "Altoukhy - Home Page",
  description:
    "Altoukhy specializes in professional glass installation services for all types of glass, including shower cabins, hinged and sliding doors, glass handrails, folding facades, glass partitions, cladding & mirrors, automatic sliding door operators, and spider systems. Additionally, we provide advanced printing solutions such as paper and fabric printing, laser and fiber technologies, and indoor and outdoor printing to meet all your needs.",
  keywords:
    "Altoukhy, الطوخي, glass installation, shower cabins, hinged doors, sliding doors, glass handrails, folding facades, glass partitions, cladding, mirrors, automatic sliding doors, spider systems, شركة زجاج, خدمات الزجاج, طباعة ورقية, طباعة الأقمشة, تقنيات الليزر, تقنيات الفايبر, الطباعة الداخلية, الطباعة الخارجية",
};

export default async function Home() {
  const locale = await getCurrentLocale();
  const { Home } = await getTrans(locale);
  return (
    <main className="space-y-16 md:space-y-24">
      <Hero />
      <About Home={Home} />
      <Services Home={Home} />
      <Suppliers />
      <Projects Home={Home} />
      <WhyUs Home={Home} />
      <Contact Home={Home} />
    </main>
  );
}
