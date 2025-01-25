import Contact from "@/app/[lang]/_components/sharable/Contact";
import SuppliersPage from "@/app/[lang]/_components/suppliers/SuppliersPage";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export const metadata = {
  title: "Altoukhy - Suppliers",
  description:
    "Discover Altoukhy Glass's network of trusted local and global suppliers. With a strong focus on quality and innovation, we collaborate with top-tier suppliers to source premium glass materials and products. Our partnerships ensure a seamless supply chain, enabling us to meet diverse client needs and deliver exceptional results across all projects.",
  keywords:
    "Altoukhy, التوخي, local suppliers, global suppliers, glass suppliers, trusted suppliers, glass materials, premium glass products, glass supply chain, موردين محليين, موردين عالميين, مواد زجاجية, منتجات زجاجية عالية الجودة, التعاون مع الموردين",
};

const page = async () => {
  const locale = await getCurrentLocale();
  const { Home } = await getTrans(locale);
  return (
    <section className="mt-[140px] container    ">
      <SuppliersPage />
      <Contact Home={Home} />
    </section>
  );
};

export default page;
