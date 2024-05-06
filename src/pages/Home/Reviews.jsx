import profile1 from "../../assets/images/profile-1.jpg";
import profile2 from "../../assets/images/profile-2.jpg";
import profile3 from "../../assets/images/profile-3.jpg";
import img from "../../assets/images/bg-quotes.png";
const Reviews = () => {
  const data = [
    {
      img: profile1,
      name: "satish patel",
      job: "Founder & CEO, Huddle",
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      img: profile2,
      name: "Bruce McKenzie",
      job: "Founder & CEO, Huddle",
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      img: profile3,
      name: "Lva Boyd",
      job: "Founder & CEO, Huddle",
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative  gap-5">
          <img
            src={img}
            className="absolute  top-[-35px] left-[-10px]"
            alt="img"
          />

          {data.map(({ img, name, job, text }, id) => (
            <div
              key={id + 1}
              className="bg-primaryDarkBlueTestimonials relative z-30 rounded p-4 shadow-[10px_10px_0px_0px] shadow-primaryDarkBlueIntro"
            >
              <p className="text-neutralWhite text-base font-raleway mt-4">
                {text}
              </p>
              <div className="flex gap-3 items-end">
                <div className="mt-6">
                  <img
                    src={img}
                    alt="img"
                    className="w-10 aspect-square rounded-full mx-auto"
                  />
                </div>
                <div>
                  <h4 className="text-neutralWhite font-raleway text-base font-bold">
                    {name}
                  </h4>
                  <p className="text-neutralWhite text-sm font-raleway text-opacity-70">
                    {job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
