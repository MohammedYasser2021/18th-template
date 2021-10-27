// variables
let products = JSON.parse(localStorage.getItem("products")) || productsdb;
let productID = JSON.parse(localStorage.getItem("editproductID"));
let getProduct = products.find((item) => item.id === productID);
let updateForm = document.querySelector(".update_form");
let productName = document.querySelector(".product_name");
let productDesc = document.querySelector(".product_desc");
let productSize = document.querySelector("#product_size");
let inputFile = document.querySelector("#upload_image_file");
let productSizeValue;
let productImage;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSize.value = getProduct.size;
productImage = getProduct.imageUrl;

// Events
 productSize.addEventListener("change", getProductSizeValue);
 updateForm.addEventListener("submit", updateProductFunc);
 inputFile.addEventListener("change", uploadImage)

// functions
 function getProductSizeValue(e){
    productSizeValue = e.target.value;
 }

function updateProductFunc(e){

    e.preventDefault();

    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productSize.value;
    getProduct.imageUrl = productImage;

    localStorage.setItem("products", JSON.stringify(products));

    setTimeout(function(){
        window.location = "index.html";
    }, 1000);

}

function uploadImage(){
    let file = this.files[0];
    getImageBase64(file)
    let types = ["image/jpeg", "image/jpg", "image/png"];
       if(types.indexOf(file.type) === -1){
           alert("type is not supported");
           return;
       }


    if(file.size > 2 * 1024 * 1024){
        alert("size is very large");
        return;
    }
    productImage = URL.createObjectURL(file);

}

function getImageBase64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        productImage = reader.result;
    }
    reader.onerror = function(){
        alert("ERROR");
    }
}
