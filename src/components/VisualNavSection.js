import VisualNav from "../components/VisualNav";
import VisualNavExternal from "../components/VisualNavExternal";

import { section } from "./VisualNavSection.module.css";

import chicken from "../assets/images/chicken.png";
import salad from "../assets/images/salad.png";
import ribs from "../assets/images/ribs.png";

const VisualNavSection = () => (
  <section className={section}>
    <VisualNavExternal
      caption="Order Online!"
      imgSrc={ribs}
      href="http://wishbone-108424.square.site/"
    />
    <VisualNav caption="Catering" imgSrc={chicken} to="/catering" />
    <VisualNav caption="Upcoming Events" imgSrc={salad} to="/events" />
  </section>
);

export default VisualNavSection;
