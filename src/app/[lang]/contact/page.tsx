import Contact from "@/app/[lang]/_components/sharable/Contact";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
export const metadata = {
  title: "Altoukhy - Contact Us",
  description:
    "Get in touch with Altoukhy Glass to discuss your glass solutions and project needs. Our team is here to assist you with any inquiries about our products, services, or partnerships. Reach out to us through our contact form, phone, or email, and let us help you achieve excellence in your glass projects.",
  keywords:
    "Altoukhy, الطوخي, contact us, get in touch, glass solutions, glass inquiries, customer support, contact Altoukhy, phone, email, خدمات الزجاج, تواصل معنا, استفسارات, دعم العملاء, مشاريع زجاجية, التواصل مع التوخي",
};

const ContactPage = async () => {
  const locale = await getCurrentLocale();
  const { Home } = await getTrans(locale);
  return (
    <section className="mt-[140px]">
      <Contact Home={Home} />
    </section>
  );
};

export default ContactPage;
