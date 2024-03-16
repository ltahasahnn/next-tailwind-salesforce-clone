import Button from "./Button";

const Hero = () => {
  return (
    <div className="grid montserrat grid-cols-2 w-full lg:h-4/6 items-center max-lg:gap-10 max-lg:grid-cols-1 mx-auto max-lg:max-w-2xl">
      <div className="flex flex-col gap-10 mt-10 font-medium">
        <h1 className="text-themeText-100 max-sm:w-full font-black text-5xl max-xl:max-w-lg max-lg:max-w-full max-md:text-4xl">
          Try Salesforce Starter Suite for free.
        </h1>
        <p className="text-xl font-light xl:mr-auto xl:max-w-lg max-xl:max-w-md max-lg:max-w-full">
          Unite sales, service and email outreach in a single app. Try
          Salesforce Starter Suite today.
        </p>

        <div className="flex gap-2 max-md:flex-col md:max-lg:gap-6">
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
