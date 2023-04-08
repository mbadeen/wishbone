import { footer, img, section } from "./MainFooter.module.css";

import Contact from "./Contact";
import OperationalHours from "./OperationalHours";

import logo from "../assets/images/logo3-white.svg";

const MainFooter = () => (
  <footer className={footer}>
    <section className={section}>
      <img className={img} src={logo} alt="" />
      <OperationalHours />
    </section>
    <Contact />
  </footer>
);

export default MainFooter;
