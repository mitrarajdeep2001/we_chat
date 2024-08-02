
function VideoCall({width = 30} : {width?: number}) {
  return (
    <div className="fill-primary-light dark:fill-primary-dark">
      <svg
      width={width}
        viewBox="0 0 1024 1024"
        className="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M170.666667 256h469.333333c46.933333 0 85.333333 38.4 85.333333 85.333333v341.333334c0 46.933333-38.4 85.333333-85.333333 85.333333H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333333V341.333333c0-46.933333 38.4-85.333333 85.333334-85.333333z"
          ></path>
          <path
            d="M938.666667 746.666667l-213.333334-128V405.333333l213.333334-128z"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default VideoCall