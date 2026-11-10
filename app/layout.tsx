import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Aromal Sathyan | International Business Development & Market Research",
  description:
    "Freelance and full-time: market research, business development and marketing operations. MBA in International Business Development, Paris.",
  openGraph: {
    title: "Aromal Sathyan | International Business Development & Market Research",
    description: "Market research, business development and marketing operations.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
