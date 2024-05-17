import { Item } from "../../components/ui/item";
import { Head } from "../../lib/store";

export const Heads = () => {
  const head = [...Head];

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-2">
      {head.map((item, index) => {
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
