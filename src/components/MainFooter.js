import { useStaticQuery, graphql } from "gatsby";

import Address from "./Address";
import OperationalHours from "./OperationalHours";

import logo from "../assets/images/logo3-white.svg";

import { footer, container, img, section } from "./MainFooter.module.css";

const MainFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            address
            contactEmail
            googleMapsShareLink
          }
        }
      }
    }
  `);

  const { address, contactEmail, googleMapsShareLink } =
    data.allContentfulHomePage.edges[0].node;

  return (
    <footer className={footer}>
      <section className={section}>
        <img className={img} src={logo} alt="" />
        <div className={container}>
          <OperationalHours />
          <Address
            address={address}
            contactEmail={contactEmail}
            googleMapsShareLink={googleMapsShareLink}
          />
        </div>
      </section>
    </footer>
  );
};

export default MainFooter;
