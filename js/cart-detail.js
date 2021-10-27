let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");
let productDetailsItem = products.find((item) => item.id == productId);

itemDom.innerHTML = `
<img  src="${productDetailsItem.imageUrl}" alt="product">
<h2>${productDetailsItem.title}</h2>
<p>${productDetailsItem.desc}</p>
<span>Size: ${productDetailsItem.size}</span>
<span>Quantity: ${productDetailsItem.quantity}</span>
<button class="prod_edit" onclick = editProduct(${productId})>Edit Product</button>
`

function editProduct(id){
    localStorage.setItem("editproductID", id);
    window.location = "edit_product.html";
}
