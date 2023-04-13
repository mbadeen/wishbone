// import mascot from "../assets/images/mascot-light-gray.svg";
import mascot from "../assets/images/mascot-red.svg";
import { shape, string } from "prop-types";
import { article, h1, img, p } from "./HomeArticle.module.css";

const HomeArticle = ({ aboutTitle, aboutParagraph }) => (
  <article className={article}>
    <h1 className={h1}>{aboutTitle}</h1>
    <p className={p}>{aboutParagraph.aboutParagraph}</p>
    <img className={img} src={mascot} alt="" />
  </article>
);

HomeArticle.propTypes = {
  aboutTitle: string,
  aboutParagraph: shape({ aboutParagraph: string }),
};

export default HomeArticle;
