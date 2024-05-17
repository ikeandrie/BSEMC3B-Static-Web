import { Item } from "../../components/ui/item";
import { Mag } from "../../lib/store";

export const Mags = () => {
  const mags = [...Mag];

  return (
    <div className="bg-primary grid grid-cols-5 gap-x-4 gap-y-2 rounded-lg px-12 py-8">
      {mags.map((item, index) => {
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
};
