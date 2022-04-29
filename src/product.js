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

console.log(isLogin)

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
  })
}
