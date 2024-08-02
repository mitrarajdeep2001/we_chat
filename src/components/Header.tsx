"use client";

import { useRouter } from "next/navigation";
import BackBtn from "./SVGs/BackBtn";
import Search from "./SVGs/Search";

function Header({
  title,
  description,
  searchEnabled,
}: {
  title: string;
  description: string;
  searchEnabled: boolean;
}) {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center px-3 h-[60px] border-solid border-0 border-b-[1px] border-border-light dark:border-border-dark dark:text-textPrimary-dark text-textPrimary-light">
      <div className="flex items-center gap-10">
        <button onClick={() => router.back()}>
          <BackBtn />
        </button>
        <div>
          <h5 className="font-bold">{title}</h5>
          <h6 className="text-textSecondary-light dark:text-textSecondary-dark text-xs">
            {description}
          </h6>
        </div>
      </div>
      {searchEnabled && <Search />}
    </div>
  );
}

export default Header;
