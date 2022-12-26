import Layout from "../components/Layout";
import W from "../assets/images/w.svg";
import Logo from "../assets/images/logo.svg";
import FacebookIcon from "../assets/images/facebook.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import LinkedInIcon from "../assets/images/linkedin.svg";

import { footer, header, h1, img, logo } from "./Home.module.css";

const Home = () => (
  <Layout pageTitle="Wishbone Broasted Chicken">
    <header className={header}>
      <img className={logo} src={Logo} alt="wishone restaurant logo" />
      <h1 className={h1}>
        <img className={img} src={W} alt="letter w" />
        ishbone
      </h1>
    </header>
    <article>
      <p>
        Wishbone Broasted Chicken will be temporarily closed for renovations.
      </p>
      <p>
        Please check back for the latest news and updates! We look forward to
        serving you again soon!
      </p>
    </article>
    <footer className={footer}>
      <a
        href="https://www.facebook.com/WishboneFamousBroastedChicken/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={FacebookIcon} alt="facebook icon" />
      </a>
      <a
        href="https://www.instagram.com/wishbonefamouschicken/?hl=en"
        rel="noreferrer"
        target="_blank"
      >
        <img src={InstagramIcon} alt="instagram icon" />
      </a>
      <a
        href="https://www.linkedin.com/company/originalwishboneallenpark/about/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={LinkedInIcon} alt="linkedin icon" />
      </a>
    </footer>
  </Layout>
);

export default Home;
