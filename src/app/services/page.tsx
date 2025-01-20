import Tabs from "@/components/Services/Tabs";
import Contact from "@/components/sharable/Contact";
export const metadata = {
  title: "Altoukhy - Our Services",
  description:
    "Discover Altoukhy's professional services in glass and aluminum works. We specialize in تقديم حلول الزجاج عالية الجودة وتركيبات الألومنيوم المتقنة. Whether it's for residential, commercial, or industrial projects, نحن هنا لتلبية جميع احتياجاتكم في مجال الزجاج والألومنيوم.",
  keywords:
    "Altoukhy, التوخي, خدمات الزجاج, Glass Works, Aluminum Works, خدمات الألومنيوم, تركيب الزجاج, تركيب الألومنيوم, مشاريع الزجاج, مشاريع الألومنيوم, حلول الزجاج, تركيب الزجاج التجاري, glass solutions, aluminum installation, الزجاج المعماري, أعمال الألومنيوم, مشاريع الزجاج المتخصصة, خدمات التصميم والتركيب, glass & aluminum experts, تواصل معنا, دعم العملاء",
};

const page = () => {
  return (
    <section className="mt-[140px] container space-y-16">
      <Tabs />
      <Contact />
    </section>
  );
};

export default page;
