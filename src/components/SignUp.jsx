import { useState } from "react";
import Btn from "./Btn";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const testEmail = () => {
    if (
      !email.match(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        "ig"
      )
    ) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <div className="max-w-[1200px] w-[95%] mx-auto bg-primaryDarkBlueTestimonials p-12 max-sm:p-6 rounded shadow-lg">
      <h2 className="text-3xl max-sm:text-lg text-neutralWhite font-raleway font-bold text-center">
        Get early access today
      </h2>
      <p className="text-center text-xl max-sm:text-sm text-neutralWhite mt-4 text-opacity-70">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="mt-10 flex gap-5 max-md:gap-10 max-md:flex-col items-start">
        <div className="flex-grow relative max-md:w-full">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="email@example.com"
            className="p-4 rounded-full text-lg w-full max-sm:text-sm"
          />

          {showError && (
            <p className="absolute top-[102%] text-sm left-5 max-md:bottom-[-25px] max-md:left-3 text-accentLightRed">
              Please enter a valid email address
            </p>
          )}
        </div>
        <div onClick={testEmail} className="max-md:w-full ">
          <Btn text="Get Started For Free" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
