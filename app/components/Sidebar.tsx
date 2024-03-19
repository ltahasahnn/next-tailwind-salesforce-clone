import Image from "next/image";

// Product
import SidebarProductImage2 from "../../public/assets/images/nav-products-promo-sky-desktop.webp";
import SidebarProductImage3 from "../../public/assets/images/nav-products-promo-bottom-desktop.webp";
import SidebarProductImage4 from "../../public/assets/images/icon-360.webp";

// Indistries
import SidebarIndistriesImage1 from "../../public/assets/images/nav-industries-promo-sky-desktop.webp";
import SidebarIndistriesImage2 from "../../public/assets/images/nav-industries-promo-bottom-desktop.webp";
import SidebarIndistriesImage3 from "../../public/assets/images/icon-industries.webp";

// Learning
import SidebarLearningImage1 from "../../public/assets/images/nav-resources-promo-sky-desktop.webp";
import SidebarLearningImage2 from "../../public/assets/images/resources-promo-bottom-desktop.webp";
import SidebarLearningImage3 from "../../public/assets/images/nav-trailhead-1.webp";

// Support
import SidebarSupportImage1 from "../../public/assets/images/nav-support-promo-sky-desktop.webp";
import SidebarSupportImage2 from "../../public/assets/images/nav-support-promo-bottom-desktop.webp";

// Customers
import SidebarCustomersImage1 from "../../public/assets/images/nav-customers-l3-default-top-desktop.webp";
import SidebarCustomersImage2 from "../../public/assets/images/nav-customers-l3-default-bottom-desktop.webp";

// Company
import SidebarCompanyImage1 from "../../public/assets/images/nav-company-promo-sky-desktop.webp";
import SidebarCompanyImage2 from "../../public/assets/images/company-promo-bottom-desktop.webp";

// Salesforce
import SidebarSalesforceImage1 from "../../public/assets/images/nav-salesforce-plus-promo-sky-desktop.webp";
import SidebarSalesforceImage2 from "../../public/assets/images/nav-salesforce-plus-promo-bottom-desktop.webp";

import IndistriesImage1 from "../../public/assets/images/Indistries-1.svg";
import IndistriesImage2 from "../../public/assets/images/Indistries-2.svg";
import IndistriesImage3 from "../../public/assets/images/Indistries-3.svg";
import IndistriesImage4 from "../../public/assets/images/Indistries-4.svg";
import IndistriesImage5 from "../../public/assets/images/Indistries-5.svg";
import IndistriesImage6 from "../../public/assets/images/Indistries-6.svg";
import IndistriesImage7 from "../../public/assets/images/Indistries-7.svg";
import IndistriesImage8 from "../../public/assets/images/Indistries-8.svg";
import IndistriesImage9 from "../../public/assets/images/Indistries-9.svg";
import IndistriesImage10 from "../../public/assets/images/Indistries-10.svg";
import IndistriesImage11 from "../../public/assets/images/Indistries-11.svg";
import IndistriesImage12 from "../../public/assets/images/Indistries-12.svg";
import IndistriesImage13 from "../../public/assets/images/Indistries-13.svg";

import ProductImage1 from "../../public/assets/images/product-1.svg";
import ProductImage2 from "../../public/assets/images/product-2.svg";
import ProductImage3 from "../../public/assets/images/product-3.svg";
import ProductImage4 from "../../public/assets/images/product-4.svg";
import ProductImage5 from "../../public/assets/images/product-5.svg";
import ProductImage6 from "../../public/assets/images/product-6.svg";
import ProductImage7 from "../../public/assets/images/product-7.svg";
import ProductImage8 from "../../public/assets/images/product-8.svg";
import ProductImage9 from "../../public/assets/images/product-9.svg";
import ProductImage10 from "../../public/assets/images/product-10.svg";
import ProductImage11 from "../../public/assets/images/product-11.svg";
import ProductImage12 from "../../public/assets/images/product-12.svg";
import ProductImage13 from "../../public/assets/images/product-13.svg";
import ProductImage14 from "../../public/assets/images/product-14.svg";
import ProductImage15 from "../../public/assets/images/product-15.svg";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import clsx from "clsx";

interface SidebarProps {
  selected: number | null;
  onMouseEnter: any;
  openSidebar: boolean;
  sidebar: boolean;
}

interface SidebarItem {
  icon: any;
  value: string;
}

interface SidebarList {
  image: { value: any }[];
  defaultIcon: any;
  defaultTitle: string;
  defaultText: string;
  defaultButtonValue: string;
  title: string;
  text: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebar,
  selected,
  openSidebar,
  onMouseEnter,
}) => {
  const [isOpen, setOpen] = useState<boolean>(sidebar);

  useEffect(() => {
    setOpen(sidebar);
  }, [sidebar, selected, openSidebar]);

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0 },
  };

  const sidebarList: SidebarList[] = [
    {
      image: [
        {
          value: SidebarProductImage2,
        },
        {
          value: SidebarProductImage3,
        },
      ],
      defaultIcon: SidebarProductImage4,
      defaultTitle: "Explore Customer 360.",
      defaultText:
        "Unite your teams around your customer with shared data and integrated tools to drive growth and lower costs.",
      defaultButtonValue: "See all Salesforce products",
      title: "Products",
      text: [
        {
          icon: ProductImage1,
          value: "Customer 360",
        },
        {
          icon: ProductImage2,
          value: "Artificial Intelligence",
        },
        {
          icon: ProductImage3,
          value: "Small Business",
        },
        {
          icon: ProductImage4,
          value: "Sales",
        },
        {
          icon: ProductImage5,
          value: "Customer",
        },
        {
          icon: ProductImage6,
          value: "Service",
        },
        {
          icon: ProductImage7,
          value: "Marketing",
        },
        {
          icon: ProductImage8,
          value: "Commerce",
        },
        {
          icon: ProductImage9,
          value: "Data Cloud",
        },
        {
          icon: ProductImage10,
          value: "Tableau",
        },
        {
          icon: ProductImage11,
          value: "Mulesolt",
        },
        {
          icon: ProductImage12,
          value: "Slack",
        },
        {
          icon: ProductImage13,
          value: "Einstein 1 Platform",
        },
        {
          icon: ProductImage14,
          value: "Net Zero",
        },
        {
          icon: ProductImage15,
          value: "Partner Apps & Experts",
        },
      ],
    },
    {
      image: [
        {
          value: SidebarIndistriesImage1,
        },
        {
          value: SidebarIndistriesImage2,
        },
      ],
      defaultIcon: SidebarIndistriesImage3,
      defaultTitle: "Explore Salesforce for industries.",
      defaultText:
        "Get industry-specific innovations that modernise your business, speed up time to value and boost productivity.",
      defaultButtonValue: "See all Indistries",
      title: "Indistries",
      text: [
        {
          icon: IndistriesImage1,
          value: "Automotive",
        },
        {
          icon: IndistriesImage2,
          value: "Communications",
        },
        {
          icon: IndistriesImage3,
          value: "Consumer Goods",
        },
        {
          icon: IndistriesImage4,
          value: "Education",
        },
        {
          icon: IndistriesImage5,
          value: "Energy & Utilities",
        },
        {
          icon: IndistriesImage6,
          value: "Financial Services",
        },
        {
          icon: IndistriesImage7,
          value: "Healthcare & Life Sciences",
        },
        {
          icon: IndistriesImage8,
          value: "Manufacturing",
        },
        {
          icon: IndistriesImage9,
          value: "Media",
        },
        {
          icon: IndistriesImage10,
          value: "Nonprofit",
        },
        {
          icon: IndistriesImage11,
          value: "Public Sector",
        },
        {
          icon: IndistriesImage12,
          value: "Retail",
        },
        {
          icon: IndistriesImage13,
          value: "Technology",
        },
      ],
    },
    {
      image: [
        {
          value: SidebarCustomersImage1,
        },
        {
          value: SidebarCustomersImage2,
        },
      ],
      defaultIcon: "",
      defaultTitle: "Explore succes stories.",
      defaultText:
        "See how our customers transform their businesses with Data + AI + CRM + Trust.",
      defaultButtonValue: "See all stories",
      title: "Customers",
      text: [
        {
          icon: "",
          value: "Customer Stories",
        },
        {
          icon: "",
          value: "Trailblazer Stories",
        },
      ],
    },
    {
      image: [
        {
          value: SidebarLearningImage1,
        },
        {
          value: SidebarLearningImage2,
        },
      ],
      defaultIcon: SidebarLearningImage3,
      defaultTitle: "Become a Trailblazer.",
      defaultText:
        "Unlock free hands-on learning, our global community, original series, and support.",
      defaultButtonValue: "Join for free",
      title: "Learning",
      text: [
        {
          icon: "",
          value: "Learning on Trailhead",
        },
        {
          icon: "",
          value: "Events & Experiences",
        },
        {
          icon: "",
          value: "Blogs",
        },
        {
          icon: "",
          value: "By Topic",
        },
        {
          icon: "",
          value: "By Role",
        },
        {
          icon: "",
          value: "By Industry",
        },
        {
          icon: "",
          value: "By Content Type",
        },
        {
          icon: "",
          value: "Setup & Optimisation",
        },
      ],
    },
    {
      image: [
        {
          value: SidebarSupportImage1,
        },
        {
          value: SidebarSupportImage2,
        },
      ],
      defaultIcon: "",
      defaultTitle: "Questions? We can help.",
      defaultText:
        "Find critical answers for all things Salesforce – search resources, browse documentation, log cases, and more.",
      defaultButtonValue: "Visit the Help centre",
      title: "Support",
      text: [
        {
          icon: "",
          value: "Help & Documentation",
        },
        {
          icon: "",
          value: "Communities",
        },
        {
          icon: "",
          value: "Customer Succes",
        },
      ],
    },
    {
      image: [
        {
          value: SidebarCompanyImage1,
        },
        {
          value: SidebarCompanyImage2,
        },
      ],
      defaultIcon: "",
      defaultTitle: "Hear our story.",
      defaultText:
        "We believe in building relationships - not just between companies and customers, but among our global communities.",
      defaultButtonValue: "Learn about us",
      title: "Company",
      text: [
        {
          icon: "",
          value: "About Salesforce",
        },
        {
          icon: "",
          value: "Our Values",
        },
        {
          icon: "",
          value: "Our Impact",
        },
        {
          icon: "",
          value: "Carrers",
        },
        {
          icon: "",
          value: "News",
        },
        {
          icon: "",
          value: "More Salesforce Brands",
        },
      ],
    },
    {
      image: [
        {
          value: SidebarSalesforceImage1,
        },
        {
          value: SidebarSalesforceImage2,
        },
      ],
      defaultIcon: "",
      defaultTitle: "Explore Salesforce+",
      defaultText:
        "Get inspired with free access to award-winning original series and live experiences.",
      defaultButtonValue: "Visit Salesforce+",
      title: "Salesforce+",
      text: [
        {
          icon: "",
          value: "Original Content",
        },
        {
          icon: "",
          value: "Dreamforce",
        },
        {
          icon: "",
          value: "My List",
        },
      ],
    },
  ];

  return (
    <div onMouseEnter={onMouseEnter} className="relative h-full bottom-5">
      <div
        className={clsx(
          "absolute left-0 top-0 w-screen h-dvh z-50 pointer-events-none duration-300 transition-all max-xl:hidden",
          selected != null && isOpen
            ? "bg-[rgba(0,0,0,.3)]"
            : "bg-[rgba(0,0,0,0)]"
        )}
      ></div>

      <div
        className={clsx(
          "duration-700 transition-all relative right-full top-0 max-xl:hidden",
          selected != null && isOpen && "!right-0"
        )}
      >
        {selected != null && isOpen ? (
          <motion.div className="absolute left-0 top-full w-full h-dvh flex items-center z-50 font-bold text-zinc-500">
            <div className="w-full h-full max-w-xl bg-white py-16 pr-6 overflow-auto">
              <div className="ml-auto flex flex-col gap-6 w-full max-w-sm pb-20">
                <div>
                  <h2 className="font-bold text-4xl mb-8 text-themeText-100 pl-3">
                    {sidebarList[selected].title}
                  </h2>

                  <motion.ul className="h-full">
                    {sidebarList[selected].text.map((itm, idx) => (
                      <motion.li
                        animate="visible"
                        initial="hidden"
                        custom={idx}
                        variants={variants}
                        key={idx}
                        className="p-3 hover:bg-primary-200 rounded-md cursor-pointer flex items-center gap-5 duration-300"
                      >
                        {itm.icon && (
                          <div className="w-8 h-8">
                            <Image
                              src={itm.icon}
                              className="object-cover w-full h-full shadow-[0_1px_5px_1px_rgba(0,0,0,.15)] rounded-full p-1"
                              alt=""
                            />
                          </div>
                        )}
                        <span>{itm.value}</span>
                        {itm && (
                          <ChevronRightIcon className="w-7 h-7 ml-auto" />
                        )}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {selected === 0 ||
                    (selected === 1 && (
                      <div className="mt-10 pl-3 underline text-themeText-100 hover:text-themeText-200 cursor-pointer">
                        <p>See all pricing</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div
              className={clsx(
                "w-full h-full flex relative duration-700 transition-all",
                selected != null ? "!w-full !right-0" : "w-0 right-40"
              )}
            >
              <div
                className={clsx(
                  "flex w-full h-full relative items-center justify-center px-12 max-w-sm bg-primary-300 duration-700",
                  selected != null && "!rotate-0"
                )}
              >
                <Image
                  className="absolute left-0 top-0 object-cover"
                  src={sidebarList[selected].image[0].value}
                  alt=""
                />

                <div className="z-50 flex flex-col items-center mx-auto max-w-sm text-base text-center">
                  {sidebarList[selected].defaultIcon && (
                    <div>
                      <Image
                        src={sidebarList[selected].defaultIcon}
                        className="w-24 h-24"
                        alt=""
                      />
                    </div>
                  )}

                  <div>
                    <h2 className="font-bold text-2xl text-themeText-100">
                      {sidebarList[selected].defaultTitle}
                    </h2>

                    <div className="my-6 font-light">
                      <p>{sidebarList[selected].defaultText}</p>
                    </div>

                    <Button
                      className={clsx(
                        "w-fit !px-6 font-medium tracking-wider",
                        selected === 0 && "!px-0 w-full"
                      )}
                      value={sidebarList[selected].defaultButtonValue}
                    />
                  </div>
                </div>

                <Image
                  className="absolute w-full left-0 bottom-0 object-cover"
                  src={sidebarList[selected].image[1].value}
                  alt=""
                />
              </div>
            </div>

            <div
              onMouseEnter={() => setOpen(false)}
              className="w-full h-full"
            ></div>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Sidebar;
