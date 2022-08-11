import React from "react";

const ICON_HEIGHT = 18;
const ICON_WIDTH = 18;

const IconSearch = (props) => {
  const { className } = props;
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      height={ICON_HEIGHT}
      width={ICON_WIDTH}
    >
      <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
        <circle cx={5.92} cy={5.92} r={5.42} />
        <path d="M13.5 13.5 9.75 9.75" />
      </g>
    </svg>
  );
};

export default IconSearch;
