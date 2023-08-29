import { IIcon } from "./types";

const DroneIcon = ({ width, height, color='currentColor', strokeWidth="1"}: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    aria-hidden="true"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 10h4v4h-4zM10 10L6.5 6.5M9.96 6A3.5 3.5 0 106 9.96M14 10l3.5-3.5M18 9.96A3.5 3.5 0 1014.04 6M14 14l3.5 3.5M14.04 18A3.5 3.5 0 1018 14.04M10 14l-3.5 3.5M6 14.04A3.5 3.5 0 109.96 18" />
  </svg>
);

export default DroneIcon;
