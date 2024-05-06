import NavLink from "./NavLink";

const Nav = () => {
  const links = [
    {
      name: "Features",
      to: "#",
    },
    {
      name: "Team",
      to: "#",
    },
    {
      name: "Sign In",
      to: "#",
    },
  ];
  return (
    <ul className="flex gap-10 max-sm:gap-4 flex-wrap">
      {links.map((link, id) => (
        <li key={id + 1}>
          <NavLink {...link} />
        </li>
      ))}
    </ul>
  );
};

export default Nav;
