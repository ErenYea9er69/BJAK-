import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BJAK Malaysia | Compare & Renew Car & Motorcycle Insurance Online",
  description:
    "Compare instant quotes from 16 licensed insurers & takaful operators in Malaysia. 0% BNPL installments, instant JPJ digital road tax renewal, and 24/7 VIP roadside assistance. BNM compliant.",
  keywords: [
    "BJAK",
    "Car Insurance Malaysia",
    "Motorcycle Insurance",
    "Takaful Malaysia",
    "Renew Roadtax Online",
    "JPJ Digital Roadtax",
    "NCD Checker",
    "Zurich Takaful",
    "Etiqa",
    "Allianz",
  ],
  authors: [{ name: "BJAK Sdn. Bhd." }],
  openGraph: {
    title: "BJAK - Compare 16 Insurers & Renew Instantly",
    description: "Compare car & motorcycle insurance with 0% installment and free JPJ road tax delivery.",
    url: "https://bjak.my/en",
    siteName: "BJAK Malaysia",
    locale: "en_MY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#1d4ed8" />
      </head>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
