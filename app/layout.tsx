import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
