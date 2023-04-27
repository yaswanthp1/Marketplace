import data from "../db.json" assert { type: "json" };        //Import product data from db.json

/**
 * Function to get data from local storage
 * @param itemType - localstorage item key
 * @returns - data of that particular key
 */
export function getItemsFromLocalStorage(itemType) {
  const items = localStorage.getItem(itemType);
  return { items: JSON.parse(items) };
}

/**
 *
 * @param itemType - key
 * @param data - data to insert into localstorage
 */
export function addItemsToLocalStorage(itemType, data) {
  localStorage.setItem(itemType, data);
}

/**
 * Function to get data from local storage
 * @param productId -key
 * @param productCode - data of that particular key
 */
export function isItemAddedToWishList(productId, productCode) {
  const { items } = getItemsFromLocalStorage("wishList");

  return items.find(
    ({ id, productcode }) => id === +productId && productcode === productCode
  );
}

/**
 * Function to get data from local storage
 * @param productId -key
 * @param productCode - data of that particular key
 */
export function removeItemsFromWishList(productId, productCode) {

  const { items } = getItemsFromLocalStorage("wishList");

  addItemsToLocalStorage(
    "wishList",
    JSON.stringify(
      items.filter(
        ({ id, productcode }) =>
          id !== +productId || productCode !== productcode
      )
    )
  );

  alert("Product will be removed from wishlist!");
}

/**
 * Function to get data from local storage
 * @param productId -key
 * @param productCode - data of that particular key
 */
export function addItemToWishList(id, productCode) {

  const isExisting = isItemAddedToWishList(id, productCode);
  //Checks whether the product is already existing in the wishlist
  if (isExisting) {
    alert("Item already added to wishlist");
    return;
  }
  //Adds product to the wishlist
  const newItem = (data[productCode] || []).find(
    ({ id: _id, productcode }) => _id === +id && productCode === productcode
  );

  const { items } = getItemsFromLocalStorage("wishList");

  addItemsToLocalStorage("wishList", JSON.stringify([...items, newItem]));
  alert("Item Added to wishlist \u{2665}");
  return;
}
