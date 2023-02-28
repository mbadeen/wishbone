import FacebookIcon from "../assets/images/facebook.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import LinkedInIcon from "../assets/images/linkedin.svg";

import { img, section } from "./SocialMedia.module.css";

const SocialMedia = () => (
  <section className={section}>
    <a
      href="https://www.facebook.com/WishboneFamousBroastedChicken/"
      rel="noreferrer"
      target="_blank"
    >
      <img className={img} src={FacebookIcon} alt="facebook icon" />
    </a>
    <a
      href="https://www.instagram.com/wishbonefamouschicken/?hl=en"
      rel="noreferrer"
      target="_blank"
    >
      <img className={img} src={InstagramIcon} alt="instagram icon" />
    </a>
    <a
      href="https://www.linkedin.com/company/originalwishboneallenpark/about/"
      rel="noreferrer"
      target="_blank"
    >
      <img className={img} src={LinkedInIcon} alt="linkedin icon" />
    </a>
  </section>
);

export default SocialMedia;
