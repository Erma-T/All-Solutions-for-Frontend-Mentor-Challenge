import Image from "next/image";
import About from "./component/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex flex-col items-center w-full px-4">
        <About />
      </div>
      
    </main>
  );
}
