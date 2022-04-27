const mainAdd = document.getElementById("main-add");
const formContainer = document.getElementById("form-container");
const close = document.getElementById("close");
let productName = document.getElementById("product-name");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let desc = document.getElementById("desc"); 
let form = document.getElementById('form');
let tableBody = document.getElementById("table-body");

window.onload = function() {
  console.log(localStorage.getItem('products'));
  if(localStorage.getItem('products')) {
    populateTable();
  }
  else {
    let productsInit = [];
    localStorage.setItem('products', JSON.stringify(productsInit));
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let getLocalEl = (localStorage.getItem('products'));
  let pasing = JSON.parse(getLocalEl)
 
  let product = {
    id: pasing.length + 1,
    name: productName.value,
    quantity: quantity.value,
    price: price.value,
    desc: desc.value,
  }

  pasing.push(product);

localStorage.setItem('products', JSON.stringify(pasing));
  populateTable();
});


const populateTable = () => {

  let getLocalEl = (localStorage.getItem('products'));
  let pasing = JSON.parse(getLocalEl)
  
  console.log(typeof getLocalEl);
  console.log(typeof pasing);
  console.log(pasing[0]);

  tableBody.innerHTML = "";
  pasing.forEach((element) => {
    console.log(element);
    const row = document.createElement("tr");
    row.style.borderBottom = "thick solid #0000FF"
    row.classList.add("my-row");

    console.log(localStorage.getItem('products'));
    
    row.append(tableData(element.id));
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
  deleteButton.addEventListener("click", () => deleteIntern(id));

  container.appendChild(editButton);
  container.appendChild(deleteButton);
  return container;
};

mainAdd.addEventListener("click", () => {
  formContainer.style.display = "block";
});

close.addEventListener("click", () => {
  formContainer.style.display = "none";
});
