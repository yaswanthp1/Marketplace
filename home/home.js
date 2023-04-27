import data from "../db.json" assert { type: "json" };              //importing product data from db.json

let products = [
  "electronics",
  "cars",
  "pets",
  "realestate",
  "motorbikes",
  "bikes",
];

// fetching product data from json based on productid and productcode

for (let j = 1; j < 7; j++) {
  for (let i = 1; i < 9; i++) {
    let productData = data[products[j - 1]][i - 1];

    const mycode = `<div class="row ${productData?.Category}" id="row">
    <a href="../info/viewinfo.html?id=${productData?.id}&productCode=${productData.productcode}">
    <img src="${productData?.Image1}" alt="" />
    </a>
    <div class="product-text">
    <h5>Sale</h5>
    </div>
    <div class="heart-icon" >
    <i class="bx bx-heart" id="${productData.id}-${productData.productcode}"></i>
    </div>
    <div class="ratting">
    <i class="bx bx-star"></i>
    <i class="bx bx-star"></i>
    <i class="bx bx-star"></i>
    <i class="bx bx-star"></i>
    <i class="bx bxs-star-half"></i>
    </div>
    
    <div class="price">
    <h4>${productData?.productname}</h4>
    <p>${productData?.productprice}</p>
    </div>
    </div>`;
    document.getElementById("products").innerHTML += mycode;
  }
}

// functions for filtering the data when clicked based on the list items clicked
function All() {
  // Hide the image by setting its style display property to "none"
  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );

  cards.forEach((card) => {
    card.style.display = "";
  });
}

//when selected bikes
document.getElementById("bikes").onclick = function () {
  All();

  const cards = document.querySelectorAll(
    ".electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );

  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected cars
document.getElementById("electricBikes").onclick = function () {
  All();

  const cards = document.querySelectorAll(
    ".bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected motorbikes
document.getElementById("motorbikes").onclick = function () {
  All();

  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected lowccmotorbikes
document.getElementById("lowccmotorbikes").onclick = function () {
  All();

  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected automaticscars
document.getElementById("cars").onclick = function () {
  All();

  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected manualcars
document.getElementById("manualcars").onclick = function () {
  All();

  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected electriccars
document.getElementById("electriccars").onclick = function () {
  All();
  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected tvs
document.getElementById("tvs").onclick = function () {
  All();
  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .electriccars, .manualcars, .motorbikes, .lowccmotorbikes, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected laptops
document.getElementById("laptops").onclick = function () {
  All();
  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected mobiles
document.getElementById("mobiles").onclick = function () {
  All();
  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected houses
document.getElementById("houses").onclick = function () {
  All();
  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected condos
document.getElementById("condos").onclick = function () {
  All();
  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected on all devices
document.getElementById("all-devices").onclick = function () {
  All();
  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected all properties
document.getElementById("all-properties").onclick = function () {
  All();
  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected dogs
document.getElementById("dogs").onclick = function () {
  All();

  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .birds, .cats"
  );

  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected birds
document.getElementById("birds").onclick = function () {
  All();

  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .cats"
  );

  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected cats
document.getElementById("cats").onclick = function () {
  All();

  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds"
  );

  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected all pets
document.getElementById("all-pets").onclick = function () {
  All();

  const cards = document.querySelectorAll(
    ".bikes, .electric-bikes, .cars, .manualcars, .electriccars, .motorbikes, .lowccmotorbikes, .tvs, .laptops, .mobiles, .headphones, .condos, .houses"
  );

  cards.forEach((card) => {
    card.style.display = "none";
  });
};

//when selected all vehicles
document.getElementById("All").onclick = function () {
  All();
  const cards = document.querySelectorAll(
    ".tvs, .laptops, .mobiles, .headphones, .condos, .houses, .dogs, .birds, .cats"
  );
  cards.forEach((card) => {
    card.style.display = "none";
  });
};
