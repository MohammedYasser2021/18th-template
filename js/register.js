let userNameInp = document.getElementById("username");
let passInp = document.getElementById("password");
let emailInp = document.getElementById("email");
let registerInp = document.getElementById("signup");
let hintMessage = document.querySelector(".hint");

registerInp.addEventListener("click", register);

function register(e){
    e.preventDefault();
    if(userNameInp.value === "" || passInp.value === "" || emailInp.value === ""){
        hintMessage.style.display = "block";
        hintMessage.innerHTML = "please enter your personal information"
    }else if(emailInp.value.indexOf("@") === -1 || passInp.value.length < 10){
        hintMessage.style.display = "block";
        hintMessage.innerHTML = "please enter valid information";
    }
    else{
        
        hintMessage.style.display = "none";
        localStorage.setItem("username", userNameInp.value);
        localStorage.setItem("password", passInp.value);
        localStorage.setItem("email", emailInp.value);

        setTimeout(function(){
            window.location = "login.html";
        }, 1500);
    }
}