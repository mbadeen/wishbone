import { useStaticQuery, graphql } from "gatsby";

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Layout from "../components/Layout";

import { parallax } from "./Home.module.css";
import VisualNavSection from "../components/VisualNavSection";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            aboutTitle
            aboutParagraph {
              aboutParagraph
            }
          }
        }
      }
    }
  `);

  const { aboutTitle, aboutParagraph } =
    data.allContentfulHomePage.edges[0].node;

  return (
    <Layout pageTitle="Wishbone Broasted Chicken">
      <Hero />
      <div className={parallax} />
      <AboutSection aboutTitle={aboutTitle} aboutParagraph={aboutParagraph} />
      <div className={parallax} />
      <VisualNavSection />
      <div className={parallax} />
    </Layout>
  );
};

export default Home;
