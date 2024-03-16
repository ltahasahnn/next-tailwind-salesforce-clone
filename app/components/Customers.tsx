import Button from "./Button";

const Customers = () => {
  const list = [
    {
      image: "../assets/images/logo-wall-turtlebay.webp",
    },
    {
      image: "../assets/images/logo-wall-gucci.webp",
    },
    {
      image: "../assets/images/logo-wall-wonolo.webp",
    },
    {
      image: "../assets/images/logo-wall-wonolo-1.webp",
    },
    {
      image: "../assets/images/logo-wall-baca.webp",
    },
  ];

  return (
    <div className="flex flex-col text-center gap-16 text-themeText-100">
      <div className="w-7/12 max-lg:w-10/12 max-md:w-full mx-auto">
        <h2 className="font-semibold xl:text-4xl max-xl:text-3xl mx-auto leading-[3rem] tracking-[-0.32px] xl:montserrat max-lg:px-10 max-md:px-0">
          See how companies drive customer success in a whole new way with
          Einstein 1.
        </h2>
        <div>
          <p className="text-base mt-8 mb-10 xl:px-10 max-md:px-0 max-lg:px-20">
            Learn how companies of every description are using CRM, trusted AI,
            and data to be more productive and grow customer loyalty.
          </p>
        </div>
        <Button
          value="See all customer stories"
          outline
          className="border-primary-100 text-primary-100 w-60 py-3 max-md:w-full rounded-[.35rem]"
        />
      </div>
      <div className="flex max-lg:flex-wrap justify-center gap-4 w-11/12 max-md:w-full mx-auto">
        {list.map((item, index) => (
          <div
            className="shadow-[0_3px_8px_0_rgba(0,0,0,.15)] w-full flex h-24 items-center justify-center rounded-lg sm:max-w-96 max-sm:w-36 max-lg:w-3/12 max-md:h-20"
            key={index}
          >
            <img
              className="object-cover max-sm:h-8 max-md:h-8 sm:max-h-12"
              src={item.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Customers;
