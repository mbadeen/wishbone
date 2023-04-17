import { div, dl, dt, dd } from "./OperationalHours.module.css";

const hoursOfOperation = [
  {
    day: "Monday",
    hours: "1:00pm - 8:00pm",
  },
  {
    day: "Tuesday",
    hours: "1:00pm - 8:00pm",
  },
  {
    day: "Wednesday",
    hours: "1:00pm - 8:00pm",
  },
  {
    day: "Thursday",
    hours: "1:00pm - 8:00pm",
  },
  {
    day: "Friday",
    hours: "1:00pm - 8:00pm",
  },
  {
    day: "Saturday",
    hours: "1:00pm - 8:00pm",
  },
  {
    day: "Sunday",
    hours: "1:00pm - 8:00pm",
  },
];

const OperationalHours = () => (
  <dl className={dl}>
    {hoursOfOperation.map(({ day, hours }) => (
      <div key={day} className={div}>
        <dt className={dt}>{day}</dt>
        <dd className={dd}>{hours}</dd>
      </div>
    ))}
  </dl>
);

export default OperationalHours;
