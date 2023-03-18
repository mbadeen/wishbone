import hero from "../assets/images/logo1-white.svg";

import { header, img } from "./Hero.module.css";

const Hero = () => (
  <header className={header}>
    <img className={img} src={hero} alt="Wishbone Logo" />
  </header>
);

export default Hero;
