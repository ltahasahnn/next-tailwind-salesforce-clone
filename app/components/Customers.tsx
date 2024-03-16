import Image from "next/image";
import Button from "./Button";

import CustomersImage1 from "../../public/assets/images/logo-wall-turtlebay.webp";
import CustomersImage2 from "../../public/assets/images/logo-wall-gucci.webp";
import CustomersImage3 from "../../public/assets/images/logo-wall-wonolo.webp";
import CustomersImage4 from "../../public/assets/images/logo-wall-wonolo-1.webp";
import CustomersImage5 from "../../public/assets/images/logo-wall-baca.webp";

const Customers = () => {
  const list = [
    {
      image: CustomersImage1,
    },
    {
      image: CustomersImage2,
    },
    {
      image: CustomersImage3,
    },
    {
      image: CustomersImage4,
    },
    {
      image: CustomersImage5,
    },
  ];

  return (
    <div className="flex flex-col text-center gap-16 text-themeText-100">
      <div className="max-w-3xl max-[1160px]:max-w-2xl max-md:w-full mx-auto">
        <h2 className="!font-black text-4xl max-xl:text-3xl mx-auto leading-10 tracking-[-0.32px] NotoSans">
          See how companies drive customer success in a whole new way with
          Einstein 1.
        </h2>
        <div>
          <p className="text-base mt-8 mb-10">
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
      <div className="flex max-[1160px]:flex-wrap justify-center gap-4 max-[1160px]:!max-w-3xl max-w-7xl max-md:w-full mx-auto">
        {list.map((item, index) => (
          <div
            className="shadow-[0_3px_8px_0_rgba(0,0,0,.15)] w-full flex h-24 items-center justify-center rounded-lg min-w-48 max-[1160px]:max-w-52"
            key={index}
          >
            <Image
              className="object-cover max-sm:h-8 sm:max-h-12 max-md:h-8 w-fit"
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
