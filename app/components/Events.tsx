import Image from "next/image";

import EventsImage1 from "../../public/assets/images/chp-news-bar-evergreen-events.webp";
import EventsImage2 from "../../public/assets/images/chp-events-customer-success-2.webp";
import EventsImage3 from "../../public/assets/images/chp-events-for-developers.webp";

const Events = () => {
  const list = [
    {
      type: "Events",
      image: EventsImage1,
      title: "Immerse yourself in passion, learning, and expertise.",
      link: "Explore events",
    },
    {
      type: "Customer Success",
      image: EventsImage2,
      title: "Learn all about customer success in hands-on workshops.",
      link: "Check out our workshops",
    },
    {
      type: "Webinars",
      image: EventsImage3,
      title:
        "Get in-depth guidance on how to drive growth with Salesforce, free.",
      link: "Find webiner",
    },
  ];
  return (
    <div className="my-20 text-themeText-100">
      <div>
        <div>
          <h2 className="text-4xl tracking-wide text-center mx-auto font-bold max-lg:max-w-lg max-[1439px]:text-3xl">
            Inspiring events. In-person and streaming.
          </h2>
        </div>

        <div className="flex justify-center gap-10 mt-16 mx-auto max-w-7xl max-md:flex-col max-lg:mt-10 max-lg:gap-4 lg:max-[1380px]:px-6">
          {list.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-2xl shadow-[0_3px_10px_0px_rgba(0,0,0,.2)]"
            >
              <div className="mx-auto w-full">
                <Image
                  className="object-cover rounded-t-2xl"
                  src={item.image}
                  alt=""
                />
              </div>

              <div className="flex py-10 px-8 flex-col gap-4 text-start NotoSans max-md:px-8 max-md:py-8 max-lg:py-6 max-lg:px-4">
                <div className="bg-primary-200 rounded-full flex text-xs w-fit px-3 h-6 whitespace-nowrap font-medium max-lg:mt-4">
                  <p className="m-auto">{item.type}</p>
                </div>

                <h2 className="text-2xl font-bold md:h-28 max-md:mb-6 max-lg:text-lg max-xl:text-xl max-md:tracking-wider">
                  {item.title}
                </h2>

                <div className="text-start mt-auto">
                  <a href="#" className="underline mt-auto hover:no-underline">
                    {item.link}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Events;
