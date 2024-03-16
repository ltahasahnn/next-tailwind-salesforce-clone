import Image from "next/image";
import Button from "./Button";
import CRMImage from "../../public/assets/images/php-rc-what-is-crm.webp";

const CRM = () => {
  return (
    <div className="NotoSans max-xl:mx-auto max-lg:max-w-3xl max-xl:max-w-5xl max-md:max-w-full">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mx-auto max-w-4xl max-lg:max-w-full max-lg:tracking-wide max-xl:text-4xl max-xl:max-w-2xl max-[1439px]:text-4xl">
          All sorts of content. All to help you grow.
        </h2>
      </div>

      <div className="grid grid-cols-2 max-w-7xl mx-auto max-xl:max-w-6xl max-lg:grid-cols-1">
        <div className="my-auto max-lg:mb-16">
          <div>
            <h3 className="text-4xl font-bold max-[1439px]:text-3xl">
              What is CRM?
            </h3>
            <div className="mt-6 mb-10 text-lg max-w-lg lg:tracking-wide max-lg:max-w-full max-xl:max-w-md max-[1439px]:max-w-full">
              <p>
                Learn all about CRM, how it can unify all your teams, and how it
                drives growth and productivity across your business.
              </p>
            </div>
          </div>
          <Button className="max-md:w-full" outline value="Discover CRM" />
        </div>

        <div>
          <Image src={CRMImage} className="rounded-2xl" alt="" />
        </div>
      </div>
    </div>
  );
};
export default CRM;
