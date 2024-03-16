import Button from "./Button";

const Learning = () => {
  const list = [
    {
      image: "../assets/images/56b5a2cb9fb731dbfe6b5b88cd855775_badge.webp",
      title: "Salesforce CRM",
      text: "Learn how to use customer relationship management (CRM) software to grow your business.",
    },
    {
      image: "../assets/images/b91b2499486a772a4eee8ce55aa32b57_badge.webp",
      title: "Sales Cloud Basics",
      text: "Grow your business, boost productivity, and make smart decisions with Sales Cloud.",
    },
    {
      image: "../assets/images/db2713f3bec133c96429ddc96373ed09_badge.webp",
      title: "Service Cloud Basics",
      text: "Supercharge your agents with omni-channel tools and an intelligent service platform.",
    },
  ];
  return (
    <div className="my-20 text-themeText-100">
      <div>
        <div className="flex flex-col text-center montserrat gap-6">
          <h2 className="text-4xl font-bold mx-auto max-w-4xl max-md:max-w-full max-lg:max-w-xl max-[1380px]:text-3xl">
            Learn valuable skills for free, with Trailhead.
          </h2>
          <div className="text-lg font-light max-w-2xl mx-auto max-md:max-w-full max-lg:max-w-xl">
            <p>
              Follow guided learning paths and get hands-on to learn Salesforce,
              digital, and soft skills from anywhere.
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-16 mt-16 mx-auto max-w-7xl max-md:flex-col max-lg:mt-10 max-lg:gap-8 max-[1380px]:gap-10 lg:max-[1380px]:px-6">
          {list.map((item, index) => (
            <div
              key={index}
              className="w-full p-6 rounded-2xl shadow-[0_3px_10px_0px_rgba(0,0,0,.2)]"
            >
              <div className="mx-auto w-28 h-28">
                <img className="object-cover" src={item.image} alt="" />
              </div>

              <div className="flex flex-col gap-4 text-start montserrat">
                <div className="bg-primary-200 rounded-full flex text-xs w-16 h-9 font-semibold max-lg:mt-4">
                  <p className="m-auto">Module</p>
                </div>

                <h2 className="text-2xl font-semibold max-md:text-2xl max-lg:text-lg">
                  {item.title}
                </h2>

                <div className="font-light h-24 text-themeText-400 max-md:h-16 max-md:text-md tracking-wide">
                  <p className="moreText">{item.text}</p>
                </div>

                <div className="text-start">
                  <a href="#" className="underline mt-auto hover:no-underline">
                    Start learning
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            value="Learn for free"
            outline
            className="mt-24 text-themeText-200 border-themeText-200 max-md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Learning;
