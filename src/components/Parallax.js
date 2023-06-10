import { string } from "prop-types";

import { parallax } from "./Parallax.module.css";

const Parallax = ({ backgroundUrl }) => {
  const backgroundImage = { backgroundImage: `url(${backgroundUrl})` };

  return <div className={parallax} style={backgroundImage} />;
};

Parallax.propTypes = {
  backgroundUrl: string,
};

export default Parallax;
