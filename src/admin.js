const mainAdd = document.getElementById("main-add");
const formContainer = document.getElementById("form-container");
const close = document.getElementById("close");
let productName = document.getElementById("product-name");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let desc = document.getElementById("desc"); 
let form = document.getElementById('form');
let tableBody = document.getElementById("table-body");



const products = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let product = {
    id: products.length + 1,
    name: productName.value,
    quantity: quantity.value,
    price: price.value,
    desc: desc.value,
}
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));

  // if(localStorage.getItem('products')){
    
  // }
  console.log(product);
  console.log(products);
  populateTable();
});

const populateTable = () => {
  tableBody.innerHTML = "";
  products.forEach((element) => {
    const row = document.createElement("tr");
    row.style.borderBottom = "thick solid #0000FF"
    row.classList.add("my-row");
    
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
  // container.classList.add("mystyle");
  const editButton = document.createElement("button");
  // editButton.classList.add("editbtn");
  editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
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
