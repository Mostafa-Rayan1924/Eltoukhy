import AboutSec from "@/app/[lang]/_components/About/AboutSec";
import Goals from "@/app/[lang]/_components/About/Goals";
import Contact from "@/app/[lang]/_components/sharable/Contact";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
export const metadata = {
  title: "Altoukhy - About Us",
  description:
    "Since its establishment in 1998, Altoukhy Glass has been a leading company specializing in glass works. We provide supply and installation services for all types of glass, ensuring top-notch quality, precise installation, and competitive prices. Our mission is to deliver exceptional glass solutions tailored to our clients' needs, while our vision is to remain at the forefront of the glass industry by constantly innovating and exceeding customer expectations.",
  keywords:
    "Altoukhy, التوخي, about Altoukhy, glass works, glass installation, شركة زجاج, خدمات الزجاج, shower cabins, hinged doors, sliding doors, glass handrails, folding facades, glass partitions, cladding, mirrors, automatic sliding doors, spider systems, mission, vision, شركة التوخي, أعمال الزجاج, تاريخ الشركة",
};
const AboutPage = async () => {
  const locale = await getCurrentLocale();
  const { Home } = await getTrans(locale);
  return (
    <div className="mt-[98px]  space-y-16 md:space-y-24">
      <AboutSec />
      <Goals />
      <Contact Home={Home} />
    </div>
  );
};

export default AboutPage;
