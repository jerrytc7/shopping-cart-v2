import ShopItem from "./ShopItem";

function ShopList( {shopItems, onAdd, onRemove} ) {
  //const [cartItems, setCartItems] = useState({});

  return (
    <div>
      {shopItems.map((item) => {
        return (
          <ShopItem
            item={item}
            key={item.id}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}

export default ShopList;
