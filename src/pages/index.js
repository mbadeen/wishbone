import { useStaticQuery, graphql } from "gatsby";

import Hero from "../components/Hero";
import HomeArticle from "../components/HomeArticle";
import Layout from "../components/Layout";

import { parallax, visualNavSection, welcomeSection } from "./Home.module.css";
import VisualNav from "../components/VisualNav";

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
      <section className={welcomeSection}>
        <HomeArticle aboutTitle={aboutTitle} aboutParagraph={aboutParagraph} />
      </section>
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
