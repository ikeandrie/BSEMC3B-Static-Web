import { Post } from "../components/ui/post";
import { MapPinned } from "lucide-react";

const posts = [
  {
    Profile: "/images/garage/profile.jpg",
    IsVideo: false,
    ImgNum: 3,
    img1: "/images/garage/post1/1.jpg",
    img2: "/images/garage/post1/2.jpg",
    img3: "/images/garage/post1/3.jpg",
    Username: "Allen Rosacay Bacalaoloyo",
    Caption: "Ride out bitbit 59as lng ang baon",
    Likes: "57.7k",
    Dislikes: "437",
    Comments: "5602",
  },
  {
    Profile: "/images/garage/profile.jpg",
    IsVideo: true,
    ImgNum: 3,
    img1: "/images/garage/post2/1.mp4",
    img2: "/images/garage/post2/2.jpg",
    img3: "/images/garage/post2/3.jpg",
    Caption: "Drt carribean test drive no change oil 🤣",
    Likes: "57.7k",
    Dislikes: "437",
    Comments: "5602",
  },
];

export const Garage = () => {
  return (
    <main
      id="scrollable"
      className="flex w-full flex-col items-center gap-6 py-28"
    >
      <div className="w-[60rem]">
        <div className="text-[#feeeeee flex h-[16rem] w-full items-center gap-6 rounded-2xl bg-[#242526] px-12 py-6 drop-shadow-lg">
          <div className=" size-[12rem] overflow-hidden rounded-full bg-slate-600">
            <img
              className="h-full w-full object-cover"
              src={posts[0].Profile}
              alt=""
            />
          </div>
          <div className=" flex flex-grow flex-col gap-2">
            <h1 className=" text-4xl font-extrabold text-[#f3f3f3]">
              {posts[0].Username}
            </h1>
            <div className="h-[2px] w-[25rem] rounded-full bg-[#bfbfc0b6]"></div>
            <h2 className="text-2xl font-bold text-[#b6b5b5]">Automatic</h2>
          </div>
          <div className="flex h-full gap-4">
            <div className="size-14 rounded-full bg-slate-400"></div>
            <div className="size-14 rounded-full bg-slate-600"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex h-[55rem] w-[25rem] flex-col gap-16 rounded-2xl bg-[#242526] px-8 py-6 text-white drop-shadow-lg">
          <h1 className="text-2xl font-bold">Intro</h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Ako lang naman siya</h3>
            <div className="w-full cursor-pointer rounded-md bg-[#3a3b3cd3] py-2 text-center text-[#e4e6eb] hover:bg-[#525355]">
              Edit
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <MapPinned size={20} />
              Ako ay nasa Pilipinyas
            </h3>
            <div className="w-full cursor-pointer rounded-md bg-[#3a3b3cd3] py-2 text-center text-[#e4e6eb] hover:bg-[#525355]">
              Edit
            </div>
          </div>
          <div className="mt-20 flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="h-[15rem] w-[10rem] overflow-hidden rounded-lg bg-slate-600">
                <img
                  className="h-full w-full object-cover"
                  src="/images/garage/featured1.jpg"
                  alt=""
                />
              </div>
              <div className="h-[15rem] w-[10rem] overflow-hidden rounded-lg bg-slate-600">
                <img
                  className="h-full w-full object-cover"
                  src="/images/garage/1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full cursor-pointer rounded-md bg-[#3a3b3cd3] py-2 text-center text-[#e4e6eb] hover:bg-[#525355]">
              Edit
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {posts.map((post, index) => {
            return (
              <Post
                profile={post.Profile}
                isVideo={post.IsVideo}
                imgNum={post.ImgNum}
                img1={post.img1}
                img2={post.img2}
                img3={post.img3}
                username={posts[0].Username}
                content={post.Caption}
                likes={post.Likes}
                dislikes={post.Dislikes}
                comments={post.Comments}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};
