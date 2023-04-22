import { bool, func } from "prop-types";

import Nav from "./Nav";
import Contact from "./Contact";

import { container, open, close } from "./NavMenu.module.css";

const NavMenu = ({ isOpen, setIsOpen }) => (
  <div className={[container, isOpen ? open : close].join(" ")}>
    <Nav setIsOpen={setIsOpen} />
    <Contact />
  </div>
);

NavMenu.propTypes = {
  isOpen: bool,
  setIsOpen: func,
};

export default NavMenu;
