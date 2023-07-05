import { Link } from "gatsby";
import { func } from "prop-types";

import { link, link_active, nav } from "./Nav.module.css";

const Nav = ({ setIsOpen }) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/catering", label: "Catering" },
    { href: "/events", label: "Events" },
  ];

  return (
    <nav className={nav}>
      {links.map(({ href, label }) => (
        <Link
          activeClassName={link_active}
          className={link}
          onClick={setIsOpen}
          to={href}
          key={href}
        >
          {label}
        </Link>
      ))}
      <a className={link} href="http://wishbone-108424.square.site/">
        Order Online
      </a>
    </nav>
  );
};

Nav.propTypes = {
  setIsOpen: func,
};

export default Nav;
