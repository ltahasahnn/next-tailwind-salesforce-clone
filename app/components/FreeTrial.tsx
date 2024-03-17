import Image from "next/image";
import Button from "./Button";

import FreeTrialImage from "../../public/assets/images/php-free-trial-desk.webp";

const FreeTrial = () => {
  return (
    <div className="text-center mt-32 mb-16">
      <div className="max-w-3xl mx-auto max-md:max-w-full max-lg:max-w-2xl">
        <h2 className="text-4xl font-bold mb-6 tracking-wide max-[1439px]:tracking-normal max-[1439px]:text-3xl">
          Try Salesforce for free. No credit card required, no software to
          install.
        </h2>

        <Button value="Start free trial" className="max-md:w-full" />
      </div>

      <div className="max-w-5xl mx-auto my-14 max-lg:max-w-3xl">
        <Image src={FreeTrialImage} alt="" />
      </div>
    </div>
  );
};
export default FreeTrial;
