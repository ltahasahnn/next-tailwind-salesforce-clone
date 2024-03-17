import Image from "next/image";
import NewsLetterBoxImage from "../../public/assets/images/hp-newsletter-card.webp";
import Button from "./Button";

const NewsLetter = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 max-h-dvh">
      <div className="grid grid-cols-2 rounded-2xl w-full max-md:grid-cols-1 shadow-[0_2px_10px_0px_rgba(0,0,0,.2)]">
        <div className="m-auto md:max-w-md max-md:p-10 md:max-lg:max-w-xs md:max-lg:pl-6 md:max-[1439px]:max-w-sm">
          <h2 className="text-4xl mb-12 font-bold max-w-full lg:tracking-wide max-[1439px]:text-3xl">
            Get timely updates and fresh ideas delivered to your inbox.
          </h2>
          <Button value="Sign up now" className="max-md:w-full" />
        </div>

        <div className="ml-auto">
          <Image
            className="object-cover w-fit h-[30rem] rounded-r-2xl max-md:rounded-2xl max-[1439px]:h-fit"
            src={NewsLetterBoxImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
