import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Charloxy Transport | Reliable. Safe. On Time.",
  description: "Your trusted partner for home, office, and business transport. Goods in Transit insurance up to R150,000.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased scroll-smooth bg-background`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1 mt-[72px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
