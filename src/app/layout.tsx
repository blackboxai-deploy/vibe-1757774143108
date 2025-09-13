import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Solutions - Advanced Artificial Intelligence Services",
  description: "Leading artificial intelligence company providing machine learning, NLP, computer vision, and custom AI solutions for businesses worldwide.",
  keywords: "artificial intelligence, AI, machine learning, NLP, computer vision, AI consulting, AI development",
  authors: [{ name: "AI Solutions" }],
  openGraph: {
    title: "AI Solutions - Advanced Artificial Intelligence Services",
    description: "Leading artificial intelligence company providing machine learning, NLP, computer vision, and custom AI solutions for businesses worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}