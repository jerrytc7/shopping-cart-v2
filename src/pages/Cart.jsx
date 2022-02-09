import React, { useCallback } from 'react'
import ShopList from '../components/ShopList'
import {getItem} from "../util"

function Cart( {cartItems, shopItems, onAdd, onRemove} ) {

  const getShopCartItems = useCallback(()=>{
    return cartItems.map((cartItem)=>{
      return {
        ...getItem(shopItems, cartItem.id),
        ...cartItem
      }
    })
  },[cartItems, shopItems])

  return (
    <div>
        Cart Items!
        <ShopList shopItems={getShopCartItems()} onAdd={onAdd} onRemove={onRemove}/>
    </div>
  )
}

export default Cart