import VisualNav from "../components/VisualNav";

// import { container, h2, p, section } from "./VisualNavSection.module.css";
import { section } from "./VisualNavSection.module.css";

// TODO: Add images for VisualNav once assets are available.
// import chicken from "../assets/images/chicken.png";

const VisualNavSection = () => (
  <section className={section}>
    {/* <h2 className={h2}>Order online!</h2>
    <p className={p}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa
      placerat duis ultricies lacus sed turpis tincidunt. At augue eget arcu
      dictum varius duis.
    </p> */}

    {/* <section className={container}> */}

    <VisualNav caption="Catering" to="/catering" />
    <VisualNav caption="Order Online!" to="#" />
    <VisualNav caption="Upcoming Events" to="/events" />
    {/* </section> */}
  </section>
);

export default VisualNavSection;
