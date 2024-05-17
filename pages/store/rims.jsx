import { Item } from "../../components/ui/item";
import { Rim } from "../../lib/store";

export const Rims = () => {
  const rim = [...Rim];

  return (
    <div className="bg-primary grid grid-cols-5 gap-x-4 gap-y-2 rounded-lg px-12 py-8">
      {rim.map((item, index) => {
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
