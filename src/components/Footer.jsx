import SignUp from "./SignUp";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import NavLink from "./NavLink";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  const links = [
    {
      name: "About Us",
      to: "#",
    },
    {
      name: "Jobs",
      to: "#",
    },
    {
      name: "Press",
      to: "#",
    },
    {
      name: "Blog",
      to: "#",
    },
    {
      name: "Contact Us",
      to: "#",
    },
    {
      name: "Terms",
      to: "#",
    },
    {
      name: "Privacy",
      to: "#",
    },
  ];
  return (
    <footer className="bg-primaryDarkBlueFooter relative pt-60 pb-12">
      <div className="w-full max-w-[1200px] absolute top-[-20%] left-1/2 translate-x-[-50%]">
        <SignUp />
      </div>
      <div className="container pt-20 pb-12">
        <div className="mb-10">
          <Logo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4">
          <div className="flex items-start gap-5 text-neutralWhite">
            <MdLocationOn className="text-xl flex-shrink-0 h-fit" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-center max-md:justify-start text-neutralWhite text-xl gap-2">
              <FaPhoneVolume className="flex-shrink-0 text-lg" />
              <p>+1-543-123-4567</p>
            </div>

            <div className="flex items-center justify-center max-md:justify-start text-neutralWhite text-xl gap-2">
              <MdEmail className="text-lg flex-shrink-0" />
              <p>example@fylo.com</p>
            </div>
          </div>

          <div className="flex max-md:flex-col gap-x-16 gap-y-5 max-md:justify-start justify-between">
            <ul>
              {links.slice(0, 4).map((link, id) => (
                <li key={id + 1}>
                  <NavLink {...link} />
                </li>
              ))}
            </ul>
            <ul>
              {links.slice(4).map((link, id) => (
                <li key={id + 1}>
                  <NavLink {...link} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-shrink-0 gap-5 justify-center">
            <a
              href="#"
              className="text-neutralWhite block h-fit hover:text-accentCyan duration-300 text-xl p-2 rounded-full border border-solid"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-neutralWhite block h-fit hover:text-accentCyan duration-300 text-xl p-2 rounded-full border border-solid"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-neutralWhite block h-fit hover:text-accentCyan duration-300 text-xl p-2 rounded-full border border-solid"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
