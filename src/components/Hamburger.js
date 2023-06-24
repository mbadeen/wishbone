import { bool, func } from "prop-types";

import {
  button,
  span,
  topOpen,
  middleOpen,
  bottomOpen,
  topClose,
  bottomClose,
} from "./Hamburger.module.css";

const Hamburger = ({ isOpen, onClick }) => (
  <button
    aria-label="Navigation Menu"
    className={button}
    onClick={onClick}
    type="button"
  >
    <span className={[span, isOpen ? topOpen : topClose].join(" ")} />
    <span className={[span, isOpen ? middleOpen : topClose].join(" ")} />
    <span className={[span, isOpen ? bottomOpen : bottomClose].join(" ")} />
  </button>
);

Hamburger.propTypes = {
  isOpen: bool,
  onClick: func,
};

export default Hamburger;
