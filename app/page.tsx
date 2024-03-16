import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";
import Demos from "./components/Demos";
import Features from "./components/Features";
import Customers from "./components/Customers";
import Learning from "./components/Learning";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh overflow-hidden flex-col">
      <Navbar />
      <div className="w-full h-dvh overflow-scroll">
        <div>
          <div className="xl:container mx-auto h-full max-xl:px-10">
            <Hero />
            <News />
            <Demos />
            <Features />
          </div>
          <div>
            <Image src="../assets/images/rounded.png" alt="" />
            <div className="max-xl:px-6">
              <Customers />
              <Learning />
            </div>
            <Image src="../assets/images/hp-page-break-img-hills.webp" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
