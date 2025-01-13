import ProfileCard from "@/components/Profile/ProfileCard";
import Contact from "@/components/sharable/Contact";
import PageHeading from "@/components/sharable/PageHeading";
export const metadata = {
  title: "Altoukhy - Profile",
  description:
    "Altoukhy Glass has been a trusted name in the glass industry for over two decades, offering high-quality glass solutions and services. Our profile highlights our expertise in glass supply and installation, showcasing our successful projects and dedication to client satisfaction. We pride ourselves on our precision, innovative approach, and commitment to delivering excellence in every aspect of our work.",
  keywords:
    "Altoukhy, التوخي, company profile, glass industry, glass supply, glass installation, شركة زجاج, أعمال زجاج, مشاريع زجاجية, تقديم خدمات الزجاج, زجاج عالي الجودة, الابتكار في الزجاج",
};

const ProfilePage = () => {
  return (
    <section className="mt-[140px]   ">
      <PageHeading title="Profile" />
      <ProfileCard />
      <Contact />
    </section>
  );
};

export default ProfilePage;
