import { useStaticQuery, graphql } from "gatsby";

import AltPageHero from "../components/AltPageHero";
import Layout from "../components/Layout";
import Section from "../components/Section";

const Catering = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCateringPage {
        edges {
          node {
            cateringPageMetaTitle
            cateringPageTitle
            cateringPageParagraph {
              cateringPageParagraph
            }
          }
        }
      }
    }
  `);

  const { cateringPageMetaTitle, cateringPageTitle, cateringPageParagraph } =
    data.allContentfulCateringPage.edges[0].node;

  return (
    <Layout pageTitle={cateringPageMetaTitle}>
      <AltPageHero />
      <Section
        title={cateringPageTitle}
        content={cateringPageParagraph.cateringPageParagraph}
      />
    </Layout>
  );
};

export default Catering;
