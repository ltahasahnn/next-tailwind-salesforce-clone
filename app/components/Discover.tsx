import Image from "next/image";
import DiscoverImage from "../../public/assets/images/php-appy-appexchange.webp";
import Button from "./Button";

const Discover = () => {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-7xl mb-12 max-lg:grid-cols-1 max-lg:gap-12 max-[1439px]:gap-8">
      <div className="max-w-lg max-md:max-w-full max-lg:mx-auto max-lg:max-w-md max-[1439px]:max-w-2xl">
        <Image className="object-cover" src={DiscoverImage} alt="" />
      </div>

      <div className="flex mx-auto max-w-lg max-md:max-w-full max-lg:row-start-1 max-lg:max-w-3xl max-[1439px]:max-w-2xl">
        <div className="m-auto tracking-wider max-[1439px]:tracking-normal">
          <h2 className="text-4xl font-bold max-lg:text-3xl max-[1439px]:font-semibold">
            Discover apps and expertise to extend Salesforce.
          </h2>

          <div className="mt-8 mb-12 themeText-400 max-md:text-lg max-md:mt-4 max-md:mb-8 max-lg:text-base max-[1439px]:text-lg">
            <p>
              Browse our AppExchange marketplace, with thousands of customised
              apps and specialised consulting partners to help any sized
              business craft a perfectly tailored Customer 360 solution.
            </p>
          </div>

          <Button
            outline
            value="Visit AppExchange"
            className="w-52 max-md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Discover;
