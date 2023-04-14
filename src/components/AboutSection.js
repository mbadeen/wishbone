import mascot from "../assets/images/mascot-light-gray.svg";
// import mascot from "../assets/images/mascot-red.svg";
import { shape, string } from "prop-types";
import { article, h1, img, p, section } from "./AboutSection.module.css";

const AboutSection = ({ aboutTitle, aboutParagraph }) => (
  <section className={section}>
    <article className={article}>
      <img className={img} src={mascot} alt="" />
      <h1 className={h1}>{aboutTitle}</h1>
      <p className={p}>{aboutParagraph.aboutParagraph}</p>
    </article>
  </section>
);

AboutSection.propTypes = {
  aboutTitle: string,
  aboutParagraph: shape({ aboutParagraph: string }),
};

export default AboutSection;
