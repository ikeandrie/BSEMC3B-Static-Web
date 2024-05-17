import { Item } from "../../components/ui/item";
import { Cvt, Head, Mag } from "../../lib/store";
import { FaStar } from "react-icons/fa";

export const JampongChapsuey = () => {
  const numOfPosts = 5;
  const rating = Array.from({ length: numOfPosts }, (_, index) => (
    <FaStar size={20} key={index} />
  ));

  const products = [...Cvt, ...Head, ...Mag];

  return (
    <main
      id="scrollable"
      className="flex w-full flex-col items-center gap-4 py-28"
    >
      <div className="w-[60rem]">
        <div className="text-[#feeeeee flex h-[16rem] w-full items-center gap-6 rounded-2xl bg-[#242526] px-8 py-6 drop-shadow-lg">
          <div className=" size-[12rem] overflow-hidden rounded-full bg-slate-600">
            <img
              className="h-full w-full object-cover"
              src="/images/provider1/profile.jpg"
              alt=""
            />
          </div>
          <div className=" flex flex-grow flex-col gap-2">
            <h1 className=" text-4xl font-extrabold text-[#f3f3f3]">
              💲💸📈 @jampongchapsuey
            </h1>
            <div className="h-[2px] w-[25rem] rounded-full bg-[#bfbfc0b6]"></div>
            <h2 className="text-2xl font-bold text-[#b6b5b5] ">
              Tesla Model Y
            </h2>
          </div>
          <div className="flex h-full gap-2 text-yellow-500">{rating}</div>
        </div>
      </div>

      <div className="text-md rounded-[4px] bg-[#242526] px-4 py-1 font-normal text-[#b6b5b5] drop-shadow-lg">
        Other Products
      </div>

      <div className="grid grid-cols-5 gap-x-4 gap-y-2">
        {products.map((item, index) => {
          return (
            <Item
              key={index}
              description={item.Description}
              image={item.Image}
              price={item.Price}
              rating={item.Rating}
              itemLink={item.Item}
            />
          );
        })}
      </div>
    </main>
  );
};
