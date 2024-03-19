import Image from "next/image";
import Button from "./Button";

import FeaturesImage1 from "../../public/assets/images/financial-day.svg";
import FeaturesImage2 from "../../public/assets/images/placeholder25.svg";
import FeaturesImage3 from "../../public/assets/images/health-day.svg";
import FeaturesImage4 from "../../public/assets/images/manufacturing-day.svg";

const Features = () => {
  const list = [
    {
      avatar: FeaturesImage1,
      text: "Financial Services",
    },
    {
      avatar: FeaturesImage2,
      text: "Retail",
    },
    {
      avatar: FeaturesImage3,
      text: "Healthcare & Life Sciences",
    },
    {
      avatar: FeaturesImage4,
      text: "Manufacturing",
    },
  ];
  return (
    <div className="flex py-20 items-center w-full justify-center text-center">
      <div className="flex flex-col gap-16 max-sm:gap-12 w-full">
        <div className="w-full">
          <h2 className="text-4xl font-bold NotoSans max-xl:text-3xl">
            Find innovations for any industry.
          </h2>

          <div className="text-slate-600 font-light mb-12 mt-8 mx-auto text-lg md:max-lg:max-w-xl max-md:mt-4 max-xl:!text-md max-xl:mb-10 max-xl:max-w-3xl">
            <p>
              Whatever your industry, we offer solutions to modernise your
              business, save time, and lower costs.
            </p>
          </div>

          <Button
            value="See all industries"
            outline
            className="w-48 py-3 max-md:w-full rounded-md"
          />
        </div>

        <div className="grid grid-cols-4 mx-auto gap-4 max-sm:grid-cols-2 max-sm:gap-y-6 max-lg:gap-0">
          {list.map((item, index) => (
            <div className="w-36">
              <div className="rounded-full mb-4 w-20 h-20 p-6 mx-auto shadow-[0_5px_10px_0px_rgba(0,0,0,.2)] max-lg:h-20 max-lg:w-20">
                <Image src={item.avatar} alt="" />
              </div>
              <div className="text-center font-semimedium text-base mx-auto">
                <a href="#">{item.text}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Features;
