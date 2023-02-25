import heroImage from "../assets/images/hero-image.svg";

import { header, img } from "./Hero.module.css";

const Hero = () => (
  <header className={header}>
    <img className={img} src={heroImage} alt="Wishbone Logo" />
  </header>
);

export default Hero;
