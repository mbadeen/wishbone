import hero from "../assets/images/logo1-white.svg";

import { header, img } from "./HomePageHero.module.css";

const HomePageHero = () => (
  <header className={header}>
    <img className={img} src={hero} alt="Wishbone Logo" />
  </header>
);

export default HomePageHero;
