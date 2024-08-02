import React from "react";
import chatsData from "@/DummyData/chats.json";
import convertTimestamp from "@/utils/convertTimestamp";
import DisplayPic from "./SVGs/DisplayPic";
import Link from "next/link";

function Chats() {
  return (
    <div className="flex flex-col gap-5 mx-5 mb-20">
      {chatsData.map((chat) => (
        <Link href={`/chat/${chat._id}`} key={chat._id}>
          <div className="flex gap-4 items-center" key={chat._id}>
            <div className="w-[20%]">
              <DisplayPic />
            </div>

            <div className="w-[80%]">
              <div className="flex justify-between w-full">
                <h5 className="font-bold text-textPrimary-light dark:text-textPrimary-dark">
                  {chat.display_name}
                </h5>
                <h6 className="text-textSecondary-light dark:text-textSecondary-dark text-xs font-medium">
                  {convertTimestamp(chat.created_at)}
                </h6>
              </div>

              <div className="flex justify-between w-full">
                {!chat.is_typing ? (
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-bold">
                    {chat.last_msg.length > 30
                      ? chat.last_msg
                      : chat.last_msg.slice(0, 30) + "..."}
                  </p>
                ) : (
                  <p className="text-primary-light dark:text-primary-dark font-bold text-xs">
                    Typing...
                  </p>
                )}
                <span className="w-4 h-4 rounded-[50%] bg-primary-light dark:bg-primary-dark text-white text-xs flex justify-center items-center">
                  5
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Chats;
