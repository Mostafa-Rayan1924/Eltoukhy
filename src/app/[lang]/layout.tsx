import type { Metadata } from "next";
import "./globals.css";

import { Cairo } from "next/font/google";
import { ThemeProvider } from "@/constants/theme-provider";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/app/[lang]/_components/Footer";
import DashboardLink from "@/app/[lang]/_components/sharable/DashboardLink";
import ReduxProvider from "@/store/ReduxProvider";
import { Toaster } from "react-hot-toast";
import CheckOnline from "@/constants/CheckOnline";
import { Locale } from "@/i18n.config";
import { Directions, Languages } from "@/Types/types";
import Navigation from "@/app/[lang]/_components/Navigation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export const metadata: Metadata = {
  title: "Altoukhy",
  description: "Altoukhy Elegance Framed in Glass",
  icons: [
    {
      url: "https://res.cloudinary.com/dlaeaq6is/image/upload/v1738001781/logowhite_tc2yy8.png",
      href: "https://res.cloudinary.com/dlaeaq6is/image/upload/v1738001781/logowhite_tc2yy8.png",
      sizes: "192x192",
      type: "image/png",
      rel: "icon",
    },
  ],
};

const font = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const locale = await getCurrentLocale();
  const { Nav, Home } = await getTrans(locale);
  return (
    <html
      lang={locale}
      dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}
      className="scroll-smooth">
      <body className={`${font.className} overflow-x-hidden antialiased`}>
        <ReduxProvider>
          <CheckOnline />
          <NextTopLoader color="#5384ef" />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Navigation />
            <DashboardLink />
            {children}
            <Footer locale={locale} Nav={Nav} Home={Home} />
          </ThemeProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </ReduxProvider>
      </body>
    </html>
  );
}
