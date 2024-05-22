import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import { Post } from "../components/ui/post";
import { Users } from "../lib/users";
import { EllipsisVertical } from "lucide-react";

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
    Link: "/garage",
    Text: "Garage",
  },
];

const notifications = [
  {
    Profile: Users[3].Profile,
    Username: Users[3].Username,
    Message: "You have a new message",
    Text: "You have received a new message.",
  },
  {
    Profile: Users[1].Profile,
    Username: Users[1].Username,
    Message: "User wants to trade with you",
    Text: "A user wants to trade items with you.",
  },
  {
    Profile: Users[4].Profile,
    Username: Users[4].Username,
    Message: "You have a new message",
    Text: "You have received a new message.",
  },
  {
    Profile: Users[5].Profile,
    Username: Users[5].Username,
    Message: "User suggested a joy ride",
    Text: "A user has suggested going on a joy ride.",
  },
  {
    Profile: Users[2].Profile,
    Username: Users[2].Username,
    Message: "User started following you",
    Text: "A user has started following you.",
  },
];

export const Landing = () => {
  const [currentPage, setCurrentPage] = useState("onHome");
  const [isHovered, setIsHovered] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "onOutlet":
        return <Outlet />;
      case "onHome":
        return (
          <main
            id="scrollable"
            className="flex w-full flex-col items-center gap-4 py-20"
          >
            {Users.map((user, index) => {
              return (
                <>
                  <Post
                    key={index}
                    onClick={() => setCurrentPage("onOutlet")}
                    profile={user.Profile}
                    isVideo={user.IsVideo}
                    imgNum={user.ImgNum}
                    img1={user.img1}
                    img2={user.img2}
                    img3={user.img3}
                    img4={user.img4}
                    username={user.Username}
                    content={user.Caption}
                    likes={user.Likes}
                    dislikes={user.Dislikes}
                    comments={user.Comments}
                  />
                </>
              );
            })}
          </main>
        );
    }
  };

  function pageLink(route, page, state, index) {
    return (
      <Link
        key={index}
        className="flex h-8 items-center rounded-md bg-[#3a3b3c] px-6 text-sm font-light text-[#e4e6eb] hover:bg-[#525355]"
        to={route}
        onClick={() => setCurrentPage(state)}
      >
        {page}
      </Link>
    );
  }

  return (
    <>
      <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-[#242526] px-32 text-[.95rem] font-normal drop-shadow-lg">
        <div className="flex items-center">
          <img className="mt-16 size-52" src="/logo.png" alt="" />
        </div>
        <div className="flex items-center gap-2 font-medium">
          {pageLink(tabs[0].Link, tabs[0].Text, "onHome")}
          {pageLink(tabs[1].Link, tabs[1].Text, "onOutlet")}
          <div className=" ml-5 flex h-8 w-[15rem] cursor-pointer items-center gap-2 rounded-lg bg-[#3a3b3c] px-4 text-sm font-light hover:bg-[#565758]">
            <Search size={18} className="text-white/40" />
            <span className="font-light text-white/40">Search motors</span>
          </div>
        </div>
        <div className="flex items-center gap-2 font-medium">
          <button
            onClick={() => setIsHovered(!isHovered)}
            className="relative flex items-center rounded-md bg-[#3a3b3c] px-4 py-2 text-sm text-[#e4e6eb] hover:bg-[#525355]"
          >
            <Bell size={18} />
            <div
              className={`${isHovered ? "block" : "hidden"} absolute right-0 top-12 flex w-[30rem] flex-col gap-4 rounded-md bg-[#3a3b3c] px-8 py-6 transition-all duration-500`}
            >
              {notifications.map((notif, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-14 overflow-hidden rounded-full bg-slate-600">
                        <img
                          className="h-full w-full bg-center object-cover"
                          src={notif.Profile}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-md font-light">
                          {notif.Username}: {notif.Message}{" "}
                        </span>
                        <p className=" text-start">{notif.Text}</p>
                      </div>
                    </div>
                    <div className="-mr-3 flex cursor-pointer items-center justify-center rounded-full text-white hover:bg-[#3a3b3c]">
                      <EllipsisVertical size={25} />
                    </div>
                  </div>
                );
              })}
            </div>
          </button>
          {pageLink(tabs[2].Link, tabs[2].Text, "onOutlet")}
        </div>
      </header>

      {renderPage()}
    </>
  );
};
