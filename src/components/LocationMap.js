import { figcaption, iframe } from "./LocationMap.module.css";

const LocationMap = () => (
  <figure>
    <iframe
      allowFullScreen
      className={iframe}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.0419613893673!2d-83.22770578400075!3d42.25627644964094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b366bbbe6aaab%3A0xe1f7a1ac5960169f!2s18617%20Ecorse%20Rd%2C%20Allen%20Park%2C%20MI%2048101!5e0!3m2!1sen!2sus!4v1679165231626!5m2!1sen!2sus"
      title="Wishbone Map"
    />
    <figcaption className={figcaption}>
      <address>18617 Ecorse Rd, Allen Park, MI 48101</address>
    </figcaption>
  </figure>
);

export default LocationMap;
