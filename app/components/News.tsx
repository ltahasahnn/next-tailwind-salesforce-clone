const News = () => {
  const list = [
    {
      image: "../assets/images/card-image-1.webp",
      text: "Meet Starter Suite: the simple, powerful CRM suite.",
      link: "Watch demo",
    },
    {
      image: "../assets/images/card-image-2.webp",
      text: "Join the Salesblazer movement.",
      link: "Get started",
    },
    {
      image: "../assets/images/card-image-3.webp",
      text: "Grow your small business with a CRM designed for you.",
      link: "Explore the solution",
    },
  ];

  return (
    <div className="my-12 ">
      <h2 className="text-center text-4xl mb-20 font-bold text-slate-800">
        What's new at Salesforce?
      </h2>

      <div className="grid grid-cols-3 gap-12">
        {list.map((item, index) => (
          <div key={index} className="flex flex-col rounded-xl">
            <div className="h-60">
              <img
                className="w-full rounded-t-xl h-full object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <div className="h-60 flex flex-col justify-between py-16 px-8">
              <span>{item.text}</span>
              <span>{item.link}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default News;
