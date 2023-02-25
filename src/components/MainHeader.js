import { useState } from "react";

import { Link } from "gatsby";

import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";

import wishboneW from "../assets/images/wishbone-w2.svg";

import { header, link, img } from "./MainHeader.module.css";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={header}>
      <Link className={link} to="/">
        <img className={img} src={wishboneW} alt="" />
      </Link>
      <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <NavMenu isOpen={isOpen} />
    </header>
  );
};

export default MainHeader;
