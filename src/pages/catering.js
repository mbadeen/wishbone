import { useStaticQuery, graphql } from "gatsby";

import AltPageHero from "../components/AltPageHero";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Seo from "../components/SEO";

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

export const Head = () => (
  <Seo description="Wishbone Broasted Chicken offer catering services of all sizes. Please check out our menu and give us a call at: (313) 383-9600. We will need 48 hours in advance for all catering orders. We appreciate your patience and look forward to serving you!" />
);
