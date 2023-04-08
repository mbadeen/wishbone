import hero from "../assets/images/logo1-white.svg";
// import mascot from "../assets/images/mascot-gray.svg";

import { header, img } from "./Hero.module.css";

const Hero = () => (
  <header className={header}>
    <img className={img} src={hero} alt="Wishbone Logo" />
    {/* <img className={bgImg} src={mascot} alt="" /> */}
  </header>
);

export default Hero;
