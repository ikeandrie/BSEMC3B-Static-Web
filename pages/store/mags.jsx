import { Item } from "../../components/ui/item";
import { Mag } from "../../lib/store";

export const Mags = () => {
  const mags = [...Mag];

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-2">
      {mags.map((item, index) => {
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
