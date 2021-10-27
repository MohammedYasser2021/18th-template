let productsContainer = document.querySelector(".products");
let noProductsDiv = document.querySelector(".no-products");

function drawCartProductsUI(allProducts = []){

    if(JSON.parse(localStorage.getItem("productsInCart")).length === 0){
        noProductsDiv.style.display = "block"
    }
    let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
    let productsUi = products.map((item) => {
        return `
        <div class="product-item">
        <img class="product-item-image" src="${item.imageUrl}" alt="product-one">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span>Size: ${item.size}</span>
            <span>Quanity: ${item.quantity}</span>
            <a onclick = saveItemData(${item.id})>More Details</a>
        </div>
        <div class="product-item-actions">
            <button class="add-to-cart" onclick = "removeItemFromCart(${item.id})">Remove From Cart</button>
        </div>
    </div>
    `
    
    });
    productsContainer.innerHTML = productsUi.join("");
}
drawCartProductsUI();
// remove items 

function removeItemFromCart(id){
    
    if(localStorage.getItem("productsInCart")){
            let items = JSON.parse(localStorage.getItem("productsInCart"));

            let filteredItems = items.filter((item) => item.id !== id);

            localStorage.setItem("productsInCart", JSON.stringify(filteredItems));

            drawCartProductsUI(filteredItems);
            
    }
}