import Hero from "../components/Hero";
import HomeArticle from "../components/HomeArticle";
import Layout from "../components/Layout";

import { parallax, visualNavSection, welcomeSection } from "./Home.module.css";
import VisualNav from "../components/VisualNav";

// import chicken from "../assets/images/chicken.png";

const Home = () => (
  <Layout pageTitle="Wishbone Broasted Chicken">
    <Hero />
    <div className={parallax} />
    <section className={welcomeSection}>
      <HomeArticle />
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

export default Home;
