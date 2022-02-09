const getItem = (shopItems, id) => {
    return shopItems.find((item) => {
      return item.id === id;
    });
  };

  export {getItem}