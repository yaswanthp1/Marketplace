//Importing required methods
import { getItemsFromLocalStorage } from "../localstorage.js";                 
import { removeItemsFromWishList } from "../localstorage.js";

const { items } = getItemsFromLocalStorage("wishList");

//building product card in wishlist
for (let i = 0; i < items.length; i++) {
  const item = items[i];

  const mycode = `<div class="row ${item?.Category}" id="row">
    <a href="../info/viewinfo.html?id=${item?.id}&productCode=${item.productcode}">
    <img src="${item?.Image1}" alt="" />
    </a>
    <div class="ratting">
    <i class="bx bx-star"></i>
    <i class="bx bx-star"></i>
    <i class="bx bx-star"></i>
    <i class="bx bx-star"></i>
    <i class="bx bxs-star-half"></i>
    </div>
    
    <div class="price">
    <h4>${item?.productname}</h4>
    <p>${item?.productprice}</p>
    <div class="heart-icon" id="remove-wishlist-btn" data-myid="${item?.id}" data-myclass="${item.productcode}" style="position: absolute; left: 0; margin-left: 15px">
      <button class="btn btn-outline-danger" style="font-size: 12px;">Remove from wishlist</button>
    </div>
    </div>  
    </div>`;

  document.getElementById("wishlist-items").innerHTML += mycode;
}

// When clicked on remove from wishlist button
const removeElem = document.querySelectorAll("#remove-wishlist-btn");

//Function for calculating total prices of products in wishlist
(function () {
  const { items: wishListItems } = getItemsFromLocalStorage("wishList");
  const total = wishListItems.reduce((prev, curr) => {
    const { productprice } = curr;
    const [empty, price] = productprice.split("$");
    return prev + +price.replace(",", "");
  }, 0);

  document.getElementById("wishlist-total").innerHTML += "$" + total;
})();

//Function for removing the product from wishlist
removeElem.forEach(function (element) {
  element.addEventListener("click", function () {
    var id = element.dataset.myid;
    var className = element.dataset.myclass;
    removeItemsFromWishList(id, className);       //calls the method
    // Refresh the current page
    location.reload();
  });
});
