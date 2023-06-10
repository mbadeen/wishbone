import mascot from "../assets/images/mascot-light-gray.svg";
import { shape, string } from "prop-types";
import {
  article,
  h1,
  img,
  p,
  section,
} from "./HomePageAboutSection.module.css";

const HomePageAboutSection = ({ homePageTitle, homePageParagraph }) => (
  <section className={section}>
    <h1 className={h1}>{homePageTitle}</h1>
    <article className={article}>
      <img className={img} src={mascot} alt="" />
      <p className={p}>{homePageParagraph.homePageParagraph}</p>
    </article>
  </section>
);

HomePageAboutSection.propTypes = {
  homePageTitle: string,
  homePageParagraph: shape({ homePageParagraph: string }),
};

export default HomePageAboutSection;
