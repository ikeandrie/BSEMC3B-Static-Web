import { Post } from "../../components/ui/post";
import { Users } from "../../lib/users";

export const Kapwa = () => {
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
              src={Users[0].Profile}
              alt=""
            />
          </div>
          <div className=" flex flex-grow flex-col gap-2">
            <h1 className=" text-4xl font-extrabold text-[#f3f3f3]">
              🤡 {Users[0].Username}
            </h1>
            <div className="h-[2px] w-[25rem] rounded-full bg-[#bfbfc0b6]"></div>
            <h2 className="text-2xl font-bold text-[#b6b5b5]">
              Automatic Semplang 😵
            </h2>
          </div>
          <div className="flex h-full gap-4">
            <div className="size-14 rounded-full bg-slate-400"></div>
            <div className="size-14 rounded-full bg-slate-600"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-10">
          <Post
            profile={Users[0].Profile}
            isVideo={Users[0].IsVideo}
            imgNum={Users[0].ImgNum}
            img1={Users[0].img1}
            img2={Users[0].img2}
            img3={Users[0].img3}
            username={Users[0].Username}
            content={Users[0].Caption}
            likes={Users[0].Likes}
            dislikes={Users[0].Dislikes}
            comments={Users[0].Comments}
          />
        </div>
      </div>
    </main>
  );
};
