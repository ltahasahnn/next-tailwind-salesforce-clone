import Image from "next/image";
import Navbars from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";

export default function Home() {
  return (
    <main className="flex h-dvh overflow-hidden flex-col">
      <Navbars />
      <div className="xl:container overflow-scroll mx-auto h-dvh max-xl:px-6">
        <Hero />
        <News />
      </div>
    </main>
  );
}
