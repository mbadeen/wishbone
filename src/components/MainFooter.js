import { footer, img, section } from "./MainFooter.module.css";

import Contact from "./Contact";
import LocationMap from "./LocationMap";

import logo from "../assets/images/logo3-white.svg";

const MainFooter = () => (
  <footer className={footer}>
    <section className={section}>
      <img className={img} src={logo} alt="" />
      <LocationMap />
    </section>
    <Contact />
  </footer>
);

export default MainFooter;
