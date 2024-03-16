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
        <h2 className="mx-auto text-4xl text-center montserrat font-black max-w-3xl max-sm:text-2xl max-md:w-full max-xl:text-3xl max-xl:max-w-3xl">
          Learn how Salesforce helps you work smarter and grow faster.
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-12 mx-auto max-md:grid-cols-1 max-md:w-full max-lg:max-w-2xl max-lg:grid-cols-2 max-lg:gap-6">
        {list.map((item, index) => (
          <div key={index} className="">
            <div className="mb-6">
              <img
                className="object-cover"
                draggable="false"
                src={item.image}
                alt=""
              />
            </div>

            <div className="h-32 max-sm:mb-4 max-lg:h-28 max-md:h-20 w-full">
              <h3 className="mb-2 font-bold montserrat max-md:text-2xl">
                {item.title}
              </h3>
              <div>
                <p className="text-sm max-lg:text-base max-md:text-lg">
                  {item.text}
                </p>
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
