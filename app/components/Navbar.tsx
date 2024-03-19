"use client";

import { FaBars, FaSearch, FaGlobe, FaUser, FaPhone } from "react-icons/fa";
import Button from "./Button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { IoTriangle } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

import MobileLogo from "../../public/assets/images/salesforce-no-type-logo.svg";
import Logo from "../../public/assets/images/salesforce.svg";
import Sidebar from "./Sidebar";

const Navbars = () => {
  const [navigationWrapper, setNavigationWrapper] = useState<boolean>(false);
  const [languageWrapper, setLanguageWrapper] = useState<boolean>(false);
  const [loginWrapper, setLoginWrapper] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [selectedNav, setSelectedNav] = useState<number | null>(null);

  const navItemList = [
    { title: "Products" },
    { title: "İndustries" },
    { title: "Customers" },
    { title: "Learning" },
    { title: "Support" },
    { title: "Company" },
    { title: "Salesforce +" },
    { title: "More" },
  ];
  const loginWrapperList = [
    {
      text: "Products",
    },
    {
      text: "Salesforce",
      icon: MobileLogo,
    },
    {
      text: "Marketing Cloud",
    },
    {
      text: "Experiences",
    },
    {
      text: "Trailblazer Account",
    },
    {
      text: "Access Trailhead, your Trailblazer profile, community, learning, original series, events, support, and more.",
    },
  ];
  const languageWrapperList = [
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
  const navList = [
    {
      icon: FaUser,
      title: "Login",
    },
    {
      icon: FaPhone,
      title: "Contact",
    },
    {
      icon: FaGlobe,
      title: "Change Region",
    },
  ];

  return (
    <header>
      <div className="nav bg-white relative">
        <div className="xl:px-10 text-sm max-xl:px-6 max-xl:h-14 max-xl:py-2 h-24 py-4 mx-auto">
          <div className="h-full flex items-center gap-8">
            <div className="h-full flex items-center gap-5 max-sm:gap-3 xl:hidden">
              <FaBars
                onClick={() => setOpen(!isOpen)}
                className={clsx("text-2xl cursor-pointer", isOpen && "hidden")}
              />
              <FaXmark
                onClick={() => setOpen(!isOpen)}
                className={clsx("text-2xl cursor-pointer", !isOpen && "hidden")}
              />
              <div className="h-full">
                <a className="h-14" href="">
                  <Image
                    className="h-full my-auto max-sm:py-1"
                    src={MobileLogo}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="h-full max-xl:hidden">
              <a className="h-full" href="">
                <Image className="h-14 my-auto" src={Logo} alt="" />
              </a>
            </div>
            <div
              onMouseLeave={() => setSidebar(false)}
              className="nav-items max-xl:hidden h-full flex items-center"
            >
              <ul className="nav-item-list flex items-center text-base text-themeText-100 font-semibold gap-5 max-[1380px]:gap-8 relative">
                {navItemList.map((item, index) => (
                  <li
                    onMouseEnter={() =>
                      index === 7 && setNavigationWrapper(true)
                    }
                    onMouseLeave={() =>
                      index === 7 && setNavigationWrapper(false)
                    }
                    onClick={() => {
                      index != 7 && setSidebar(true),
                        setOpenSidebar(sidebar),
                        setSelectedNav(index);
                    }}
                    key={index}
                    className={clsx(
                      "nav-item flex items-center hover:text-primary-100 duration-200 cursor-pointer min-w-16",
                      selectedNav === index &&
                        openSidebar &&
                        "text-primary-100",
                      index > 4 && index < 7 && "max-[1380px]:hidden",
                      index === 7 && "min-[1380px]:hidden"
                    )}
                  >
                    {item.title}
                    {index === 7 && (
                      <ChevronDownIcon className="w-5 h-5 ml-2" />
                    )}
                  </li>
                ))}

                {navigationWrapper && (
                  <div
                    onMouseEnter={() => setNavigationWrapper(true)}
                    onMouseLeave={() => setNavigationWrapper(false)}
                    className="absolute w-20 right-0 top-full flex flex-col z-50"
                  >
                    <div className="w-5 h-5 left-2/4 translate-x-[-50%] absolute mx-auto text-center text-2xl text-white drop-shadow-[0_0_2px_rgba(0,0,0,.15)]">
                      <IoTriangle />
                    </div>

                    <div className="absolute right-[-100px] w-80 bg-white top-5 drop-shadow-[0_0_2px_rgba(0,0,0,.15)] rounded-xl p-8 flex flex-col gap-4">
                      <a href="#">Company</a>
                      <a href="#">Salesforce+</a>
                    </div>
                  </div>
                )}
              </ul>
            </div>
            <div className="ml-auto flex items-center">
              <div className="icons flex items-center gap-1">
                <div className="flex flex-col mr-2 gap-1 font-light text-themeText-100 text-center max-xl:hidden">
                  <span className="underline hover:text-primary-100 duration-200 cursor-pointer">
                    Contact Us
                  </span>
                  <span>1-800-664-9073</span>
                </div>

                <div className="search-icon xl:hover:bg-primary-200 hover:text-themeText-200 xl:hover:text-primary-100 duration-100 cursor-pointer p-3 rounded-full">
                  <FaSearch />
                </div>
                <div className="relative">
                  <div
                    onMouseEnter={() => setLanguageWrapper(true)}
                    onMouseLeave={() => setLanguageWrapper(false)}
                    className="globe-icon xl:hover:bg-primary-200 hover:text-themeText-200 xl:hover:text-primary-100 duration-100 cursor-pointer p-3 rounded-full max-xl:hidden"
                  >
                    <FaGlobe />
                  </div>

                  {languageWrapper && (
                    <div
                      onMouseEnter={() => setLanguageWrapper(true)}
                      onMouseLeave={() => setLanguageWrapper(false)}
                      className="absolute w-full top-full flex flex-col max-xl:hidden z-50"
                    >
                      <div className="w-5 h-5 left-2/4 translate-x-[-50%] absolute mx-auto text-center text-2xl text-white drop-shadow-[0_0_2px_rgba(0,0,0,.15)]">
                        <IoTriangle />
                      </div>

                      <div className="bg-white min-w-96 absolute right-[-200px] mt-5 border-l shadow-[0_1px_5px_0px_rgba(0,0,0,.15)] p-6 rounded-2xl">
                        <h3 className="font-bold text-xl mb-5">
                          Change Region
                        </h3>

                        <div className="flex h-full justify-between">
                          {languageWrapperList.map((item, index) => (
                            <div
                              className={clsx(
                                "min-w-40 flex flex-col h-64",
                                index === 1 && "px-8 mx-10 border-x-2 min-w-64",
                                index === 2 && "min-w-52"
                              )}
                            >
                              <span className="mb-4 trackig-wider">
                                {item.title}
                              </span>

                              <div>
                                {item.text.map((text, idx) => (
                                  <div
                                    key={index}
                                    className={clsx(
                                      "underline text-sm mb-1 !text-zinc-600",
                                      index === 1 &&
                                        idx === 7 &&
                                        "text-themeText-200"
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

                <div className="relative">
                  <div
                    onMouseEnter={() => setLoginWrapper(true)}
                    onMouseLeave={() => setLoginWrapper(false)}
                    className="user-icon hover:bg-primary-200 hover:text-themeText-200 xl:hover:text-primary-100 duration-100 cursor-pointer p-3 rounded-full flex items-center gap-2 font-bold text-sm"
                  >
                    <FaUser />
                    <span className="max-xl:hidden text-xs">Login</span>
                  </div>

                  {loginWrapper && (
                    <div
                      onMouseEnter={() => setLoginWrapper(true)}
                      onMouseLeave={() => setLoginWrapper(false)}
                      className="absolute w-80 left-2/4 translate-x-[-50%] top-full flex flex-col max-xl:hidden z-50"
                    >
                      <div className="w-5 h-5 mx-auto text-center text-2xl text-white drop-shadow-[0_0_2px_rgba(0,0,0,.15)]">
                        <IoTriangle />
                      </div>

                      <div className="bg-white border-l shadow-[0_3px_5px_0px_rgba(0,0,0,.15)] p-6 rounded-2xl">
                        <h3 className="font-bold text-xl">Login</h3>

                        <ul className="flex flex-col my-6">
                          {loginWrapperList.map((item, index) => (
                            <li
                              className={clsx(
                                "flex items-center gap-2 mb-4",
                                index > 0 && "underline cursor-pointer",
                                index > 2 && "hidden"
                              )}
                              key={index}
                            >
                              {item.text}
                              {item.icon && (
                                <Image
                                  src={item.icon}
                                  className="h-5 w-fit"
                                  alt=""
                                />
                              )}
                            </li>
                          ))}
                        </ul>

                        <hr className="bg-zinc-300" />

                        <ul className="flex flex-col my-6">
                          {loginWrapperList.map((item, index) => (
                            <li
                              className={clsx(
                                "flex items-center gap-2 mb-4",
                                index === 4 && "underline cursor-pointer",
                                index < 3 && "hidden"
                              )}
                              key={index}
                            >
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="ml-4">
                <Button
                  className="bg-secondary-100 font-bold border-secondary-100 hover:bg-secondary-200 !w-32 py-2.5 hover:border-secondary-200 max-xl:!py-0.5 max-xl:text-sm max-xl:p-0 max-xl:!w-24"
                  value="Try for free"
                />
              </div>
            </div>
          </div>
        </div>

        <Sidebar
          onMouseEnter={() => setSidebar(true)}
          selected={selectedNav}
          openSidebar={openSidebar}
          sidebar={sidebar}
        />
      </div>
      <div className="nav-sticky"></div>
    </header>
  );
};
export default Navbars;
