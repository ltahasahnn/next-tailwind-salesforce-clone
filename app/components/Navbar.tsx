import { FaBars, FaSearch, FaGlobe, FaUser } from "react-icons/fa";
import Button from "./Button";

const Navbars = () => {
  const navItemList = [
    { title: "Products" },
    { title: "İndustries" },
    { title: "Customers" },
    { title: "Learning" },
    { title: "Support" },
    { title: "Company" },
    { title: "Salesforce+" },
  ];

  return (
    <header>
      <div className="nav bg-white">
        <div className="xl:container text-sm max-xl:px-6 max-xl:h-14 max-xl:py-2 h-24 py-4 mx-auto">
          <div className="nav-wrapper h-full flex items-center gap-8">
            <div className="nav-header-mobile h-full flex items-center gap-5 xl:hidden">
              <FaBars className="text-2xl cursor-pointer" />
              <div className="nav-mobile-logo h-full">
                <a className="h-14" href="">
                  <img
                    className="h-full my-auto"
                    src="../assets/images/salesforce-no-type-logo.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="nav-header-logo h-full max-xl:hidden">
              <a className="h-full" href="">
                <img
                  className="h-14 my-auto"
                  src="../assets/images/salesforce.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="nav-items max-xl:hidden">
              <ul className="nav-item-list flex items-center text-themeText-100 font-bold gap-5">
                {navItemList.map((item, index) => (
                  <li
                    key={index}
                    className="nav-item hover:text-primary-100 duration-200 cursor-pointer min-w-16"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="utility-nav ml-auto flex items-center">
              <div className="utility icons flex items-center gap-4">
                <div className="contact flex flex-col font-light text-center max-xl:hidden">
                  <span className="underline hover:text-primary-100 duration-200 cursor-pointer">
                    Contact Us
                  </span>
                  <span>00800 7253 3333</span>
                </div>

                <div className="search-icon xl:hover:bg-primary-200 hover:text-themeText-200 xl:hover:text-primary-100 duration-100 cursor-pointer p-3 rounded-full">
                  <FaSearch />
                </div>
                <div className="globe-icon xl:hover:bg-primary-200 hover:text-themeText-200 xl:hover:text-primary-100 duration-100 cursor-pointer p-3 rounded-full max-xl:hidden">
                  <FaGlobe />
                </div>
                <div className="user-icon hover:bg-primary-200 hover:text-themeText-200 xl:hover:text-primary-100 duration-100 cursor-pointer p-3 rounded-full flex items-center gap-2 font-bold text-sm">
                  <FaUser />
                  <span className="max-xl:hidden">Login</span>
                </div>
              </div>
              <div className="ml-4">
                <Button
                  className="bg-secondary-100 border-secondary-100 hover:bg-secondary-200 w-32 py-2 hover:border-secondary-200 max-xl:py-0.5 max-xl:text-sm max-xl:p-0 max-xl:w-24"
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
