import data from "../db.json" assert { type: "json" };                              //importing product data from db.json
import { addItemToWishList, removeItemsFromWishList } from "../localstorage.js";    // importing methods from localstorage.js file

//getting productcode and productid
const urlParams = new URLSearchParams(window.location.search);
const productCode = urlParams.get("productCode");
const productId = urlParams.get("id");

let productCategory = data[productCode];

const productData = productCategory.find(({ id }) => id === +productId);

// Appending data
const img1 = `
  <img id="main-image" src="${productData.Image1}">
  `;
const img2 = `
  <img id="main-image" src="${productData.Image2}">
  `;
const img3 = `
  <img id="main-image" src="${productData.Image3}">
  `;

document.getElementById("product-image1").innerHTML = img1;
document.getElementById("product-image2").innerHTML = img2;
document.getElementById("product-image3").innerHTML = img3;
document.getElementById("productName").textContent = productData.productname;
document.getElementById("productPrice").textContent = productData.productprice;
document.getElementById("Conditionkey").textContent =
  Object.keys(productData)[3];
document.getElementById("productCondition").textContent =
  Object.values(productData)[3];
document.getElementById("Measurementskey").textContent =
  Object.keys(productData)[4];
document.getElementById("Measurements").textContent =
  Object.values(productData)[4];
document.getElementById("Modelkey").textContent = Object.keys(productData)[5];
document.getElementById("Model").textContent = Object.values(productData)[5];
document.getElementById("Colorkey").textContent = Object.keys(productData)[6];
document.getElementById("Color").textContent = Object.values(productData)[6];
document.getElementById("Gearskey").textContent = Object.keys(productData)[7];
document.getElementById("Gears").textContent = Object.values(productData)[7];
document.getElementById("Yearkey").textContent = Object.keys(productData)[8];
document.getElementById("Year").textContent = Object.values(productData)[8];
document.getElementById("Description").innerHTML =
  Object.values(productData)[9];
document.getElementById("Owner").textContent = Object.values(productData)[10];

// function for adding product to wishlist
const elem = document.getElementById(`wishlist-btn`);

elem.addEventListener("click", function () {
  addItemToWishList(productId, productCode);
});

// fucntion for removing product from wishlist
const removeElem = document.getElementById(`remove-wishlist-btn`);

removeElem.addEventListener("click", function () {
  removeItemsFromWishList(productId, productCode);
});
