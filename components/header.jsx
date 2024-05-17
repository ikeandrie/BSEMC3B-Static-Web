import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";

const tabs = [
  {
    Link: "/",
    Text: "Home",
  },
  {
    Link: "/store",
    Text: "Store",
  },
  {
    Link: "/notifications",
    Text: "notification",
  },
  {
    Link: "/garage",
    Text: "Garage",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 flex h-16 w-full items-center justify-between bg-white px-32 text-[.95rem] font-normal drop-shadow-2xl">
      <div className="flex items-center">
        <img className="mt-10 size-36" src="/logo.png" alt="" />
        <div className="-ml-2 flex h-10 w-[15rem] items-center gap-4 rounded-xl bg-[#f1f1f2] px-4">
          <Search size={20} className="text-[#a8a8b0]" />
          <span className="text-[#a8a8b0]">Search motors</span>
        </div>
      </div>
      <div className="flex gap-2 font-medium">
        {tabs.slice(0, 2).map((tab, index) => {
          return (
            <Link
              key={index}
              className="items-center rounded-md bg-[#f1f1f2] px-6 py-2 hover:bg-[#d4d4d6]"
              to={tab.Link}
            >
              {tab.Text}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-2 font-medium">
        <Link
          className="relative flex items-center rounded-md bg-[#f1f1f2] px-4 py-2 hover:bg-[#d4d4d6]"
          to={tabs[2].Link}
        >
          <Bell size={20} />
          <div className="absolute"></div>
        </Link>
        <Link
          className="items-center rounded-md bg-[#f1f1f2] px-6 py-2 hover:bg-[#d4d4d6]"
          to={tabs[3].Link}
        >
          {tabs[3].Text}
        </Link>
      </div>
    </header>
  );
};
