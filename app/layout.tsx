import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eye Track Solutions | Advanced CCTV, Security & Automation",
  description: "Specializing in professional CCTV installation, smart locks, biometric access control, network cabling, and home & gate automation systems across Kerala.",
  keywords: [
    "CCTV installation",
    "home automation",
    "smart digital locks",
    "biometric access control",
    "automatic gate openers",
    "structured network cabling",
    "security systems Kerala",
    "Eye Track Solutions"
  ],
  openGraph: {
    title: "Eye Track Solutions | Advanced CCTV, Security & Automation",
    description: "Professional CCTV installation, smart locks, biometric access control, and automation systems across Kerala.",
    url: "https://eyetrack-tech.com/",
    siteName: "EYE TRACK SOLUTIONS PVT LTD",
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
