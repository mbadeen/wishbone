import { useStaticQuery, graphql } from "gatsby";

import AltPageHero from "../components/AltPageHero";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Seo from "../components/SEO";

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEventsPage {
        edges {
          node {
            eventsPageMetaTitle
            eventsPageTitle
            eventsPageParagraph {
              eventsPageParagraph
            }
          }
        }
      }
    }
  `);

  const { eventsPageMetaTitle, eventsPageTitle, eventsPageParagraph } =
    data.allContentfulEventsPage.edges[0].node;

  return (
    <Layout pageTitle={eventsPageMetaTitle}>
      <AltPageHero />
      <Section
        title={eventsPageTitle}
        content={eventsPageParagraph.eventsPageParagraph}
      />
    </Layout>
  );
};

export default Events;

export const Head = () => <Seo />;
