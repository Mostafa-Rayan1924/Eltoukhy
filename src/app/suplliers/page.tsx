import SuppliersPage from "@/components/suppliers/SuppliersPage";

export const metadata = {
  title: "Altoukhy - Suppliers",
  description:
    "Discover Altoukhy Glass's network of trusted local and global suppliers. With a strong focus on quality and innovation, we collaborate with top-tier suppliers to source premium glass materials and products. Our partnerships ensure a seamless supply chain, enabling us to meet diverse client needs and deliver exceptional results across all projects.",
  keywords:
    "Altoukhy, التوخي, local suppliers, global suppliers, glass suppliers, trusted suppliers, glass materials, premium glass products, glass supply chain, موردين محليين, موردين عالميين, مواد زجاجية, منتجات زجاجية عالية الجودة, التعاون مع الموردين",
};

const page = () => {
  return (
    <section className="mt-[140px] container    ">
      <SuppliersPage />
    </section>
  );
};

export default page;
