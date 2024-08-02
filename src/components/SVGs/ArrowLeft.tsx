"use client"

import { useRouter } from "next/navigation";

function ArrowLeft({ width = 50 }: { width?: number }) {
    const router = useRouter()
  return (
    <button onClick={() => router.back()} className="stroke-textPrimary-light dark:stroke-textPrimary-dark">
      <svg
        width={width}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M15 7L10 12L15 17"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
}

export default ArrowLeft