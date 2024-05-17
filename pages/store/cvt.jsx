import { Item } from "../../components/ui/item";
import { Cvt } from "../../lib/store";

export const CVT = () => {
  const cvt = [...Cvt];

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-2">
      {cvt.map((item, index) => {
        return (
          <Item
            key={index}
            description={item.Description}
            image={item.Image}
            price={item.Price}
            rating={item.Rating}
          />
        );
      })}
    </div>
  );
};
