import { suppliers } from "@/components/Home/Suppliers";
import Contact from "@/components/sharable/Contact";
import PageHeading from "@/components/sharable/PageHeading";
import SupplierSwiper from "@/components/sharable/SupplierSwiper";
export const metadata = {
  title: "Altoukhy - Suppliers",
  description:
    "Discover Altoukhy Glass's network of trusted local and global suppliers. With a strong focus on quality and innovation, we collaborate with top-tier suppliers to source premium glass materials and products. Our partnerships ensure a seamless supply chain, enabling us to meet diverse client needs and deliver exceptional results across all projects.",
  keywords:
    "Altoukhy, التوخي, local suppliers, global suppliers, glass suppliers, trusted suppliers, glass materials, premium glass products, glass supply chain, موردين محليين, موردين عالميين, مواد زجاجية, منتجات زجاجية عالية الجودة, التعاون مع الموردين",
};

const page = () => {
  return (
    <section className="mt-[140px] container space-y-16 md:space-y-28   ">
      <div className="space-y-10">
        <PageHeading title="National Suppliers" />
        <SupplierSwiper items={suppliers} numOFSlides={4.6} />
      </div>
      <div className="space-y-10">
        <PageHeading title="International Suppliers" />
        <SupplierSwiper items={suppliers} numOFSlides={4.6} />
      </div>
      <Contact />
    </section>
  );
};

export default page;
