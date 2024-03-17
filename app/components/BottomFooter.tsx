import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FaChevronDown, FaGlobe } from "react-icons/fa";
import BottomFooterImage from "../../public/assets/images/bottom-footer-image.png";
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
  return (
    <div className="py-6 bg-themeText-100 max-lg:px-6 sm:max-md:mt-40">
      <div className="mx-auto max-w-7xl flex items-start max-md:gap-12 max-md:flex-col max-lg:max-w-4xl max-xl:max-w-4xl">
        <div className="flex items-center gap-2 text-white mr-10 max-md:mx-auto">
          <FaGlobe className="w-5 h-5" />
          <p className="text-lg max-md:text-sm">Wordwide</p>
          <FaChevronDown className="w-4 h-4" />
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
