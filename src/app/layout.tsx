import type { Metadata } from "next";
import "./globals.css";

import { Cairo } from "next/font/google";
import Header from "@/components/Navigation/Header";
import { ThemeProvider } from "@/constants/theme-provider";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";
import DashboardLink from "@/components/sharable/DashboardLink";
import ReduxProvider from "@/store/ReduxProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Altoukhy",
  description: "Altoukhy Elegance Framed in Glass",
  icons: [
    {
      url: "/logowhite.png",
      href: "/logowhite.png",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${font.className} overflow-x-hidden antialiased`}>
        <ReduxProvider>
          <NextTopLoader color="#5384ef" />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Header />
            <DashboardLink />
            {children}
            <Footer />
          </ThemeProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </ReduxProvider>
      </body>
    </html>
  );
}
