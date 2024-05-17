import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import { Post } from "../components/ui/post";
import { Users } from "../lib/users";

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

export const Landing = () => {
  const [currentPage, setCurrentPage] = useState("onHome");

  const renderPage = () => {
    switch (currentPage) {
      case "onOutlet":
        return <Outlet />;
      case "onHome":
        const numOfPosts = 5;
        const posts = Array.from({ length: numOfPosts }, (_, index) => (
          <Post key={index} />
        ));

        return (
          <main
            id="scrollable"
            className="flex w-full flex-col items-center gap-4 py-20"
          >
            {Users.map((user, index) => {
              return (
                <Post
                  key={index}
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
        <div className="flex gap-2 font-medium">
          <button
            onClick={() => setCurrentPage("onOutlet")}
            className="flex items-center rounded-md bg-[#3a3b3c] px-6 py-1 text-sm text-[#e4e6eb] hover:bg-[#525355]"
          >
            <Bell size={18} />
          </button>
          {pageLink(tabs[2].Link, tabs[2].Text, "onOutlet")}
        </div>
      </header>

      {renderPage()}
    </>
  );
};
