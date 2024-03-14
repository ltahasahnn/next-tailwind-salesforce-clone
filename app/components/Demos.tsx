const Demos = () => {
  const list = [
    {
      image: "../assets/images/php-products-smb.webp",
      title: "Small Business",
      text: "Sell smarter and provide support faster in a single app.",
    },
    {
      image: "../assets/images/php-products-sales.webp",
      title: "Sales",
      text: "Close more deals faster and unleash growth with AI-driven sales.",
    },
    {
      image: "../assets/images/php-products-service.webp",
      title: "Services",
      text: "Easily scale service and boost productivity with AI support.",
    },
    {
      image: "../assets/images/php-products-all-products.webp",
      title: "See all products",
      text: "Connect with customers in a new way with Customer 360 driven by AI.",
    },
  ];

  return (
    <div className="flex flex-col gap-16 text-text-100 py-12 text-themeText-100">
      <div>
        <h2 className="mx-auto w-7/12 max-xl:w-8/12 max-lg:w-11/12 max-md:w-full text-[2.25rem] text-center font-bold">
          Learn how Salesforce helps you work smarter and grow faster.
        </h2>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-6 max-lg:px-12 max-md:px-0 gap-12">
        {list.map((item, index) => (
          <div key={index} className="p-1">
            <div className="mb-6">
              <img
                className="w-full h-full aspect-square"
                draggable="false"
                src={item.image}
                alt=""
              />
            </div>

            <div className="h-32 max-lg:h-28 max-md:h-20">
              <h3 className="mb-2 font-bold">{item.title}</h3>
              <div>
                <p className="text-md">{item.text}</p>
              </div>
            </div>

            <div className="flex">
              <a
                href="#"
                className="underline max-md:mx-auto hover:text-themeText-300 hover:no-underline"
              >
                Watch Demos
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Demos;
