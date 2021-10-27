// check if there are items in loacl storage
let cart = document.querySelector(".cart-products");
let cartProduct = document.querySelector(".cart-products div");
let badge = document.querySelector(".badge");
let shoppingCart = document.querySelector(".shopping-cart");
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
if(addedItem){
    addedItem.map((item) => {
        cartProduct.innerHTML += `<p>${item.title} ${item.quantity}</p>`
    });
    badge.style.display = "block";
    badge.innerHTML += addedItem.length;
}

// open cart menu
shoppingCart.addEventListener("click", openCartMenu);
function openCartMenu(){
    if(cartProduct.innerHTML !== ""){
        cart.classList.toggle("toggle");
    }
    
}