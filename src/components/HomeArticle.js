// import mascot from "../assets/images/mascot-light-gray.svg";

import { article, img, h1, p } from "./HomeArticle.module.css";

const HomeArticle = () => (
  <article className={article}>
    {/* <img className={img} src={mascot} alt="" /> */}
    <h1 className={h1}>Welcome!</h1>
    <p className={p}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa
      placerat duis ultricies lacus sed turpis tincidunt. At augue eget arcu
      dictum varius duis. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt.
      At augue eget arcu dictum varius duis!
    </p>
  </article>
);

export default HomeArticle;
