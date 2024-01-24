import Item, { ItemType } from "./Item";
import "../css/ItemsList.css";

type arrayPropsType = {
  array: ItemType[];
};

const ItemsList = ({ array }: arrayPropsType) => {
  return (
    <div className="item-list">
      {array.map((item) => (
        <Item key={item.listing_id} item={item} />
      ))}
    </div>
  );
};

export default ItemsList;
