import { string } from "prop-types";

import { anchor, img, overlay, p } from "./VisualNav.module.css";

const VisualNavExternal = ({ caption, imgSrc, href }) => (
  <a className={anchor} href={href}>
    <img className={img} src={imgSrc} alt="" />
    <div className={overlay}>
      <p className={p}>{caption}</p>
    </div>
  </a>
);

VisualNavExternal.propTypes = {
  caption: string,
  imgSrc: string,
  href: string,
};

export default VisualNavExternal;
