import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import Image from "next/image";

import FooterLogo from "../../public/assets/images/salesforce.svg";

const Footer = () => {
  const list = [
    {
      title: "New to Salesforce?",
      text: [
        "What is Salesforce?",
        "What is CRM?",
        "What is Cloud Computing?",
        "CRM Solutions",
        "Customer Success Stories",
        "Product Pricing",
        "Contact Us",
      ],
    },
    {
      title: "Popular Links",
      text: [
        "Small Business CRM",
        "Salesforce Automation",
        "Customer Service Solutions",
        "Digital Marketing Solutions",
        "Industry Solutions",
        "Salesforce Events",
        "New Release Features",
        "Manage Subscriptions",
      ],
    },
    {
      title: "About Salesforce",
      text: [
        "Our Story",
        "Careers",
        "Press",
        "Security and Performance",
        "Legal",
        "Privacy for Salesforce Products",
        "Salesforce EU Blog",
        "Salesforce EU Blog Signup",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 max-lg:hidden max-xl:max-w-5xl">
      <div className="flex">
        <div className="flex flex-col max-w-sm w-full max-xl:max-w-xs">
          <div className="h-24">
            <Image className="object-cover" src={FooterLogo} alt="" />
          </div>

          <div className="flex gap-4 text-zinc-700 mt-4 mb-8">
            <FaFacebookSquare className="w-7 h-7" />
            <FaSquareXTwitter className="w-7 h-7" />
            <FaLinkedin className="w-7 h-7" />
            <FaSquareInstagram className="w-7 h-7" />
            <FaYoutubeSquare className="w-7 h-7" />
          </div>

          <div className="font-semibold tracking-tighter text-sm">
            <p>Call us at 00800 7253 3333 or +353 14403500.</p>
          </div>
        </div>

        <div className="grid grid-cols-3 w-full">
          {list.map((item, index) => (
            <div key={index}>
              <h3 className="mb-10 font-semibold text-sm">{item.title}</h3>

              <div className="text-xs text-themeText-200">
                {item.text.map((text, idx) => (
                  <a href="#" className="mb-4 flex items-end gap-1" key={idx}>
                    {text}
                    {(index == 1 && idx === 6) ||
                    (index === 2 && idx === 3) ||
                    (index === 2 && idx === 4) ||
                    (index === 2 && idx === 5) ? (
                      <LiaExternalLinkSquareAltSolid className="w-5 h-5" />
                    ) : (
                      ""
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
