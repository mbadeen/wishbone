import { shape, arrayOf, string } from "prop-types";

import { div, dl, dt, dd } from "./OperationalHours.module.css";

const OperationalHours = ({ operationalHours }) => (
  <dl className={dl}>
    {operationalHours.map(({ day, hours }) => (
      <div key={day} className={div}>
        <dt className={dt}>{day}</dt>
        <dd className={dd}>{hours}</dd>
      </div>
    ))}
  </dl>
);

OperationalHours.propTypes = {
  operationalHours: arrayOf(shape({ day: string, hours: string })),
};

export default OperationalHours;
