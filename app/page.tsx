import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import News from "./components/News";
import Demos from "./components/Demos";
import Features from "./components/Features";
import Customers from "./components/Customers";
import Learning from "./components/Learning";
import Image from "next/image";

import FeaturesImage2 from "../public/assets/images/hp-page-break-img-hills.webp";
import CRM from "./components/CRM";
import Personalization from "./components/Personalization";
import Events from "./components/Events";
import Community from "./components/Community";
import Discover from "./components/Discover";
import FreeTrial from "./components/FreeTrial";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";

import ChatImage from "../public/assets/images/help.png";
import { FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import Brand from "./components/Brand";

export default function Home() {
  return (
    <main className="flex h-dvh overflow-hidden flex-col">
      <Navbar />
      <div className="w-full h-fit overflow-scroll text-themeText-100">
        <Brand />
        <div className="h-fit">
          <div className="xl:container mx-auto h-full max-xl:px-10">
            <Hero />
            <News />
            <Demos />
            <Features />
          </div>
          <div>
            <img
              className="w-full"
              src="https://wp.salesforce.com/en-eu/wp-content/uploads/sites/11/2023/10/hp-industries-page-break-bg.webp?w=1024"
              alt=""
            />
            <div className="max-xl:px-6">
              <Customers />
              <Learning />
              <CRM />
              <Personalization />
            </div>
            <img
              className="w-full"
              src="https://wp.salesforce.com/en-eu/wp-content/uploads/sites/11/2023/01/hp-page-break-img-hills.png?w=1024"
              alt=""
            />
            <div className="max-xl:px-6">
              <Events />
              <Community />
              <Discover />
              <FreeTrial />
              <NewsLetter />
            </div>
          </div>
        </div>
        <Footer />
        <BottomFooter />

        <div>
          <div className="absolute right-8 bottom-8 w-40 h-12 p-1 rounded-full bg-themeText-200 max-md:hidden">
            <div className="h-full flex items-center gap-4 text-sm">
              <Image
                className="h-full w-fit rounded-full"
                src={ChatImage}
                alt=""
              />
              <p className="underline text-white font-bold">Lets Chat</p>
            </div>
          </div>

          <div className="absolute right-8 bottom-8 md:hidden flex flex-col gap-4">
            <div className="w-14 h-14 rounded-full bg-themeText-200 flex">
              <FaPhone className="m-auto text-white text-3xl rotate-90" />
            </div>
            <div className="w-14 h-14 rounded-full bg-themeText-200 flex">
              <FaMessage className="m-auto text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
