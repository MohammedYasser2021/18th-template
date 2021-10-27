let user_info = document.querySelector(".user-info");
let user_dom = document.querySelector(".user");
let links = document.querySelector(".links");
let logout_btn = document.querySelector(".logout");

/* check if there are username in localstorage and add it to profile */
if(localStorage.getItem("username")){
    links.remove();
    user_dom.style.display = "block";
    user_info.innerHTML = localStorage.getItem("username");
}

/* log out button  */
logout_btn.addEventListener("click", function(e){
    e.preventDefault();

    localStorage.clear();
    setTimeout(function() {
        window.location = "register.html";
    }, 2000);
});