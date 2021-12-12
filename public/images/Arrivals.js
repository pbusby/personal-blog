import * as React from "react";

const SvgArrivals = (props) => (
  <svg
    height={27}
    width={27}
    viewBox="0 0 600 600"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M82.432 17.924c-41.335 0-64.571 21.37-64.571 65.036v450.122c0 40.843 20.89 62.228 62.192 62.228h452.024c41.303 0 62.226-20.32 62.226-62.228V82.96c0-42.6-20.923-65.036-63.523-65.036 0 0-448.491-.142-448.348 0z"
      style={{
        stroke: "#fff",
        strokeWidth: 3.408,
        fill: props.theme.text,
        transition: "all 0.50s linear"
      }}
    />
    <path
      d="M510.196 147.392c29.155-29.153-11.17-67.267-39.954-38.479L363.941 215.212 120.423 150.84l-40.595 40.596L280.536 297.14l-81.174 81.174-63.107-7.749-32.106 32.105 71.595 37.643 37.643 71.595 32.105-32.107-7.38-62.737 81.174-81.175L422.723 535.28l40.594-40.596L401.691 256.1l108.505-108.708z"
      style={{
        stroke: "none",
        fill: props.theme.body,
        transition: "all 0.50s linear"
      }}
    />
  </svg>
);

export default SvgArrivals;