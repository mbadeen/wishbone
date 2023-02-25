import SocialMedia from "./SocialMedia";

import { section, anchor } from "./Contact.module.css";

const Contact = () => (
  <section className={section}>
    <a className={anchor} href="tel:1-313-383-9600">
      (313) 383-9600
    </a>
    <SocialMedia />
  </section>
);

export default Contact;
