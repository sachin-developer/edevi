const eDeviCartKey = '__eDeviCart';

const getCartQuantity = () => {
    let currentCartItems = getLocalStorageItems();
    return currentCartItems.reduce((acc, curr)=> {
        return curr.itemQuantity + acc;
    }, 0);
};
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
    getCartQuantity,
    getLocalStorageItems,
    setLocalStorageItems  
}

export default shoppingCartUtils;



