"use client";

import { FaChevronDown, FaGlobe } from "react-icons/fa";
import BottomFooterImage from "../../public/assets/images/bottom-footer-image.png";
import { IoTriangle } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const BottomFooter = () => {
  const list = [
    {
      text: "Legal",
    },
    {
      text: "Terms of Service",
    },
    {
      text: "Privacy",
    },
    {
      text: "Responsible Disclosure",
    },
    {
      text: "Contact Us",
    },
    {
      text: "Trust",
    },
    {
      text: "Cookie Preferences",
    },
  ];

  const bottomWrapperList = [
    {
      title: "Americas",
      text: [
        "América Latina",
        "(Español)",
        "Brasil (Português)",
        "Canada (English)",
        "Canada (Français)",
        "United States (English)",
      ],
    },
    {
      title: "Europe, Middle East, and Africa",
      text: [
        "España (Español)",
        "Deutschland (Deutsch)",
        "France (Français)",
        "Italia (Italiano)",
        "Nederland (Nederlands)",
        "Sverige (Svenska)",
        "United Kingdom (English)",
        "All other countries (English)",
      ],
    },
    {
      title: "Asia Pacific",
      text: [
        "Australia & New Zealand",
        "English)",
        "India (English)",
        "日本 (日本語)",
        "中国 (简体中文)",
        "台灣 (繁體中文)",
        "한국 (한국어)",
        "ประเทศไทย (ไทย)",
        "All other countries (English)",
      ],
    },
  ];

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="py-6 bg-themeText-100 max-lg:px-6 sm:max-md:mt-48">
      <div className="mx-auto max-w-7xl flex items-start max-md:gap-12 max-md:flex-col max-lg:max-w-4xl max-xl:max-w-4xl">
        <div className="relative max-md:mx-auto">
          <div
            onClick={() => setOpen(!isOpen)}
            className={clsx(
              "flex items-center gap-2 text-white mr-10 cursor-pointer select-none",
              isOpen && "*:text-themeText-200"
            )}
          >
            <FaGlobe className="w-5 h-5" />
            <p className="text-lg max-md:text-sm">Wordwide</p>
            <FaChevronDown className="w-4 h-4" />
          </div>
          {isOpen && (
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="absolute w-full bottom-full flex flex-col"
            >
              <div className="w-5 h-5 left-2/4 bottom-3 translate-x-[-50%] absolute mx-auto text-center text-2xl text-white drop-shadow-[0_0_2px_rgba(0,0,0,.15)]">
                <IoTriangle className="rotate-180" />
              </div>

              <div className="bg-white md:min-w-96 mb-7 absolute left-0 bottom-full border-l shadow-[0_0px_5px_0px_rgba(0,0,0,.15)] p-6 rounded-2xl z-50 max-md:w-72 max-md:h-80 max-md:overflow-scroll max-md:p-8 max-md:left-2/4 max-md:translate-x-[-50%]">
                <h3 className="font-bold text-xl mb-5">Worldwide</h3>

                <div className="flex h-full justify-between max-md:flex-col">
                  {bottomWrapperList.map((item, index) => (
                    <div
                      className={clsx(
                        "min-w-40 flex flex-col max-md:!w-full",
                        index === 1 &&
                          "py-6 my-6 md:border-x-2 max-md:border-y-2 md:min-w-64",
                        index === 2 && "md:min-w-52 pb-10"
                      )}
                    >
                      <span className="mb-4 trackig-wider">{item.title}</span>

                      <div>
                        {item.text.map((text, idx) => (
                          <div
                            key={index}
                            className={clsx(
                              "underline text-sm mb-1 !text-zinc-600",
                              index === 1 && idx === 7 && "text-themeText-200"
                            )}
                          >
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="flex w-full p-2 gap-4 max-xl:gap-2 max-xl:flex-col">
            <ul className="flex flex-wrap my-auto gap-4 text-xs items-center">
              {list.map((item, index) => (
                <li
                  className="underline text-white hover:text-themeText-200"
                  key={index}
                >
                  {item.text}
                </li>
              ))}
              <div className="flex items-center gap-2">
                <Image src={BottomFooterImage} className="h-3 w-fit" alt="" />
                <p className="underline text-white hover:text-themeText-200 text-xs">
                  Your Privacy Choices
                </p>
              </div>
            </ul>
          </div>

          <div className="text-white text-xs p-2">
            <span>
              © Copyright 2024 Salesforce, Inc.{" "}
              <a href="" className="underline hover:text-themeText-200">
                All rights reserved.
              </a>{" "}
              Various trademarks held by their respective owners. salesforce UK
              Limited, village 9, floor 26 Salesforce Tower, 110 Bishopsgate,
              London, UK, EC2N 4AY. Phone: 00800 7253 3333 | +353 14403500. Fax:
              +353 14403501
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomFooter;
