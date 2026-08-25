import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best CCTV Service in Calicut | Home automation Installation",
  description: "Best CCTV service in Calicut for homes and offices. We offer CCTV, home & gate automation, IP, WiFi & 4G camera installation. Call us today.",
  openGraph: {
    title: "Best CCTV Service in Calicut | Home automation Installation",
    description: "Best CCTV service in Calicut for homes and offices. We offer CCTV, home & gate automation, IP, WiFi & 4G camera installation. Call us today.",
    url: "https://eyetrack-tech.com/",
    siteName: "EYE TRACK SOLUTIONS PRED",
    locale: "en_US",
    type: "website",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-[#f2392c] selection:text-white">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
