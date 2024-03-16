import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";
import Demos from "./components/Demos";
import Features from "./components/Features";
import Customers from "./components/Customers";
import Learning from "./components/Learning";
import Image from "next/image";

import FeaturesImage1 from "../public/assets/images/rounded.png";
import FeaturesImage2 from "../public/assets/images/hp-page-break-img-hills.webp";
import CRM from "./components/CRM";
import Personalization from "./components/Personalization";
import Events from "./components/Events";
import Community from "./components/Community";

export default function Home() {
  return (
    <main className="flex h-dvh overflow-hidden flex-col">
      <Navbar />
      <div className="w-full h-dvh overflow-scroll text-themeText-100">
        <div>
          <div className="xl:container mx-auto h-full max-xl:px-10">
            <Hero />
            <News />
            <Demos />
            <Features />
          </div>
          <div>
            <Image src={FeaturesImage1} alt="" />
            <div className="max-xl:px-6">
              <Customers />
              <Learning />
              <CRM />
              <Personalization />
            </div>
            <Image src={FeaturesImage2} alt="" />
            <div className="max-xl:px-6">
              <Events />
              <Community />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
