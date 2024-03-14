import Button from "./Button";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-10 w-full lg:h-4/6 items-center">
      <div className="flex flex-col max-lg:w-10/12 max-md:w-full max-lg:mx-auto gap-10 mt-10 font-medium">
        <h1 className="text-themeText-100 font-bold text-5xl max-md:text-4xl">
          Try Salesforce Starter Suite for free.
        </h1>
        <p className="text-lg">
          Unite sales, service and email outreach in a single app. Try
          Salesforce Starter Suite today.
        </p>

        <div className="flex gap-2 max-md:flex-col">
          <Button value="Start free trial" className="max-md:w-full" />
          <Button outline value="Watch Demos" className="max-md:w-full" />
        </div>
      </div>

      <div className="h-full">
        <img
          draggable="false"
          className="h-full w-full object-contain"
          src="../assets/images/hero-image.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;
