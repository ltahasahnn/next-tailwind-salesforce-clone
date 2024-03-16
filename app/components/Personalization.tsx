import Image from "next/image";

import PersonalalizationImage1 from "../../public/assets/images/state-of-sales-resource-card.webp";
import PersonalalizationImage2 from "../../public/assets/images/php-rc-connections-series.webp";
import PersonalalizationImage3 from "../../public/assets/images/php-rc-lead-management.webp";

const Personalization = () => {
  const list = [
    {
      type: "Report",
      image: PersonalalizationImage1,
      title: "Read our latest State of Sales Report.",
      text: "Learn how more than 7,700 sales professionals are finding success now.",
      link: "Read the report",
    },
    {
      type: "Video Series",
      image: PersonalalizationImage2,
      title: "Stream our Connections video series.",
      text: "Hear how innovative marketers are connecting with customers in all new ways.",
      link: "Watch the series",
    },
    {
      type: "Webinar",
      image: PersonalalizationImage3,
      title: "Boost sales with Lead Management 101.",
      text: "Get expert advice on lead management.",
      link: "Join the webiner",
    },
  ];
  return (
    <div className="my-20">
      <div>
        <div className="flex justify-between gap-10 mt-16 mx-auto max-w-7xl max-md:flex-col max-lg:mt-10 max-lg:gap-8 lg:max-[1380px]:px-6">
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

              <div className="flex p-6 flex-col gap-4 text-start NotoSans">
                <div className="bg-primary-200 rounded-full flex text-xs w-fit px-3 h-6 whitespace-nowrap font-medium max-lg:mt-4">
                  <p className="m-auto">{item.type}</p>
                </div>

                <h2 className="text-2xl font-semibold max-sm:text-lg max-md:text-2xl md:max-lg:text-lg md:max-lg:h-20 lg:max-[1160px]:h-24">
                  {item.title}
                </h2>

                <div className="font-light h-24 text-themeText-400 tracking-wide max-sm:h-20 max-md:h-16 max-md:text-md md:max-lg:text-base">
                  <p className="moreText">{item.text}</p>
                </div>

                <div className="text-start mt-auto">
                  <a
                    href="#"
                    className="underline mt-auto hover:no-underline hover:text-primary-100"
                  >
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
export default Personalization;
