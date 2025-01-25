import ProfileCard from "@/app/[lang]/_components/Profile/ProfileCard";
import Contact from "@/app/[lang]/_components/sharable/Contact";
import PageHeading from "@/app/[lang]/_components/sharable/PageHeading";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
export const metadata = {
  title: "Altoukhy - Profile",
  description:
    "Altoukhy Glass has been a trusted name in the glass industry for over two decades, offering high-quality glass solutions and services. Our profile highlights our expertise in glass supply and installation, showcasing our successful projects and dedication to client satisfaction. We pride ourselves on our precision, innovative approach, and commitment to delivering excellence in every aspect of our work.",
  keywords:
    "Altoukhy, التوخي, company profile, glass industry, glass supply, glass installation, شركة زجاج, أعمال زجاج, مشاريع زجاجية, تقديم خدمات الزجاج, زجاج عالي الجودة, الابتكار في الزجاج",
};

const ProfilePage = async () => {
  const locale = await getCurrentLocale();
  const { Home } = await getTrans(locale);
  return (
    <section className="mt-[140px]   ">
      <PageHeading title="Profile" />
      <ProfileCard />
      <Contact Home={Home} />
    </section>
  );
};

export default ProfilePage;
