import { FaBars, FaSearch, FaGlobe, FaUser } from "react-icons/fa";
import Button from "./Button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";

const Navbars = () => {
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

  return (
    <header>
      <div className="nav bg-white">
        <div className="xl:px-10 text-sm max-xl:px-6 max-xl:h-14 max-xl:py-2 h-24 py-4 mx-auto">
          <div className="h-full flex items-center gap-8">
            <div className="h-full flex items-center gap-5 max-sm:gap-3 xl:hidden">
              <FaBars className="text-2xl cursor-pointer" />
              <div className="h-full">
                <a className="h-14" href="">
                  <Image
                    className="h-full my-auto max-sm:py-1"
                    src="../assets/images/salesforce-no-type-logo.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="h-full max-xl:hidden">
              <a className="h-full" href="">
                <Image
                  className="h-14 my-auto"
                  src="../assets/images/salesforce.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="nav-items max-xl:hidden">
              <ul className="nav-item-list flex items-center text-base text-themeText-100 font-bold gap-5 max-[1380px]:gap-8">
                {navItemList.map((item, index) => (
                  <li
                    key={index}
                    className={clsx(
                      "nav-item flex items-center hover:text-primary-100 duration-200 cursor-pointer min-w-16",
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
                <div className="globe-icon xl:hover:bg-primary-200 hover:text-themeText-200 xl:hover:text-primary-100 duration-100 cursor-pointer p-3 rounded-full max-xl:hidden">
                  <FaGlobe />
                </div>
                <div className="user-icon hover:bg-primary-200 hover:text-themeText-200 xl:hover:text-primary-100 duration-100 cursor-pointer p-3 rounded-full flex items-center gap-4 font-bold text-sm">
                  <FaUser />
                  <span className="max-xl:hidden">Login</span>
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
      </div>
      <div className="nav-sticky"></div>
    </header>
  );
};
export default Navbars;
