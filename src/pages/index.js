import { useStaticQuery, graphql } from "gatsby";

import Hero from "../components/Hero";
import HomePageAboutSection from "../components/HomePageAboutSection";
import Layout from "../components/Layout";
import Parallax from "../components/Parallax";

import chicken from "../assets/images/chicken.png";

import VisualNavSection from "../components/VisualNavSection";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            homePageMetaTitle
            homePageTitle
            homePageParagraph {
              homePageParagraph
            }
          }
        }
      }
    }
  `);

  const { homePageMetaTitle, homePageTitle, homePageParagraph } =
    data.allContentfulHomePage.edges[0].node;

  return (
    <Layout pageTitle={homePageMetaTitle}>
      <Hero />
      <Parallax backgroundUrl={chicken} />
      <HomePageAboutSection
        homePageTitle={homePageTitle}
        homePageParagraph={homePageParagraph}
      />
      <Parallax backgroundUrl={chicken} />
      <VisualNavSection />
      <Parallax backgroundUrl={chicken} />
    </Layout>
  );
};

export default Home;
