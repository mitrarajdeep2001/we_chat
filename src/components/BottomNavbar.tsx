"use client";

import getHapticFeedback from "@/utils/getHapticFeedback";
import AddToContact from "./SVGs/AddToContact";
import Call from "./SVGs/Call";
import Chat from "./SVGs/Chat";
import Gallery from "./SVGs/Gallery";
import Profile from "./SVGs/Profile";
import Link from "next/link";

function BottomNavbar() {
  return (
    <div className="flex items-center fixed bottom-0 left-0 right-0 px-5 h-[70px] bg-foreground-light dark:bg-foreground-dark w-full justify-between">
      <div className="flex gap-14">
        <div className="flex flex-col items-center">
          <Chat active={true} />
          <h5 className="text-textPrimary-light dark:text-textPrimary-dark font-bold text-xs">Chat</h5>
        </div>
        <div className="flex flex-col items-center">
          <Call active={false} />
          <h5 className="text-textPrimary-light dark:text-textPrimary-dark font-bold text-xs">Call</h5>
        </div>
      </div>
      <Link href="/contact">
        <button
          onClick={() => getHapticFeedback([80])}
          className="flex rounded-[50%] w-[70px] border-none bg-foreground-light dark:bg-[#060e11] add-to-contact-btn"
        >
          <AddToContact />
        </button>
      </Link>
      <div className="flex gap-12">
        <div className="flex flex-col items-center">
          <Gallery active={false} />
          <h5 className="text-textPrimary-light dark:text-textPrimary-dark font-bold text-xs">Gallery</h5>
        </div>
        <div className="flex flex-col items-center">
          <Profile active={false} />
          <h5 className="text-textPrimary-light dark:text-textPrimary-dark font-bold text-xs">Profile</h5>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
