import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3DInsights",
  description: "Ahmadu Bello University 3D Models Learning Management Sytsem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-green-50 w-full scroll-smooth transition-all ${inter.className}`}
      >
        <Header />
        <main className="min-h-screen w-full pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
