import { string } from "prop-types";

import SocialMedia from "./SocialMedia";

import { container, email, phone, streetAddress } from "./Address.module.css";

const Address = ({ address, contactEmail, googleMapsShareLink }) => {
  const splitAddress = address.split(".");

  return (
    <div className={container}>
      <address>
        <a
          className={streetAddress}
          href={`${googleMapsShareLink}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>{splitAddress[0]}</span>
          <span>{splitAddress[1]}</span>
        </a>
      </address>
      <a className={email} href={`mailto:${contactEmail}`}>
        {contactEmail}
      </a>
      <a className={phone} href="tel:1-313-383-9600">
        (313) 383-9600
      </a>
      <SocialMedia />
    </div>
  );
};

Address.propTypes = {
  address: string,
  contactEmail: string,
  googleMapsShareLink: string,
};

export default Address;
