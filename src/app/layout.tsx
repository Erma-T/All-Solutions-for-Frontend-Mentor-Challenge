import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800"],});

export const metadata: Metadata = {
  title: "Frontend Mentor Solutions",
  description: "Solutions from frontend mentor by Ermiyas T.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-tr from-[#373c9c] via-[#1b0b58] to-[#5d1289]`}>
        
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
