let userName = document.getElementById("username");
let password = document.getElementById("password");
let login_Btn = document.getElementById("signin");
let hintMessage = document.querySelector(".hint")

let getUserName = localStorage.getItem("username");
let getPassword= localStorage.getItem("password");

login_Btn.addEventListener("click", login);

function login (e){
        e.preventDefault();
        if(userName.value === "" || password.value === ""){
            hintMessage.style.display = "block";
            hintMessage.innerHTML = "please enter username and password"
        }else{
            if((username && getUserName.trim()  === userName.value.trim()) && (password&& getPassword.trim()  === password.value.trim())){
                hintMessage.style.display = "none";
                setTimeout(function() {
                    window.location = "index.html";
                }, 1500);
            }else{
                hintMessage.style.display = "block";
                hintMessage.innerHTML = "username or password is wrong"
            }
    }
}