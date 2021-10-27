let products = JSON.parse(localStorage.getItem("products")) || productsdb;
let productsContainer = document.querySelector(".products");
let noProductsDiv = document.querySelector(".no-products");

// dispaly products 
let drawProductsUI; 
drawProductsUI = function drawProductsUI(products = []){
    let myProducts = products.filter((item) => item.isMe === "yes");
    if(myProducts.length !== 0){
        let productsUi = myProducts.map((item) => {
            return `
            <div class="product-item" style="border: ${item.isMe === "yes" ? "2px solid blue" : ""}">
            <img class="product-item-image" src="${item.imageUrl}" alt="product-one">
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <span>Size: ${item.size}</span>
                <button class='product_edit' onclick = 'editProduct(${item.id})'>Edit Product</button>
                <a onclick = "saveItemData(${item.id})">More Details</a>
            </div>
            <button class='product_delete' onclick = 'deleteProduct(${item.id})'>Delete Product</button>
        </div>
        `
        
        });
        productsContainer.innerHTML = productsUi.join("");
    }else{
         noProductsDiv.style.display = "block";
    }

}
drawProductsUI(JSON.parse(localStorage.getItem("products")) || productsdb);

// function edit product
function editProduct(id){
    localStorage.setItem("editproductID", id);
    window.location = "edit_product.html";
}

// function save item id in local storage
function saveItemData(id){
    localStorage.setItem("productId", id);
    window.location = "cart-details.html";
}

// function delete product

function deleteProduct(id){
    let products = JSON.parse(localStorage.getItem("products")) || productsdb;
    let myProducts = products.filter((item) => item.isMe === "yes");
    let filteredProducts = myProducts.filter((item) => item.id !== id);
    
    drawProductsUI(filteredProducts);
    let clickedItem = myProducts.find((item) => item.id === id);
    products = products.filter((item) => item.id !== clickedItem.id);
    localStorage.setItem("products", JSON.stringify(products));
}