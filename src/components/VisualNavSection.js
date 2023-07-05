import VisualNav from "../components/VisualNav";
import VisualNavExternal from "../components/VisualNavExternal";

import { section } from "./VisualNavSection.module.css";

// TODO: Add images for VisualNav once assets are available.
// import chicken from "../assets/images/chicken.png";

const VisualNavSection = () => (
  <section className={section}>
    <VisualNavExternal
      caption="Order Online!"
      href="http://wishbone-108424.square.site/"
    />
    <VisualNav caption="Catering" to="/catering" />
    <VisualNav caption="Upcoming Events" to="/events" />
  </section>
);

export default VisualNavSection;
