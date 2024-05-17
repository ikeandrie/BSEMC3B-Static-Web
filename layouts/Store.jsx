import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Item } from "../components/ui/item";
import {
  CamShaft,
  CrankShaft,
  Cvt,
  Cylinder,
  Head,
  Mag,
  Oil,
  Rim,
  StoreData,
} from "../lib/store";

export const Store = () => {
  const [currentPage, setCurrentPage] = useState("onStore");

  const renderPage = () => {
    switch (currentPage) {
      case "onOutlet":
        return <Outlet />;
      case "onStore":
        const assorted = [
          ...Cvt,
          ...Oil,
          ...Cylinder,
          ...Head,
          ...CrankShaft,
          ...CamShaft,
          ...Mag,
          ...Rim,
        ];

        return (
          <div className="bg-primary grid grid-cols-5 gap-x-4 gap-y-2 rounded-lg px-12 py-8">
            {assorted.map((item, index) => {
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
        );
    }
  };

  function pageLink(route, page, state, index) {
    return (
      <Link
        key={index}
        onClick={() => setCurrentPage(state)}
        to={route}
        className="rounded-[4px] bg-[#3a3b3c] px-4 py-1 text-[.78rem] font-medium text-[#828283] drop-shadow-lg hover:bg-[#525355] hover:text-white"
      >
        {page}
      </Link>
    );
  }

  return (
    <main
      id="scrollable"
      className="flex w-full flex-col items-center gap-6 py-28"
    >
      <div className="flex gap-2">
        {StoreData.map((data, index) => {
          return pageLink(
            data.Link,
            data.Text,
            data.Link === "/store" ? "onStore" : "onOutlet",
            index,
          );
        })}
      </div>

      {renderPage()}
    </main>
  );
};
