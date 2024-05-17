import { Item } from "../../components/ui/item";
import { CamShaft } from "../../lib/store";

export const CamShafts = () => {
  const camshaft = [...CamShaft];

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-2">
      {camshaft.map((item, index) => {
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
