const eDeviCartKey = '__eDeviCart';

const getCartQuantity = () => {
    let currentCartItems = getLocalStorageItems();
    return currentCartItems.reduce((acc, curr)=> {
        return curr.quantity + acc;
    }, 0);
};

const getCartPrice = () => {
    let currentCartItems = getLocalStorageItems();
    return currentCartItems.reduce((acc, curr)=> {
        return curr.price + acc;
    }, 0);
}; 

const addToCart = (itemI) => {
    let currentCartItems = getLocalStorageItems();
    let item = currentCartItems.find((currCartItem)=>{
        return currCartItem.itemId === itemI.itemId;
    });

    if (item) {
     // Update all existing item prices
      item.quantity = item.quantity + itemI.quantity;
      item.price = item.price + itemI.price;
      item.aliasName = itemI.aliasName;   
    } else {
      currentCartItems.push(itemI);
    }
    setLocalStorageItems(currentCartItems);
  }

const getCartItemQuantity = (currentItem) => {
   
}

// const getCartItem = (itemID) => {
//   return  cartItems.find ((cachedItem)=> {
//     return cachedItem.itemId === itemID 
//   });
// }



const getLocalStorageItems = () => {
    let localItems = localStorage.getItem(eDeviCartKey);
    if (localItems) {
      return JSON.parse(localItems);
    } else {
      return [];
    }
}

const  setLocalStorageItems = (items) => {
    let storageJSON = JSON.stringify(items);
    localStorage.setItem(eDeviCartKey, storageJSON);
}


let shoppingCartUtils = {
    addToCart,
    getCartQuantity,
    getLocalStorageItems,
    setLocalStorageItems ,
    getCartPrice
}

export default shoppingCartUtils;



