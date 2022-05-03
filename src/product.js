let cartItem
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
    name: 'snicker bar',
    price: 250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product1.png',
    description: `DANG! Ageless Q10 + Vit. C serum is a <br />
    rich, fragrance-free oil serum. <br />
    Formulated to work in and out of the <br />
    skin with Q10 on the upper layer and <br />
    big shot Vitamin C, Ascorbyl <br />
    Tetrasopalmitate (Tetrahexyldecyl <br />
    ascorbate) in the innermost layer, this <br />
    powerful combo makes sure to <br />
    prevent discoloration, aging, <br />
    hyperpigmentation, and sun damage.`,
  },
  {
    id: 2,
    name: 'Dang Vit C',
    price: 8250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product2.png',
    description: `DANG! Ageless Q10 + Vit. C serum is a <br />
    rich, fragrance-free oil serum. <br />
    Formulated to work in and out of the <br />
    skin with Q10 on the upper layer and <br />
    big shot Vitamin C, Ascorbyl <br />
    Tetrasopalmitate (Tetrahexyldecyl <br />
    ascorbate) in the innermost layer, this <br />
    powerful combo makes sure to <br />
    prevent discoloration, aging, <br />
    hyperpigmentation, and sun damage.`,
  },
  {
    id: 3,
    name: 'Vaseline Oil',
    price: 7000,
    quantity: 23,
    reviews: 4.5,
    img: './img/product3.png',
    description: `DANG! Ageless Q10 + Vit. C serum is a <br />
    rich, fragrance-free oil serum. <br />
    Formulated to work in and out of the <br />
    skin with Q10 on the upper layer and <br />
    big shot Vitamin C, Ascorbyl <br />
    Tetrasopalmitate (Tetrahexyldecyl <br />
    ascorbate) in the innermost layer, this <br />
    powerful combo makes sure to <br />
    prevent discoloration, aging, <br />
    hyperpigmentation, and sun damage.`,
  },
  {
    id: 4,
    name: 'Always Pad',
    price: 800,
    quantity: 23,
    reviews: 4.5,
    img: './img/product4.png',
    description: `DANG! Ageless Q10 + Vit. C serum is a <br />
    rich, fragrance-free oil serum. <br />
    Formulated to work in and out of the <br />
    skin with Q10 on the upper layer and <br />
    big shot Vitamin C, Ascorbyl <br />
    Tetrasopalmitate (Tetrahexyldecyl <br />
    ascorbate) in the innermost layer, this <br />
    powerful combo makes sure to <br />
    prevent discoloration, aging, <br />
    hyperpigmentation, and sun damage.`,
  },
  {
    id: 5,
    name: 'Agar Oil',
    price: 1250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product5.png',
    description: `DANG! Ageless Q10 + Vit. C serum is a <br />
    rich, fragrance-free oil serum. <br />
    Formulated to work in and out of the <br />
    skin with Q10 on the upper layer and <br />
    big shot Vitamin C, Ascorbyl <br />
    Tetrasopalmitate (Tetrahexyldecyl <br />
    ascorbate) in the innermost layer, this <br />
    powerful combo makes sure to <br />
    prevent discoloration, aging, <br />
    hyperpigmentation, and sun damage.`,
  },

  {
    id: 6,
    name: 'Bounty bar',
    price: 300,
    quantity: 23,
    reviews: 4.5,
    img: './img/product6.png',
    description: `DANG! Ageless Q10 + Vit. C serum is a <br />
    rich, fragrance-free oil serum. <br />
    Formulated to work in and out of the <br />
    skin with Q10 on the upper layer and <br />
    big shot Vitamin C, Ascorbyl <br />
    Tetrasopalmitate (Tetrahexyldecyl <br />
    ascorbate) in the innermost layer, this <br />
    powerful combo makes sure to <br />
    prevent discoloration, aging, <br />
    hyperpigmentation, and sun damage.`,
  },
  {
    id: 7,
    name: 'pringles',
    price: 250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product7.png',
    description: `DANG! Ageless Q10 + Vit. C serum is a <br />
    rich, fragrance-free oil serum. <br />
    Formulated to work in and out of the <br />
    skin with Q10 on the upper layer and <br />
    big shot Vitamin C, Ascorbyl <br />
    Tetrasopalmitate (Tetrahexyldecyl <br />
    ascorbate) in the innermost layer, this <br />
    powerful combo makes sure to <br />
    prevent discoloration, aging, <br />
    hyperpigmentation, and sun damage.`,
  },
  {
    id: 8,
    name: 'Palm Olive',
    price: 2250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product8.png',
    description: `DANG! Ageless Q10 + Vit. C serum is a <br />
    rich, fragrance-free oil serum. <br />
    Formulated to work in and out of the <br />
    skin with Q10 on the upper layer and <br />
    big shot Vitamin C, Ascorbyl <br />
    Tetrasopalmitate (Tetrahexyldecyl <br />
    ascorbate) in the innermost layer, this <br />
    powerful combo makes sure to <br />
    prevent discoloration, aging, <br />
    hyperpigmentation, and sun damage.`,
  },

  {
    id: 9,
    name: 'Dang Vit C',
    price: 8250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product2.png',
    description: `DANG! Ageless Q10 + Vit. C serum is a <br />
    rich, fragrance-free oil serum. <br />
    Formulated to work in and out of the <br />
    skin with Q10 on the upper layer and <br />
    big shot Vitamin C, Ascorbyl <br />
    Tetrasopalmitate (Tetrahexyldecyl <br />
    ascorbate) in the innermost layer, this <br />
    powerful combo makes sure to <br />
    prevent discoloration, aging, <br />
    hyperpigmentation, and sun damage.`,
  },
  {
    id: 10,
    name: 'Dang Vit C',
    price: 8250,
    quantity: 23,
    reviews: 4.5,
    img: './img/product2.png',
    description: `DANG! Ageless Q10 + Vit. C serum is a <br />
    rich, fragrance-free oil serum. <br />
    Formulated to work in and out of the <br />
    skin with Q10 on the upper layer and <br />
    big shot Vitamin C, Ascorbyl <br />
    Tetrasopalmitate (Tetrahexyldecyl <br />
    ascorbate) in the innermost layer, this <br />
    powerful combo makes sure to <br />
    prevent discoloration, aging, <br />
    hyperpigmentation, and sun damage.`,
  },
]
// set item into local storage
localStorage.setItem('products', JSON.stringify(products))

// get and save local storage item into variable
const localProducts = JSON.parse(localStorage.getItem('products'))

let carts = []

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

// console.log(isLogin)

const showProduct = () => {
  localProducts.map((product) => {
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
        <p>NGN ${product.price}</p>
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
// const AddToCart = (id) => {
//   // products.find((product) => {
//   //   if (product.id === ItemId) {
//   //     // console.log(' item added to cart')
//   //     carts.push({
//   //       id: product.id,
//   //       quantity: qty,
//   //       title: product.title,
//   //       price: product.price,
//   //     })
//   //   }
//   //   return
//   // })
//   // console.log(ItemId)
//   // console.log(product)
//   console.log(id)
// }

console.log(carts)

// display modal
const showProductModal = (id) => {
  // window.history.pushState('', '', 'http://127.0.0.1:5500/src/cart-page.html')
  // window.reload()

  const modal = document.querySelector('.desc-modal')
  modal.style.display = 'block'

  id = parseInt(id)

  products.find((product) => {
    const content = document.querySelector('.modal-content')
    const details = document.createElement('div')

    if (product.id === id) {
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
          <img src="${product.img}" />
        </div>
        <div class="flex flex-col justify-between p-10">
          <h1 class="font-bold text-4xl">
            ${product.name}<br />
            OIL SERUM 30ML
          </h1>
          <p
            id="price"
            class="text-gray-600 font-semibold text-4xl mt-2 mb-2"
          >
            NGN <span id="price-number">${product.price}</span>
          </p>
          <p class="text-gray-600 font-medium text-1xl">
           ${product.description}
          </p>
          <div class="gap-2 flex mt-6">
            <div class="flex bg-lightwhiteblue item-center">
              <button id="decrease" class="p-4">-</button>
              <span id="item-number" class="p-4">1</span>
              <button id="increase" class="p-4">+</button>
            </div>
            <button id="addToCart"
              class="bg-darkblackblue p-4 text-white font-bold"
              "onclick=addtocart()"
            >
              ADD TO CART
            </button>
            <h1 class="totalprice"></h1>
          </div>
        </div>
      </div>
    </div>
    `

      // javascript to chnge the data

      // const itemNumber = document.getElementById('item-number')
      // const decrease = document.getElementById('decrease')
      // const increase = document.getElementById('increase')

      // const price = document.getElementById('price-number')

      // const mainPrice = product.price

      // count = parseInt(itemNumber.innerHTML)
      // decrease.addEventListener('click', function () {
      //   count--
      //   itemNumber.innerHTML = count
      //   const newPrice = mainPrice * count

      //   console.log(`the price is ${price}`)
      //   console.log(`the price is ${newPrice}`)
      //   price.innerHTML = newPrice
      // })

      // increase.addEventListener('click', () => {
      //   count++
      //   itemNumber.innerHTML = count
      //   const newPrice = mainPrice * count

      //   console.log(`the price is ${price}`)
      //   console.log(`the price is ${newPrice}`)
      //   price.innerHTML = newPrice
      // })
      // // function addtocart() {
      //   alert('product added to cart')
      //   let items = []
      //   let item = {
      //     id: 1,
      //     name: 'new item',
      //     imageUrl: '',
      //     description: 'new item description',
      //     unitPrice: 800,
      //     quantity: 2,
      //     totalPrice: 16000,
      //   }

      //   gg.push(item)

      //   let stringedItems = JSON.stringify(items)

      //   localStorage.setItem('cart', stringedItems)
      // }
    }
    content.appendChild(details)
  })
  getTotalPrice(id)
}

// const itemNumber = document.getElementById('item-number')
// const decrease = document.getElementById('decrease')
// const increase = document.getElementById('increase')

// const price = document.getElementById('price-number')

// // const mainPrice = 8250

// count = parseInt(itemNumber.innerHTML)
// decrease.addEventListener('click', function () {
//   count--
//   itemNumber.innerHTML = count
//   const newPrice = mainPrice * count

//   console.log(`the price is ${price}`)
//   console.log(`the price is ${newPrice}`)
//   price.innerHTML = newPrice
// })

// increase.addEventListener('click', () => {
//   count++
//   itemNumber.innerHTML = count
//   const newPrice = mainPrice * count

//   console.log(`the price is ${price}`)
//   console.log(`the price is ${newPrice}`)
//   price.innerHTML = newPrice
// })
function addtocart() {
  alert('product added to cart')
  let items = []
  let item = {
    id: 1,
    name: 'new item',
    imageUrl: '',
    description: 'new item description',
    unitPrice: 800,
    quantity: 2,
    totalPrice: 16000,
  }

  gg.push(item)

  let stringedItems = JSON.stringify(items)

  localStorage.setItem('cart', stringedItems)
}

// document.querySelector('DOMContentLoaded', showProduct())

document.querySelector('#modal-close').addEventListener('click', () => {
  const modal = document.querySelector('.desc-modal')
  // if (document.querySelector('.product-desc').innerHTML !== '') {
  // }
  // document.querySelector('#product').innerHTML = ''

  document.querySelector('.product-desc').innerHTML = ''
  // document.querySelector('.modal-content').innerHTML = ''
  // document.querySelector('#modal-close').style.display = 'none'

  modal.style.display = 'none'
})

// get quantity and price

const getTotalPrice = (id) => {
  // set item to cart
  const itemNumber = document.getElementById('item-number')
  const decrease = document.getElementById('decrease')
  const increase = document.getElementById('increase')
  id = parseInt(id)

  let initialPrice = 0
  const price = document.getElementById('price-number')

  count = parseInt(itemNumber.innerHTML)

  decrease.addEventListener('click', function () {
    products.find((product) => {
      if (product.id === id) {
        initialPrice = product.price
        count--
        itemNumber.innerHTML = count
        const newPrice = initialPrice * count
        console.log(newPrice)

        // console.log(`the price is ${price}`)
        // console.log(`the price is ${newPrice}`)
        price.innerHTML = newPrice

        cartItem = {
          ...product,
          quantity: count,
          totalPrice: product.price * count,
        }
      }
    })
  })

  increase.addEventListener('click', () => {
    products.find((product) => {
      if (product.id === id) {
        initialPrice = product.price
        count++
        itemNumber.innerHTML = count
        const newPrice = initialPrice * count

        // console.log(price)

        // console.log(`the price is ${price}`)
        // console.log(`the price is ${newPrice}`)
        price.innerHTML = newPrice

        console.log({
          ...product,
          quantity: count,
          totalPrice: product.price * count,
        })
      }
    })
  })

  document.querySelector('#addToCart').addEventListener('click', () => {
    const quantity = parseInt(itemNumber.innerText)
    products.find((product) => {
      if (product.id === id) {
        cartItem = {
          ...product,
          total: quantity * product.price,
          quantity: quantity,
        }
        console.log(cartItem)
        carts.push(cartItem)
        JSON.parse(localStorage.carts).find((cart) => {
          if (cart.id === id) {
            // ;({ ...JSON.parse(localStorage.carts)[id], quantity: quantity })
          }
        })
        console.log(JSON.parse(localStorage.carts)[id])
        localStorage.setItem('carts', JSON.stringify(carts))
        // console.log(product)
      }
    })
  })
}
