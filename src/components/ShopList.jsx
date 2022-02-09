import React from "react";
import ShopItem from "./ShopItem";

const shopItems = [
  {
    id: 1,
    name: "Pear",
    price: 10,
  },
  {
    id: 2,
    name: "Apple",
    price: 3,
  },
  {
    id: 3,
    name: "Banana",
    price: 5,
  },
];

function ShopList() {
  return (
    <div>
      {shopItems.map((item, index) => {
        return(
            <ShopItem item={item} key={index}/>
        )
      })}
    </div>
  );
}

export default ShopList;
