// variables
let createForm = document.querySelector(".create_form");
let productName = document.querySelector(".product_name");
let productDesc = document.querySelector(".product_desc");
let productSize = document.querySelector("#product_size");
let productCreate = document.querySelector(".product_create");
let inputFile = document.querySelector("#upload_image_file");
let productSizeValue;
let productImage;

// Events
productSize.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFunc);
inputFile.addEventListener("change", uploadImage)
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}

function createProductFunc(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("products")) || productsdb;
    let nameValue = productName.value;
     let descValue = productDesc.value;

    if((nameValue && nameValue !== "" ) && (descValue && descValue !== "")){
        let obj = {
            id: allProducts ? allProducts.length + 1 : 1,
            title: nameValue,
            imageUrl: productImage,
            desc: descValue,
            size: productSizeValue,
            quantity: 1,
            isMe: "yes"
        };
    
        let newProducts = allProducts ? [...allProducts, obj] : [obj];
        localStorage.setItem("products", JSON.stringify(newProducts));
        productName.value = "";
        productDesc.value = "";
        productSize.value = "";

        setTimeout(function(){
            window.location = "index.html";
        }, 1000);
    }else{
        alert("please enter data")
    }
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
