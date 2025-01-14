import Contact from "@/components/sharable/Contact";
export const metadata = {
  title: "Altoukhy - Contact Us",
  description:
    "Get in touch with Altoukhy Glass to discuss your glass solutions and project needs. Our team is here to assist you with any inquiries about our products, services, or partnerships. Reach out to us through our contact form, phone, or email, and let us help you achieve excellence in your glass projects.",
  keywords:
    "Altoukhy, التوخي, contact us, get in touch, glass solutions, glass inquiries, customer support, contact Altoukhy, phone, email, خدمات الزجاج, تواصل معنا, استفسارات, دعم العملاء, مشاريع زجاجية, التواصل مع التوخي",
};

const ContactPage = () => {
  return (
    <section className="mt-[140px]">
      <Contact />
    </section>
  );
};

export default ContactPage;
