const mainAdd = document.getElementById("main-add");
const formContainer = document.getElementById("form-container");
const close = document.getElementById("close");
let productName = document.getElementById("product-name");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let desc = document.getElementById("desc"); 
let form = document.getElementById('form');
let imgUrl = document.getElementById('img-url');
let tableBody = document.getElementById("table-body");

window.onload = function() {
  if(localStorage.getItem('products')) {
    populateTable();
  }
  else {
    let productsInit = [];
    localStorage.setItem('products', JSON.stringify(productsInit));
  }
};

let products = [];

let getProduct = () => { 
  let getLocalEl = (localStorage.getItem('products'));
  products = JSON.parse(getLocalEl);
  // console.log(products);
  let product = {
    id: products.length + 1,
    url: imgUrl.value,
    name: productName.value,
    quantity: quantity.value,
    price: price.value,
    desc: desc.value,
  }

  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
  populateTable();
  // console.log(products)
}

form.addEventListener('submit', (e) => {
  getProduct();
  e.preventDefault();
  
});


const populateTable = () => {

  let getLocalEl = (localStorage.getItem('products'));
  let products = JSON.parse(getLocalEl)

  tableBody.innerHTML = "";
  products.forEach((element) => {
    const row = document.createElement("tr");
    row.style.borderBottom = "2px solid #000"
    // row.classList.add("my-row");
    
    row.append(tableData(element.id));
    row.append(tableData(element.url));
    row.append(tableData(element.name));
    row.append(tableData(element.quantity));
    row.append(tableData(element.price));
    row.append(tableData(element.desc));
    row.append(actions(element.id));

    tableBody.append(row);
  });
};

const tableData = (data) => {
  const element = document.createElement("td");
  element.classList.add("my-space");
  element.style.textAlign = 'center'
  element.textContent = data;
  return element;
};

const actions = (id) => {
  // changed to div to td
  const container = document.createElement("td");
  container.style.display = "flex";
  // container.style.alignItems = "center";
  container.style.justifyContent = "center"
  // container.classList.add("mystyle");
  const editButton = document.createElement("button");
  // editButton.classList.add("editbtn");
  editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
  editButton.style.marginRight = "20px";
  editButton.addEventListener("click", () => editIntern(id));

  const deleteButton = document.createElement("button");
  // deleteButton.classList.add("deletebtn");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.addEventListener("click", () => removeProduct(id));

  container.appendChild(editButton);
  container.appendChild(deleteButton);
  return container;
};

const removeProduct = (id) => {
  let products = JSON.parse(localStorage.getItem('products'));
  products = products.filter((product) => product.id != id);
  populateTable();
}

mainAdd.addEventListener("click", () => {
  formContainer.style.display = "block";
});

close.addEventListener("click", () => {
  formContainer.style.display = "none";
});
