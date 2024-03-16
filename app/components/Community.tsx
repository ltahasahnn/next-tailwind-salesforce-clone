import Button from "./Button";

const Community = () => {
  const list = [
    {
      type: "Group",
      title: "Sales Cloud - Getting Started",
      link: "Join us now",
    },
    {
      type: "Group",
      title: "Salesforce Platform",
      link: "Join us now",
    },
    {
      type: "Topic",
      title: "#Customer360",
      link: "Follow topic",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl my-24 md:max-[1380px]:px-6">
      <div>
        <h2 className="text-4xl tracking-wide font-bold mx-auto max-w-4xl text-center max-md:max-w-full max-xl:max-w-3xl max-[1439px]:text-3xl">
          Meet and collaborate with Trailblazers who share your role and
          interests.
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-16 my-16 max-md:grid-cols-1 max-xl:gap-6">
        {list.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-[0_3px_10px_0px_rgba(0,0,0,.2)]"
          >
            <div className="px-3 h-8 bg-primary-200 w-fit rounded-full text-sm flex">
              <p className="m-auto">{item.type}</p>
            </div>

            <div className="my-2 font-semibold tracking-wider text-2xl font-sm:text-2xl max-md:text-xl max-lg:text-lg md:max-xl:h-14 md:max-[1380px]:mb-6">
              <h2>{item.title}</h2>
            </div>

            <div>
              <a
                className="underline hover:no-underline font-semibold hover:text-primary-100"
                href="#"
              >
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          outline
          className="w-72 max-md:w-full"
          value="Explore Trailblazer Community"
        />
      </div>
    </div>
  );
};
export default Community;
