const itemNumber =document.getElementById("item-number")
const decrease =document.getElementById("decrease")
const increase =document.getElementById("increase")


const price = document.getElementById("price-number")


const mainPrice = 8250




let count = 0;
decrease.addEventListener("click", function() {
    count--;
    itemNumber.innerHTML = count;
    const newPrice = mainPrice / count

    price.innerHTML = newPrice;
    console.log(`the price is ${price}`);

})


increase.addEventListener('click', ()=> {
    count++;
    itemNumber.innerHTML = count;
    const newPrice = mainPrice * count

    console.log(`the price is ${price}`);
    console.log(`the price is ${newPrice}`);
    price.innerHTML = newPrice;
})

