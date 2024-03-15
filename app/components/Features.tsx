import Button from "./Button";

const Features = () => {
  const list = [
    {
      avatar: "../assets/images/financial-day.svg",
      text: "Financial Services",
    },
    {
      avatar: "../assets/images/placeholder25.svg",
      text: "Retail",
    },
    {
      avatar: "../assets/images/health-day.svg",
      text: "Healthcare & Life Sciences",
    },
    {
      avatar: "../assets/images/manufacturing-day.svg",
      text: "Manufacturing",
    },
  ];
  return (
    <div className="flex py-20 items-center text-themeText-100 justify-center text-center">
      <div className="flex flex-col gap-16 max-sm:gap-12">
        <div>
          <h2 className="text-4xl font-bold montserrat max-xl:text-3xl">
            Find innovations for any industry.
          </h2>

          <div className="mt-8 max-xl:mb-10 mb-12 max-xl:w-9/12 max-lg:w-8/12 max-md:w-full mx-auto text-lg max-xl:!text-md text-slate-600">
            <p className="font-light">
              Whatever your industry, we offer solutions to modernise your
              business, save time, and lower costs.
            </p>
          </div>

          <Button
            value="See all industries"
            outline
            className="border-primary-100 text-primary-100 w-48 py-3 max-md:w-full rounded-[.35rem]"
          />
        </div>

        <div className="grid grid-cols-4 mx-auto gap-4 w-fit max-sm:grid-cols-2 max-sm:gap-y-6 max-lg:gap-0">
          {list.map((item, index) => (
            <div className="w-36">
              <div className="rounded-full mx-auto shadow-[0_5px_10px_0px_rgba(0,0,0,.2)] p-5 mb-4 w-[5.5rem] h-[5.5rem]">
                <img src={item.avatar} alt="" />
              </div>
              <div className="text-center font-semibold text-base mx-auto px-1">
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
