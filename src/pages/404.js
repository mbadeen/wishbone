import { useStaticQuery, graphql, Link } from "gatsby";

import hero from "../assets/images/logo2-white.svg";

import { article, img, link, section } from "./404.module.css";

const NoMatch = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNoMatchPage {
        edges {
          node {
            noMatchPageMetaTitle
            noMatchPageTitle
            noMatchPageParagraph {
              noMatchPageParagraph
            }
          }
        }
      }
    }
  `);

  const { noMatchPageMetaTitle, noMatchPageTitle, noMatchPageParagraph } =
    data.allContentfulNoMatchPage.edges[0].node;
  return (
    <>
      <title>{noMatchPageMetaTitle}</title>
      <section className={section}>
        <img className={img} src={hero} alt="Wishbone Logo" />
        <article className={article}>
          <h1>{noMatchPageTitle}</h1>
          <p>{noMatchPageParagraph.noMatchPageParagraph}</p>
        </article>
        <Link className={link} to="/">
          Back to Homepage
        </Link>
      </section>
    </>
  );
};

export default NoMatch;
