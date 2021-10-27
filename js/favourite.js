let productsContainer = document.querySelector(".products");
let noProductsDiv = document.querySelector(".no-products");

function drawFavouriteProductsUI(allProducts = []){

    if(JSON.parse(localStorage.getItem("favouriteProducts")).length === 0){
        noProductsDiv.style.display = "block"
    }
    let products = JSON.parse(localStorage.getItem("favouriteProducts")) || allProducts;
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
            <button class="add-to-cart" onclick = "removeItemFromFavorite(${item.id})">Remove From Favourite</button>
        </div>
    </div>
    `
    
    });
    productsContainer.innerHTML = productsUi.join("");
}
drawFavouriteProductsUI();
// remove items 

function removeItemFromFavorite(id){
    if(localStorage.getItem("favouriteProducts")){
            let items = JSON.parse(localStorage.getItem("favouriteProducts"));

            let filteredItems = items.filter((item) => item.id !== id);

            localStorage.setItem("favouriteProducts", JSON.stringify(filteredItems));

            drawFavouriteProductsUI();
            
    }
}