import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import Section from "../components/Section";

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
      <Section
        title={eventsPageTitle}
        content={eventsPageParagraph.eventsPageParagraph}
      />
    </Layout>
  );
};

export default Events;
