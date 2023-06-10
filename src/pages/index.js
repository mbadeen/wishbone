import { useStaticQuery, graphql } from "gatsby";

import Hero from "../components/Hero";
import HomePageAboutSection from "../components/HomePageAboutSection";
import Layout from "../components/Layout";

import { parallax } from "./Home.module.css";
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
      <div className={parallax} />
      <HomePageAboutSection
        homePageTitle={homePageTitle}
        homePageParagraph={homePageParagraph}
      />
      <div className={parallax} />
      <VisualNavSection />
      <div className={parallax} />
    </Layout>
  );
};

export default Home;
