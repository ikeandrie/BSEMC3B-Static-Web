import { Item } from "../../components/ui/item";
import { Oil } from "../../lib/store";

export const Oils = () => {
  const oil = [...Oil];

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-2">
      {oil.map((item, index) => {
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
