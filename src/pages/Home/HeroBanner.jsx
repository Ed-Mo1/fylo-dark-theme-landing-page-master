import img from "../../assets/images/illustration-intro.png";
import curvyLG from "../../assets/images/bg-curvy-desktop.svg";
import curvySm from "../../assets/images/bg-curvy-mobile.svg";
import Btn from "../../components/Btn";
const HeroBanner = () => {
  return (
    <section className="bg-primaryDarkBlueTestimonials pt-12 max-sm:pt-4 pb-60 max-sm:pb-16 relative z-10">
      <img
        src={curvyLG}
        className="absolute bottom-0 left-0 right-0 w-full z-[-1] md:block hidden"
      />
      <img
        src={curvySm}
        className="absolute bottom-0 left-0 right-0 w-full z-[-1] md:hidden block"
      />
      <div className="container">
        <div className="min-h-screen space-y-12 grid place-content-center">
          <div>
            <img src={img} alt="img" className="w-full  mx-auto" />
          </div>
          <div>
            <h1 className="text-center text-neutralWhite text-4xl leading-[60px] max-sm:text-xl font-raleway font-bold">
              All your files in one secure location, <br />
              accessible anywhere.
            </h1>
            <p className="text-center mt-4 text-neutralWhite text-xl max-md:text-sm text-opacity-70">
              Fylo stores all your most important files in one secure location.
              <br />
              Access them wherever you need, share and collaborate with <br />
              friends, family, and co-workers.
            </p>
            <div className="flex justify-center mt-10 mx-auto max-w-[400px]">
              <Btn text="Get Started" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
