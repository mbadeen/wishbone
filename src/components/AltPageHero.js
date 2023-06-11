import hero from "../assets/images/logo4-white.svg";

import { header, img } from "./AltPageHero.module.css";

const AltPageHero = () => (
  <header className={header}>
    <img className={img} src={hero} alt="Wishbone Logo" />
  </header>
);

export default AltPageHero;
