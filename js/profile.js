// Get Data from local storage
let username = localStorage.getItem("username");
let email = localStorage.getItem("email");

// variables 
let profile_user = document.querySelector(".profile_name");
let profile_email = document.querySelector(".profile_email");
let productsLength = document.querySelector(".products_number span");
let products = JSON.parse(localStorage.getItem("products")) || productsdb;
let myProducts = products.filter((item) => item.isMe === "yes");


profile_user.innerHTML = username;
profile_email.innerHTML = email;
if(myProducts.length !== 0){
    productsLength.innerHTML = myProducts.length
}else{
    productsLength.innerHTML = "You Not Have Products"
}

 let profileImage = document.querySelector(".user_avatar");
 profileImage.src = localStorage.getItem("profileImage")
