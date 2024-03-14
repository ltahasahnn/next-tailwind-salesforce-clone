import Image from "next/image";
import Navbars from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";
import Demos from "./components/Demos";

export default function Home() {
  return (
    <main className="flex h-dvh overflow-hidden flex-col">
      <Navbars />
      <div className="w-full h-dvh overflow-scroll">
        <div className="xl:container mx-auto h-full max-xl:px-6">
          <Hero />
          <News />
          <Demos />
        </div>
      </div>
    </main>
  );
}
