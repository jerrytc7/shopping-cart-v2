import React from "react";
import ShopItem from "../components/ShopItem";
import { useParams } from "react-router-dom";
import {getItem} from "../util"

function ViewItem({ shopItems, onAdd, onRemove }) {
  const { id } = useParams();

  return (
    <div>
      <ShopItem item={getItem(shopItems, +id)} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
}

export default ViewItem;
