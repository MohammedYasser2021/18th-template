let getLang = localStorage.getItem("lang");

if(getLang){
    if(getLang === "rtl"){
        changeLang("rtl");
    }else{
        changeLang("ltr");
    }
}
/* Define Products */
let productsContainer = document.querySelector(".products");
let products = JSON.parse(localStorage.getItem("products")) || productsdb;

// display products
let drawProductsUI; 
 drawProductsUI = function drawProductsUI(products = []){
    let productsUi = products.map((item) => {
        return `
        <div class="product-item" style="border: ${item.isMe === "yes" ? "2px solid blue" : ""}">
        <img class="product-item-image" src="${item.imageUrl}" alt="product-one">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span>Size: ${item.size}</span>
            ${item.isMe === "yes" ? "<button class='product_edit' onclick = 'editProduct("+ item.id +")'>Edit Product</button>" : ""}
            <a onclick = "saveItemData(${item.id})">More Details</a>
        </div>
        <div class="product-item-actions">
            <button class="add-to-cart" onclick = "addedToCart(${item.id})">Add To Cart</button>
            <i onclick = "addedToFavourite(${item.id})" class="fa fa-heart" style ="color: ${item.liked == true ? "red" : ''}"></i>
        </div>
    </div>
    `
    
    });
    productsContainer.innerHTML = productsUi.join("");
}
drawProductsUI(JSON.parse(localStorage.getItem("products")) || products);


// add to cart function
function addedToCart(id){
    if(localStorage.getItem("username")){
        let product = products.find((item) => item.id === id);
        let isProductInCart = addedItem.some((el) => el.id === product.id);
        if(isProductInCart){
            addedItem = addedItem.map((p) => {
                if(p.id = product.id) p.quantity += 1;
                    return p;
            });
        }else{
            addedItem.push(product);
        }
        cartProduct.innerHTML = "";
        addedItem.forEach((item) => {
             cartProduct.innerHTML += `<p>${item.title} <span class="item-quantity">${item.quantity}</span></p>`;
        })
        // Save Data
        localStorage.setItem("productsInCart", JSON.stringify(addedItem));
        // add counter of items
        let cartProductItems = document.querySelectorAll(".cart-products div p");
        badge.style.display = "block";
        badge.innerHTML = cartProductItems.length;
    }else{
        setTimeout(function() {
            window.location = "login.html";
        }, 1500);
    }

} 

function getUniqueArr(arr, filterType){
    let unique = arr.map((item) => item[filterType])
    .map((item, index, arr) => arr.indexOf(item) === index && index)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
    return unique;
}

// function save item id in local storage
function saveItemData(id){
    localStorage.setItem("productId", id);
    window.location = "cart-details.html";
}

// function search for items
 let searchInp = document.querySelector("#search");
 searchInp.addEventListener("keyup", function(e){
   if(e.target.value !== ""){
        search(e.target.value, products);
   }else{
        drawProductsUI(products);
   }
 });

function search(title, myArr){
    let element = myArr.filter((el) => el.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductsUI(element);
}


// add to favourite
let favouriteItems = localStorage.getItem("favouriteProducts") ? JSON.parse(localStorage.getItem("favouriteProducts")) : [];
function addedToFavourite(id){
    
    if(localStorage.getItem("username")){
        let chosenItem = products.find((item) => item.id === id);
        chosenItem.liked = true;
        favouriteItems = [...favouriteItems, chosenItem];
        let uniqueProducts = getUniqueArr(favouriteItems, "id");
        localStorage.setItem("favouriteProducts", JSON.stringify(uniqueProducts));
        products.map((item) => {
            if(item.id === chosenItem.id){
                item.liked = true;
            }
        });
        localStorage.setItem("products", JSON.stringify(products));
        drawProductsUI(products);
    }else{
        setTimeout(function() {
            window.location = "login.html";
        }, 1500);
    }

} 

// filter by size 

let sizeSelect = document.querySelector("#size_filter");

sizeSelect.addEventListener("change", filterBySize);

function filterBySize(e){
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem("products")) || productsdb;
    if (val === "all"){
        drawProductsUI(products);
    }else{
        products = products.filter((el) => el.size === val);
        drawProductsUI(products);
    }
}


// edit product 

function editProduct(id){
    localStorage.setItem("editproductID", id);
    window.location = "edit_product.html";
}

// change lang of page
let lang_en = document.getElementById("lang_en");
let lang_ar = document.getElementById("lang_ar");

lang_en.addEventListener("click", () => changeLang("ltr"));
lang_ar.addEventListener("click", () => changeLang("rtl"));

function changeLang(dir){
    document.documentElement.setAttribute("dir", dir);
    localStorage.setItem("lang", dir)
}

