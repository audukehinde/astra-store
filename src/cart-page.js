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
    price: 300,
    quantity: 90,
    reviews: 4.5,
    img: "./img/product1.png",
    description: "A chocolate bar that taste yummy",

  },
  {
    id: 2,
    name: "choco candy bar",
    price: 800,
    quantity: 70,
    reviews: 4.5,
    img: "./img/product2.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 3,
    name: "chocolateeeey candy bar",
    price: 1200,
    quantity: 80,
    reviews: 4.5,
    img: "./img/product3.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 4,
    name: "chocolate candy bar",
    price: 400,
    quantity: 200,
    reviews: 4.5,
    img: "./img/product4.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 5,
    name: "chocolate candy bar",
    price: 80,
    quantity: 400,
    reviews: 4.5,
    img: "./img/product5.png",
    description: "A chocolate bar that taste yummy",
  },

  {
    id: 6,
    name: "chocolate candy bar",
    price: 300,
    quantity: 10,
    reviews: 4.5,
    img: "./img/product6.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 7,
    name: "chocolate candy bar",
    price: 130,
    quantity: 40,
    reviews: 4.5,
    img: "./img/product7.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 8,
    name: "My candy bar",
    price: 100,
    quantity: 18,
    reviews: 4.5,
    img: "./img/product8.png",
    description: "A chocolate bar that taste yummy",
  },

  {
    id: 8,
    name: "Mr Sumbo",
    price: 100,
    quantity: 12,
    reviews: 4.5,
    img: "./img/product8.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 8,
    name: "Mr Sumbo",
    price: 190,
    quantity: 170,
    reviews: 4.5,
    img: "./img/product8.png",
    description: "A chocolate bar that taste yummy",
  },
  {
    id: 8,
    name: "Mr Sumbo",
    price: 100,
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

function displayTotal() {
  let myCart = JSON.parse(localStorage.getItem("carts"));
  let cartTotal = document.getElementById('cart-total');
  let count = 0;
  myCart.forEach((element) => {
    count += element.price * element.quantity
  });
  return cartTotal.innerHTML = count;
}

let myamount = displayTotal();
console.log(myamount);

function makePayment() {
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
    tx_ref: "titanic-48981487343MDI0NzMx",
    amount: myamount,
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "rose@unsinkableship.com",
      phone_number: "08102909304",
      name: "Rose DeWitt Bukater",
    },
    customizations: {
      title: "The Titanic Store",
      description: "Payment for an awesome cruise",
      logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
    },
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
