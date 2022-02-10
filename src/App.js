import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewItem from "./pages/ViewItem";
import { useCallback, useState } from "react";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useLocalStorage } from "react-use";
import AddItem from "./pages/AddItem";

const shopItemsSeed = [
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


function App() {

  const [shopItems, setShopItems] = useState(shopItemsSeed)
  const [cartItems, setCartItems] = useLocalStorage("cart",[]);

  const removeFromCart = useCallback(
    (id) => {
      setCartItems(
        cartItems
          .map((cartItem) => {
            if (cartItem.id === id) {
              return {
                id: cartItem.id,
                count: cartItem.count - 1,
              };
            } else {
              return cartItem;
            }
          })
          .filter((cartItem) => {
            return cartItem.count > 0;
          })
      );

      // setCartItems((state) => {
      //   return {
      //     ...state,
      //     [id]: state[id] - 1,
      //   };
      // });

      // setCartItems((state) => {
      //   return state
      //     .map((cartItem) => {
      //       if (cartItem.id === id) {
      //         return {
      //           id: cartItem.id,
      //           count: cartItem.count - 1,
      //         };
      //       } else {
      //         return cartItem;
      //       }
      //     })
      //     .filter((cartItem) => {
      //       return cartItem.count > 0;
      //     });
      // });
    },
    [cartItems]
  );

  const addToCart = useCallback(
    (id) => {
      const existingItem = cartItems.some((cartItem) => {
        return cartItem.id === id;
      });
      setCartItems(
        !existingItem
          ? [
              ...cartItems,
              {
                id: id,
                count: 1,
              },
            ]
          : cartItems.map((cartItem) => {
              if (cartItem.id === id) {
                return {
                  id: id,
                  count: cartItem.count + 1,
                };
              } else {
                return cartItem;
              }
            })
      );

      // setCartItems((state) => {
      //   return {
      //     ...state,
      //     [id]: (state[id] || 0) + 1,
      //   };
      // });
    },
    [cartItems]
  );

  const getNextShopItemID =useCallback(()=>{
    return Math.max(...shopItems.map((item)=>{
      return item.id
    })) +1
  },[shopItems])

  const addToShop = useCallback((newItem) => {
    setShopItems([...shopItems, {newItem, id: getNextShopItemID()}])
  },[]) 

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home shopItems={shopItems} onAdd={addToCart} onRemove={removeFromCart}/>}/>
          <Route path="/viewitem/:id" element={<ViewItem shopItems={shopItems} onAdd={addToCart} onRemove={removeFromCart} />}/>
          <Route path="/cart" element={<Cart shopItems={shopItems} cartItems={cartItems} onAdd={addToCart} onRemove={removeFromCart}/>}/>
          <Route path="/additem" element={<AddItem />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
