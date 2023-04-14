import { useStaticQuery, graphql } from "gatsby";

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Layout from "../components/Layout";

import { parallax, visualNavSection } from "./Home.module.css";
import VisualNav from "../components/VisualNav";

// TODO: Add images for VisualNav once assets are available.
// import chicken from "../assets/images/chicken.png";

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
      <section className={visualNavSection}>
        <VisualNav caption="Check out our menu!" to="#" />
        <VisualNav caption="Place your order online!" to="#" />
        <VisualNav caption="We offer catering!" to="#" />
      </section>
      <div className={parallax} />
    </Layout>
  );
};

export default Home;
