import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/data/restaurant";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${restaurant.name} | Kitab Kafesi Menyu`,
  description: `${restaurant.name} - ${restaurant.tagline}. Kitab, qəhvə və rahatlıq məkanı.`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1E1B16",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-cream text-charcoal antialiased">{children}</body>
    </html>
  );
}
