import { EllipsisVertical, Share2, Heart, MessageSquare } from "lucide-react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Post = ({
  onClick,
  profile,
  isVideo,
  imgNum,
  img1,
  img2,
  img3,
  img4,
  username,
  content,
  likes,
  dislikes,
  comments,
}) => {
  return (
    <div className="flex w-[55rem] flex-col gap-6 rounded-lg bg-[#242526] p-6 text-white drop-shadow-lg">
      <div className="flex h-[30rem] justify-center gap-6">
        {imgNum >= 1 && (
          <div className="flex flex-col gap-3">
            <div className="h-full w-[23.5rem] overflow-hidden rounded-[4px] bg-slate-400 bg-center bg-no-repeat">
              {isVideo ? (
                <video
                  className="h-full w-full object-cover"
                  src={img1}
                  controls
                />
              ) : (
                <img className="h-full w-full object-cover" src={img1} alt="" />
              )}
            </div>
            {imgNum === 2 && (
              <div className="h-full w-[23.5rem] overflow-hidden rounded-[4px] bg-slate-400 bg-center bg-no-repeat">
                <img className="h-full w-full object-cover" src={img2} alt="" />
              </div>
            )}
            {imgNum >= 3 && (
              <div className="flex gap-2">
                <div
                  className={`h-[8rem] ${imgNum === 3 ? "w-[50%]" : "w-[7.5rem]"} overflow-hidden rounded-md bg-slate-400 bg-center bg-no-repeat`}
                >
                  <img
                    className="h-full w-full object-cover"
                    src={img2}
                    alt=""
                  />
                </div>
                <div
                  className={`h-[8rem] ${imgNum === 3 ? "w-[50%]" : "w-[7.5rem]"} overflow-hidden rounded-md bg-slate-400 bg-center bg-no-repeat`}
                >
                  <img
                    className="h-full w-full object-cover"
                    src={img3}
                    alt=""
                  />
                </div>
                {imgNum === 4 && (
                  <div className="h-[8rem] w-[7.5rem] overflow-hidden rounded-md bg-slate-400 bg-center bg-no-repeat">
                    <img
                      className="h-full w-full object-cover"
                      src={img4}
                      alt=""
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className={`${imgNum === 0 ? "w-[70%]" : "w-full"} h-full py-6`}>
          <div className="flex items-center gap-4">
            <div className="size-14 overflow-hidden rounded-full bg-center">
              <img
                className="h-full w-full bg-center object-cover"
                src={profile}
                alt=""
              />
            </div>
            <span className="flex flex-grow flex-col gap-[.1rem]">
              <Link to="/users/@kapwa" onClick={onClick}>
                {username}
              </Link>
              <span className="text-[.75rem] text-white/60">May 5, 2024</span>
            </span>
            <div className="-mr-4 flex items-center gap-1">
              <div className="flex size-10 cursor-pointer items-center justify-center rounded-full text-red-500 hover:bg-[#3a3b3c]">
                <Heart size={23} />
              </div>
              <div className="flex size-10 cursor-pointer items-center justify-center rounded-full text-sky-500 hover:bg-[#3a3b3c]">
                <Share2 size={23} />
              </div>
              <div className="flex size-10 cursor-pointer items-center justify-center rounded-full text-white hover:bg-[#3a3b3c]">
                <EllipsisVertical size={27} />
              </div>
            </div>
          </div>
          <p className="mt-10 max-w-[43ch] text-[.9rem]">{content}</p>
        </div>
      </div>
      <div className="flex gap-32">
        <div className="flex flex-grow items-center gap-4">
          <button className="text-md float-end flex h-12 flex-grow items-center gap-4 rounded-md bg-[#3a3b3cd3] px-4 text-white/40 hover:bg-[#525355] hover:text-white/80">
            <div className="flex-grow"></div>
            <span>{comments} Comment...</span>
            <MessageSquare size={28} className="" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="flex items-center justify-center gap-2 rounded-md px-4 py-2 hover:bg-[#525355]">
            <BiSolidLike className=" text-green-600" size={24} />
            <span className=" whitespace-nowrap">{likes} Likes</span>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md px-4 py-2 hover:bg-[#525355]">
            <BiSolidDislike className=" text-red-600" size={24} />
            <span className=" whitespace-nowrap">{dislikes} Dislikes</span>
          </button>
        </div>
      </div>
    </div>
  );
};
