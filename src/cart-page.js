let isLogin = false

let users = [
  {
    id: 1,
    name: 'admin',
    password: 'admin',
    isAdmin: true,
  },

  {
    id: 2,
    name: 'user1',
    password: 'user123',
    isAdmin: false,
  },

  {
    id: 3,
    name: 'kenny',
    password: 'kenny123',
    isAdmin: false,
  },
]

let products = [
  {
    id: 1,
    name: 'chocolate candy bar',
    price: '$250',
    quantity: 23,
    reviews: 4.5,
    img: './img/product1.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 2,
    name: 'choco candy bar',
    price: '$250',
    quantity: 23,
    reviews: 4.5,
    img: './img/product2.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 3,
    name: 'chocolateeeey candy bar',
    price: '$250',
    quantity: 23,
    reviews: 4.5,
    img: './img/product3.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 4,
    name: 'chocolate candy bar',
    price: '$250',
    quantity: 23,
    reviews: 4.5,
    img: './img/product4.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 5,
    name: 'chocolate candy bar',
    price: '$250',
    quantity: 23,
    reviews: 4.5,
    img: './img/product5.png',
    description: 'A chocolate bar that taste yummy',
  },

  {
    id: 6,
    name: 'chocolate candy bar',
    price: '$250',
    quantity: 23,
    reviews: 4.5,
    img: './img/product6.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 7,
    name: 'chocolate candy bar',
    price: '$250',
    quantity: 23,
    reviews: 4.5,
    img: './img/product7.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 8,
    name: 'chocolate candy bar',
    price: '$250',
    quantity: 23,
    reviews: 4.5,
    img: './img/product8.png',
    description: 'A chocolate bar that taste yummy',
  },

  {
    id: 9,
    name: 'chocolate candy bar',
    price: '$250',
    quantity: 23,
    reviews: 4.5,
    img: './img/product2.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 10,
    name: 'chocolate candy bar',
    price: '$250',
    quantity: 23,
    reviews: 4.5,
    img: './img/product2.png',
    description: 'A chocolate bar that taste yummy',
  },
]

let carts = [
  {
    id: 1,
    name: 'chocolate candy bar',
    price: 1250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product1.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 2,
    name: 'choco candy bar',
    price: 4250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product2.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 3,
    name: 'chocolateeeey candy bar',
    price: 1250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product3.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 4,
    name: 'chocolate candy bar',
    price: 2250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product4.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 5,
    name: 'chocolate candy bar',
    price: 2350,
    quantity: 23,
    reviews: 4.5,
    img: './img/product5.png',
    description: 'A chocolate bar that taste yummy',
  },

  {
    id: 6,
    name: 'chocolate candy bar',
    price: 2750,
    quantity: 23,
    reviews: 4.5,
    img: './img/product6.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 7,
    name: 'chocolate candy bar',
    price: 4250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product7.png',
    description: 'A chocolate bar that taste yummy',
  },
  {
    id: 8,
    name: 'chocolate candy bar',
    price: 2500,
    quantity: 23,
    reviews: 4.5,
    img: './img/product8.png',
    description: 'A chocolate bar that taste yummy',
  },
]

const login = (username, password) => {
  try {
    users.forEach((user) => {
      // if (user.name === username && user.password === password) {
      if (
        user.isAdmin &&
        username === user.name &&
        password === user.password
      ) {
        isLogin = true
        console.log(`${user.name} is an admin`)
        window.location = './admin.html'
      } else if (user.name === username && user.password === password) {
        isLogin = true
        console.log(`${user.name} is a user, log in successful`)
        window.location = './product.html'
      }
      //else {
      //   console.log('login error')
      // }
    })
  } catch (error) {
    console.log(error)
  }
}

// login('kenny', 'kenny123')
// login('admin', 'admin')
login('user1', 'user12')

console.log(isLogin)

const displayCart = () => {
  carts.map((cartItem) => {
    const cartList = document.querySelector('.cart-list--body')
    const cartItems = document.createElement('div')

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
  </div>`

    cartList.appendChild(cartItems)
  })
}

document.querySelector('DOMContentLoaded', displayCart())

const showProduct = () => {
  products.map((product) => {
    const list = document.querySelector('.product-list')
    const card = document.createElement('div')

    card.setAttribute('onclick', `showProductModal('${product.id}')`)

    card.innerHTML = ` <div
    class="card h-60 p-3 flex flex-col justify-between font-roboto shadow-md md:h-72"
    style="background-color: #fff"
  >
    <div class="product-image bg-cover w-full">
      <img src="${product.img}" alt="${product.name}" />
    </div>

    <div
      class="product-content flex justify-between border-t-2 border-gray-300 sm:text-sm"
    >
      <div class="product flex flex-col">
        <h3>${product.name}</h3>
        <p>30% discount</p>
      </div>

      <div class="product text-secondaryPink">
        <p>${product.price}</p>
      </div>
    </div>
  </div>`

    // console.log(product)

    list.appendChild(card)

    // console.log(product)
  })
}

document.querySelector('DOMContentLoaded', showProduct())

// !isLogin ? console.log('invalid log in details') : showProduct()

//Add to cart function
const AddToCart = (ItemId, qty) => {
  products.find((product) => {
    if (product.id === ItemId) {
      // console.log(' item added to cart')
      carts.push({
        id: product.id,
        quantity: qty,
        title: product.title,
        price: product.price,
      })
    }
    return
  })
}

AddToCart(4, 8)
console.log(carts)

// display modal
const showProductModal = (id) => {
  id = parseInt(id)

  products.find((product) => {
    product.id === id && console.log(product)

    const description = document.querySelector('.desc-modal')
    const details = document.createElement('div')

    details.innerHTML = ` 
    <div class="bp-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 absolute right-0 -mt-8 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <div class="product-desc mx-auto flex flex-col h-full w-full">
      <div class="h-4/5 flex justify-center">
        <div class="h-full w-5/12 py-10 pl-10">
          <img src="../src/img/Dang-Vit-c.jpg" />
        </div>
        <div class="flex flex-col justify-between p-10">
          <h1 class="font-bold text-4xl">
            DANG AGELESS Q10+ VIT C <br />
            OIL SERUM 30ML
          </h1>
          <p
            id="price"
            class="text-gray-600 font-semibold text-4xl mt-2 mb-2"
          >
            NGN <span id="price-number">8250</span>
          </p>
          <p class="text-gray-600 font-medium text-1xl">
            DANG! Ageless Q10 + Vit. C serum is a <br />
            rich, fragrance-free oil serum. <br />
            Formulated to work in and out of the <br />
            skin with Q10 on the upper layer and <br />
            big shot Vitamin C, Ascorbyl <br />
            Tetrasopalmitate (Tetrahexyldecyl <br />
            ascorbate) in the innermost layer, this <br />
            powerful combo makes sure to <br />
            prevent discoloration, aging, <br />
            hyperpigmentation, and sun damage.
          </p>
          <div class="gap-2 flex mt-6">
            <div class="flex bg-lightwhiteblue item-center">
              <button id="decrease" class="p-4">-</button>
              <span id="item-number" class="p-4">1</span>
              <button id="increase" class="p-4">+</button>
            </div>
            <button
              class="bg-darkblackblue p-4 text-white font-bold"
              onclick="addtocart()"
            >
              ADD TO CART
            </button>
            <h1 class="totalprice"></h1>
          </div>
        </div>
      </div>
    </div>`

    description.appendChild(details)
  })
}