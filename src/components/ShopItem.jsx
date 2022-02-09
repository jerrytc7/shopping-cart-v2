import React from "react";
import { Link } from "react-router-dom";

function ShopItem({ item, onAdd, onRemove }) {
  return (
    <div>
      <Link to={`/viewitem/${item.id}`}>{item.name}</Link>
      {item.count}
      <button onClick={() => onAdd(item.id)}>+</button>
      <button onClick={() => onRemove(item.id)}>-</button>
    </div>
  );
}

export default ShopItem;
