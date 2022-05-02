window.onload = function () {
  if (localStorage.getItem("carts")) {
    displayCart();
  } else {
    let productsInit = [];
    localStorage.setItem("carts", JSON.stringify(productsInit));
  }
};


let carts = [
  {
    id: 1,
    name: "chocolate candy bar",
    price: 1,
    quantity: 1,
    reviews: 4.5,
    img: "./img/product1.png",
    description: "A chocolate bar that taste yummy",

  },
  {
    id: 2,
    name: "choco candy bar",
    price: 1,
    quantity: 1,
    reviews: 4.5,
    img: "./img/product2.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 3,
    name: "chocolateeeey candy bar",
    price: 1,
    quantity: 1,
    reviews: 4.5,
    img: "./img/product3.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 4,
    name: "chocolate candy bar",
    price: 1,
    quantity: 1,
    reviews: 4.5,
    img: "./img/product4.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 5,
    name: "chocolate candy bar",
    price: 1,
    quantity: 1,
    reviews: 4.5,
    img: "./img/product5.png",
    description: "A chocolate bar that taste yummy",
  },

  {
    id: 6,
    name: "chocolate candy bar",
    price: 1,
    quantity: 1,
    reviews: 4.5,
    img: "./img/product6.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 7,
    name: "chocolate candy bar",
    price: 1,
    quantity: 1,
    reviews: 4.5,
    img: "./img/product7.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 8,
    name: "My candy bar",
    price: 1,
    quantity: 1,
    reviews: 4.5,
    img: "./img/product8.png",
    description: "A chocolate bar that taste yummy",
  },

  {
    id: 8,
    name: "Mr Sumbo",
    price: 1,
    quantity: 1,
    reviews: 4.5,
    img: "./img/product8.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 8,
    name: "Mr Sumbo",
    price: 10,
    quantity: 10,
    reviews: 4.5,
    img: "./img/product8.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 8,
    name: "Mr Sumbo",
    price: 10,
    quantity: 10,
    reviews: 4.5,
    img: "./img/product8.png",
    description: "A chocolate bar that taste yummy",
  },
];

// console.log(carts[0].price);

localStorage.setItem("carts", JSON.stringify(carts));

const displayCart = () => {
  let myCart = JSON.parse(localStorage.getItem("carts"));
  myCart.map((cartItem) => {
    const cartList = document.querySelector(".cart-list--body");
    const cartItems = document.createElement("div");

    cartItems.innerHTML = `<div class="cart-item flex justify-between w-full mb-10">
    <div class="product-details flex space-x-4">
      <div class="h-28 w-28">
        <img src="${cartItem.img}" alt="product 1" />
      </div>
      <div class="product-text flex flex-col justify-evenly">
        <p class="font-medium text-lg" >${cartItem.name}</p>
        <p class="font-medium text-lg text-secondaryPink">snack</p>
        <button class="text-gray-400">remove</button>
      </div>
    </div>

    <div class="product-quantity">
  
      <div class="w-10 border text-center border-gray-400" type="number" value="1" min="1">${
        cartItem.quantity
      }</div>
    </div>

    <div class="product-price">
      <p class="font-medium text-gray-500" >N${cartItem.price}</p>
    </div>

    <div class="total-price">
      <p class="font-medium text-gray-500"  >N${
        cartItem.quantity * cartItem.price
      }</p>
    </div>
  </div>`;

    cartList.appendChild(cartItems);
  });
};

const displayTotal = () => {
  let myCart = JSON.parse(localStorage.getItem("carts"));
  console.log(typeof myCart)
  let cartTotal = document.getElementById('cart-total');
  let count = 0;
  myCart.forEach((element) => {
    count += element.price * element.quantity
    cartTotal.innerHTML = count;
  });
  
}

document.querySelector("DOMContentLoaded", displayCart(), displayTotal());

//Add to cart function
// const AddToCart = (ItemId, qty) => {
//   products.find((product) => {
//     if (product.id === ItemId) {
//       // console.log(' item added to cart')
//       carts.push({
//         id: product.id,
//         quantity: qty,
//         title: product.title,
//         price: product.price,
//       })
//     }
//     return
//   })
// }

// AddToCart(4, 8)
// console.log(carts)

// // display modal
// const showProductModal = (id) => {
//   id = parseInt(id)

//   products.find((product) => {
//     product.id === id && console.log(product)
//   })
// }
