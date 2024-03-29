import Image from "next/image";
import CardImage1 from "../../public/assets/images/card-image-1.webp";
import CardImage2 from "../../public/assets/images/card-image-2.webp";
import CardImage3 from "../../public/assets/images/card-image-3.webp";

const News = () => {
  const list = [
    {
      image: CardImage1,
      text: "Meet Starter Suite: the simple, powerful CRM suite.",
      link: "Watch demo",
    },
    {
      image: CardImage2,
      text: "Join the Salesblazer movement.",
      link: "Get started",
    },
    {
      image: CardImage3,
      text: "Grow your small business with a CRM designed for you.",
      link: "Explore the solution",
    },
  ];

  return (
    <div className="mb-12 mt-16 max-w-7xl mx-auto">
      <h2 className="text-center max-md:text-3xl text-4xl max-md:mb-6 md:mb-20 font-semibold">
        What's new at Salesforce?
      </h2>

      <div className="grid grid-cols-3 max-md:!grid-cols-1 shrink-0 h-fit gap-10 max-xl:gap-5 max-lg:gap-3">
        {list.map((item, index) => (
          <div
            key={index}
            className="w-full cursor-pointer shadow-[0_2px_10px_0px_rgba(0,0,0,.2)] rounded-xl"
          >
            <div className="max-lg max-lg:h-44 max-md:h-fit">
              <Image
                className="w-full rounded-t-xl h-full square-radio object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex flex-col aspect-auto justify-between h-60 max-sm:h-48 max-sm:pt-12 max-sm:px-8 max-md:h-40 max-md:py-8 max-lg:h-44 max-lg:space-y-0 max-lg:pt-6 max-lg:p-6 space-y-4 p-8 font-semibold text-themeText-100">
              <span className="text-2xl max-lg:text-lg max-md:text-xl">
                {item.text}
              </span>
              <span className="duration-300 hover:text-primary-100 hover:no-underline underline">
                {item.link}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default News;
