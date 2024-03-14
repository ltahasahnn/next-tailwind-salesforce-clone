import { FaBars, FaSearch, FaGlobe, FaUser } from "react-icons/fa";

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
        <div className="xl:container text-sm max-xl:px-4 max-xl:h-14 max-xl:py-2 h-24 py-4 mx-auto">
          <div className="nav-wrapper h-full flex items-center gap-8">
            <div className="nav-header-mobile h-full flex items-center gap-3 xl:hidden">
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
              <ul className="nav-item-list flex items-center font-medium gap-5">
                {navItemList.map((item, index) => (
                  <li
                    key={index}
                    className="nav-item hover:text-sky-600 duration-200 cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="utility-nav ml-auto flex items-center">
              <div className="utility icons flex items-center gap-4">
                <div className="contact flex flex-col text-center max-xl:hidden">
                  <span className="underline hover:text-sky-600 duration-200 cursor-pointer">
                    Contact Us
                  </span>
                  <span>00800 7253 3333</span>
                </div>

                <div className="search-icon xl:hover:bg-sky-100 xl:hover:text-sky-600 duration-100 cursor-pointer p-3 rounded-full">
                  <FaSearch />
                </div>
                <div className="globe-icon xl:hover:bg-sky-100 xl:hover:text-sky-600 duration-100 cursor-pointer p-3 rounded-full max-xl:hidden">
                  <FaGlobe />
                </div>
                <div className="user-icon xl:hover:bg-sky-100 xl:hover:text-sky-600 duration-100 cursor-pointer p-3 rounded-full flex items-center gap-2 font-bold text-sm">
                  <FaUser />
                  <span className="max-xl:hidden">Login</span>
                </div>
              </div>
              <div className="ml-4">
                <button className="px-4 py-2 xl:hover:bg-emerald-900 rounded-md font-medium bg-emerald-700 text-white">
                  Try for Sales
                </button>
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
