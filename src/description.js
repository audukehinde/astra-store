const itemNumber =document.getElementById("item-number")
const decrease =document.getElementById("decrease")
const increase =document.getElementById("increase")


const price = document.getElementById("price-number")


const mainPrice = 8250




 count = parseInt(itemNumber.innerHTML);
decrease.addEventListener("click", function() {
    count--;
    itemNumber.innerHTML = count;
    const newPrice = mainPrice * count

    console.log(`the price is ${price}`);
    console.log(`the price is ${newPrice}`);
    price.innerHTML = newPrice;

})


increase.addEventListener('click', ()=> {
    count++;
    itemNumber.innerHTML = count;
    const newPrice = mainPrice * count

    console.log(`the price is ${price}`);
    console.log(`the price is ${newPrice}`);
    price.innerHTML = newPrice;
})
function addtocart() {
alert("please add to cart")
let items = []
let item = {
    id : 1,
    name: "new item",
    imageUrl: "",
    description: "new item description",
    unitPrice: 800,
    quantity: 2,
    totalPrice: 16000
}


gg.push(item)

let stringedItems = JSON.stringify(items)

localStorage.setItem("cart", stringedItems);
}


