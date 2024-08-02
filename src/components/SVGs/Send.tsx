
function Send({width = 24} : {width?: number}) {
  return (
    <div className="stroke-white">
      <svg width={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
}

export default Send