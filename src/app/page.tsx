"use client";

import Image from "next/image";
import { About } from "@/app/components/about";
import Mainsection from "./components/mainsection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:px-[10rem]">
      
      <div className="flex flex-col items-center w-full px-4">
        <About />
      </div>
      <div className="flex flex-col items-center w-full px-4">
        <Mainsection />
      </div>
      
    </main>
  );
}
