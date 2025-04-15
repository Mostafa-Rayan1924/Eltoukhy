import ProjectsBoxes from "@/app/[lang]/_components/Projects/ProjectsBoxes";
import Contact from "@/app/[lang]/_components/sharable/Contact";
import PageHeading from "@/app/[lang]/_components/sharable/PageHeading";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
export const metadata = {
  title: "Altoukhy - Our Projects",
  description:
    "Explore Altoukhy's portfolio of completed projects in glass and aluminum works. From residential to commercial and industrial applications, نحن فخورون بتنفيذ مشاريع زجاجية وألومنيوم عالية الجودة لعملائنا. Each project is a testament to our expertise and commitment to excellence in the glass and aluminum industry.",
  keywords:
    "Altoukhy,  الطوخي, مشاريع الزجاج,Glass Projects, Aluminum Projects, مشاريع الألومنيوم, أعمال زجاجية, أعمال ألومنيوم, مشاريع زجاجية تجارية, مشاريع الألومنيوم الصناعية, الزجاج المعماري, تصميم الزجاج, تركيب الألومنيوم, مشاريع متميزة, أعمال زجاج وألومنيوم, glass installation, aluminum construction, مشاريع ناجحة, أعمال مخصصة, مشاريع الزجاج والألومنيوم",
};

const page = async () => {
  const locale = await getCurrentLocale();
  const { Home } = await getTrans(locale);
  return (
    <section className="mt-[140px] space-y-16">
      <PageHeading title={Home.projectSec.titlepart} />
      <ProjectsBoxes />
      <Contact Home={Home} />
    </section>
  );
};

export default page;
