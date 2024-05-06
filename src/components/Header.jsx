import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="bg-primaryDarkBlueTestimonials">
      <div className="container">
        <div className="flex gap-5 pt-10 max-sm:pt-6 justify-between items-center">
          <div className="w-32 max-sm:w-16 flex-shrink-0">
            <Logo />
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
