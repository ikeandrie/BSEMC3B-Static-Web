import { Item } from "../../components/ui/item";
import { Cylinder } from "../../lib/store";

export const Cylinders = () => {
  const cylinder = [...Cylinder];

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-2">
      {cylinder.map((item, index) => {
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
