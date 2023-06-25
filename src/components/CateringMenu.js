import cateringMenu from "../assets/images/catering-menu.png";

import { img, section } from "./CateringMenu.module.css";

const CateringMenu = () => (
  <section className={section}>
    <img className={img} src={cateringMenu} alt="Catering Menu" />
  </section>
);

export default CateringMenu;
