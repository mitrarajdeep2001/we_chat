function CreateGroup() {
  return (
    <div className="w-10 h-10 rounded-[50%] bg-[#0271da] flex items-center relative fill-white dark:fill-black stroke-white dark:stroke-black">
      <svg
        className="absolute left-2 bottom-2"
        width={20}
        height={20}
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M735.385 336.094c218.24 0 395.977 177.624 395.977 395.976v113.137c0 121.96-56.568 229.78-143.57 302.526 94.13 13.916 187.354 34.959 278.315 64.6 122.414 39.825 204.664 155.676 204.664 288.159v200.364l-26.814 16.63c-148.434 92.32-392.017 202.515-708.572 202.515-174.795 0-439.76-35.186-708.685-202.514L0 1700.856v-189.39c0-140.629 89.264-263.042 221.973-304.79 85.418-26.7 172.533-46.498 260.327-59.509-86.55-72.746-142.891-180.339-142.891-301.96V732.07c0-218.352 177.623-395.976 395.976-395.976ZM1183.405 0c218.24 0 395.976 177.624 395.976 395.977v113.136c0 121.96-56.568 229.893-143.57 302.526 94.13 13.916 187.241 35.072 278.316 64.6 122.413 40.051 204.663 155.79 204.663 288.272v200.364l-26.7 16.631c-77.612 48.31-181.81 101.03-308.183 140.742v-21.723c0-181.696-113.589-340.766-282.727-395.75a1720.133 1720.133 0 0 0-111.553-32.244c35.751-69.805 54.871-147.416 54.871-227.29V732.104c0-250.483-182.036-457.975-420.414-500.175C886.762 95.487 1023.656 0 1183.404 0Z"
            fillRule="evenodd"
          ></path>{" "}
        </g>
      </svg>
      <svg
        width={15}
        height={15}
        className="absolute top-[10px] right-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M6 12H18M12 6V18"
            // stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
}

export default CreateGroup;