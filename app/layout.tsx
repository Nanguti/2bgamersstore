import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { CartHydration } from "@/components/CartHydration";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
// Load Inter for body text and Lora for elegant headings
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "2B Gamers Store",
  description: "Transform your space with luxury interior design services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.variable}  font-sans`}>
        <Providers>
          <CartHydration />
          <div className="min-h-screen">
            <Navbar />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
