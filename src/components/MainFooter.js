import { useStaticQuery, graphql } from "gatsby";

import Address from "./Address";
import OperationalHours from "./OperationalHours";

import logo from "../assets/images/logo3-white.svg";

import { footer, container, img, section } from "./MainFooter.module.css";

// TODO: Add 'email' property back under address property
const MainFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMainFooter {
        edges {
          node {
            address
            googleMapsUrl
            operationalHours {
              day
              hours
            }
          }
        }
      }
    }
  `);

  // TODO: Add 'email' property back
  const { address, googleMapsUrl, operationalHours } =
    data.allContentfulMainFooter.edges[0].node;

  return (
    <footer className={footer}>
      <section className={section}>
        <img className={img} src={logo} alt="" />
        <div className={container}>
          <OperationalHours operationalHours={operationalHours} />
          <Address
            address={address}
            // contactEmail={email}
            googleMapsUrl={googleMapsUrl}
          />
        </div>
      </section>
    </footer>
  );
};

export default MainFooter;
