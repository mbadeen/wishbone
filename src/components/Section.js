import { string } from "prop-types";

import { article, h1, section } from "./Section.module.css";

const Section = ({ content, title }) => {
  return (
    <section className={section}>
      <header>
        <h1 className={h1}>{title}</h1>
      </header>
      <article className={article}>
        <p>{content}</p>
      </article>
    </section>
  );
};

Section.propTypes = {
  content: string,
  title: string,
};

export default Section;
