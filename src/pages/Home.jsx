import React from 'react';
import ShopList from '../components/ShopList';

function Home( {shopItems, onAdd, onRemove} ) {

  return(
  <div>
      Home Page!
      <ShopList shopItems={shopItems} onAdd={onAdd} onRemove={onRemove}/>
  </div>
  )
}

export default Home;
