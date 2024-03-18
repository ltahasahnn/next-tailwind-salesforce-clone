"use client";

import { useState } from "react";
import Button from "./Button";
import HeroImage from "../../public/assets/images/hero-image.png";
import Image from "next/image";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="grid NotoSans grid-cols-2 w-full max-w-7xl lg:h-4/6 items-center max-lg:gap-10 max-lg:grid-cols-1 mx-auto max-lg:max-w-2xl">
      <div className="flex flex-col gap-10 mt-10 font-medium">
        <h1 className="text-themeText-100 font-black xl:tracking-wider text-5xl xl:max-w-lg max-sm:w-full max-md:text-4xl max-lg:max-w-full max-xl:max-w-lg">
          Try Salesforce Starter Suite for free.
        </h1>
        <p className="text-xl font-light xl:mr-auto xl:max-w-lg max-xl:max-w-md max-lg:max-w-full">
          Unite sales, service and email outreach in a single app. Try
          Salesforce Starter Suite today.
        </p>

        <div className="flex gap-2 max-md:flex-col md:max-lg:gap-6">
          <Button value="Start free trial" className="max-md:w-full" />
          <Button outline value="Watch Demos" className="max-md:w-full" />
        </div>
      </div>

      <div
        className="h-full relative mt-8 min-h-72 cursor-pointer max-sm:min-h-60"
        onClick={toggleVideo}
      >
        {showVideo ? (
          <video controls autoPlay className="object-cover h-full rounded-2xl">
            <source src="assets/videos/erdogan.mp4" />
          </video>
        ) : (
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="object-cover w-full h-full absolute rounded-2xl top-0 left-0"
          />
        )}
      </div>
    </div>
  );
};
export default Hero;
