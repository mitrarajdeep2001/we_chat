"use client"

import ArrowLeft from "@/components/SVGs/ArrowLeft";
import DisplayPic from "@/components/SVGs/DisplayPic";
import Microphone from "@/components/SVGs/Microphone";
import Plus from "@/components/SVGs/Plus";
import Send from "@/components/SVGs/Send";
import ThreeDotsMenu from "@/components/SVGs/ThreeDotsMenu";
import VideoCall from "@/components/SVGs/VideoCall";
import VoiceCall from "@/components/SVGs/VoiceCall";
import { useState } from "react";

function page() {
  const [msg, setMsg] = useState("");
  return (
    <main
      className="flex flex-col justify-between items-center w-full overflow-hidden"
      style={{ height: "var(--vh)" }}
    >
      <div className="flex items-center justify-between w-full border-b-[1px] border-border-light dark:border-border-dark p-3 bg-foreground-light dark:bg-foreground-dark">
        <div className="flex items-center gap-3 text-textPrimary-light dark:text-textPrimary-dark">
          <ArrowLeft width={30} />
          <DisplayPic width={40} />
          <h5>Rajdeep</h5>
        </div>
        <div className="flex items-center gap-6">
          <VideoCall width={25} />
          <VoiceCall width={25} />
          <ThreeDotsMenu width={20} />
        </div>
      </div>
      <div></div>
      <div className="flex items-center justify-between p-3 w-full">
        <div className="bg-foreground-light dark:bg-foreground-dark rounded-[50%] w-[50px] h-[50px] flex items-center justify-center">
          <Plus width={35} />
        </div>
        <div className="bg-foreground-light dark:bg-foreground-dark p-3 rounded-full w-[65%]">
          <input
            type="text"
            placeholder="Type a message..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="bg-transparent outline-none text-textPrimary-light dark:text-textPrimary-dark placeholder-textSecondary-light dark:placeholder:text-textSecondary-dark"
          />
        </div>
        <div className="bg-primary-light dark:bg-primary-dark rounded-[50%] w-[50px] h-[50px] flex items-center justify-center">
          {msg.length > 0 ? <Send width={35} /> : <Microphone width={25} />}
        </div>
      </div>
    </main>
  );
}

export default page;
