import { Item } from "../../components/ui/item";
import { CrankShaft } from "../../lib/store";

export const CrankShafts = () => {
  const crankshaft = [...CrankShaft];

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-2">
      {crankshaft.map((item, index) => {
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
