import img from "../../assets/images/illustration-stay-productive.png";
import { PiArrowCircleRightFill } from "react-icons/pi";

const Work = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={img} className="w-full" alt="img" />
          </div>
          <div>
            <h1 className="text-4xl leading-[60px] text-neutralWhite max-sm:text-xl font-raleway font-bold">
              Stay productive, <br />
              wherever you are
            </h1>
            <p className="mt-4 text-neutralDarkBlue text-xl text-neutralWhite  max-md:text-sm text-opacity-70">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your storage needs.
            </p>

            <p className="mt-4 text-neutralDarkBlue text-xl max-md:text-sm text-neutralWhite  text-opacity-70">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a
              href="#"
              className="text-accentCyan border-b block w-fit text-lg hover:text-neutralWhite hover:text-opacity-70 border-[inherit] border-spacing-3 mt-12"
            >
              See how Fylo works
              <PiArrowCircleRightFill className="inline-block ml-2 rounded-full  relative bottom-1 bg shadow-[0px_0px_10px_2px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
