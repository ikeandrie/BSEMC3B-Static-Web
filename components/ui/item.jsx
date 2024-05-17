import { FaStar } from "react-icons/fa";

export const Item = ({ description, image, price, rating }) => {
  const numOfPosts = rating;
  const items = Array.from({ length: numOfPosts }, (_, index) => (
    <FaStar size={13} key={index} />
  ));

  return (
    <div className="flex h-[18.5rem] w-[12.5rem] flex-col justify-between gap-2 rounded-[4px] bg-[#242526] px-4 py-3 text-sm text-white drop-shadow-lg">
      <div>
        <div className="h-[12rem] w-full rounded-[3px] bg-slate-400">
          <img
            className="h-full w-full bg-center object-cover"
            src={image}
            alt=""
          />
        </div>
        <p className="mt-2 line-clamp-2 text-sm">{description}</p>
      </div>
      <div className="flex w-full justify-between">
        <span className="">&#x20B1; {price}</span>
        <div className="flex items-center gap-1 text-yellow-500">{items}</div>
      </div>
    </div>
  );
};
