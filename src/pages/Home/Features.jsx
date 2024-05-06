import icon1 from "../../assets/images/icon-security.svg";
import icon2 from "../../assets/images/icon-collaboration.svg";
import icon3 from "../../assets/images/icon-any-file.svg";
import icon4 from "../../assets/images/icon-access-anywhere.svg";
const Features = () => {
  const data = [
    {
      icon: icon4,
      title: "Access your files, anywhere",
      text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      icon: icon1,
      title: "Security you can trust",
      text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      icon: icon2,
      title: "Real-time collaboration",
      text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },

    {
      icon: icon3,
      title: "Store any type of file",
      text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored. ",
    },
  ];
  return (
    <div className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">
          {data.map(({ icon, title, text }, id) => (
            <div key={id + 1} className="text-center">
              <img src={icon} alt="icon" className="mx-auto"/>
              <h3 className="text-neutralWhite text-3xl max-sm:text-xl font-raleway font-bold mt-10">
                {title}
              </h3>
              <p className="text-neutralWhite text-xl max-sm:text-sm font-raleway font-medium mt-4">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
