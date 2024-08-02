"use client";

import Image from "next/image";
import myImg from "../../public/my-pic.jpg";
import Plus from "./SVGs/Plus";
import storiesData from "@/DummyData/stories.json";

function Stories() {
  // Generate random color
  function generateRandomColor() {
    let color;
    do {
      color =
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
    } while (color === "#000000" || color === "#ffffff");
    return color;
  }

  // Generate random gradient
  function generateRandomGradient() {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    return `linear-gradient(90deg, ${color1}, ${color2})`;
  }

  return (
    <div className="mt-5 ml-5">
      <h5 className="text-textPrimary-light dark:text-textPrimary-dark font-bold uppercase text-sm">
        Recent Updates
      </h5>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide mt-2 hide-scrollbar">
        {storiesData.map((story) => (
          <div className="flex flex-col gap-2 items-center relative" key={story._id}>
            <div
              style={{
                background: generateRandomGradient(),
                borderRadius: "50%",
                padding: "4px",
                position: "relative",
              }}
            >
              <Image
                className="rounded-[50%] w-[70px] h-[70px] object-cover max-w-none"
                src={myImg}
                alt="my pic"
                priority
              />
            </div>
            {story._id === 0 && <div className="absolute right-2 bottom-6 text-textPrimary-light dark:text-textPrimary-dark bg-blue-600 w-[20px] h-[20px] flex justify-center items-center rounded-[50%]">
              <Plus color={"#ffffff"} />
            </div>}
            <h6 className="text-textPrimary-light dark:text-textPrimary-dark text-xs font-bold">{story._id === 0 ? "My Status" : story.display_name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
