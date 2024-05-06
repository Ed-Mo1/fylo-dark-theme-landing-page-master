import React from "react";

const NavLink = ({ name, to }) => {
  return (
    <a
      href={to}
      className="link"
    >
      {name}
    </a>
  );
};

export default NavLink;
