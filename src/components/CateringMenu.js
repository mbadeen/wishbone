import cateringMenu1 from "../assets/images/catering-menu-1.png";
import cateringMenu2 from "../assets/images/catering-menu-2.png";

import { img, section } from "./CateringMenu.module.css";

const CateringMenu = () => (
  <section className={section}>
    <img className={img} src={cateringMenu1} alt="Catering Menu" />
    <img className={img} src={cateringMenu2} alt="Catering Menu" />
  </section>
);

export default CateringMenu;
