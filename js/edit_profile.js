// Get Data from local storage
let username = localStorage.getItem("username");
let email = localStorage.getItem("email");

// variables 
let profile_user_Input = document.querySelector("#changeName");
let profile_email_Input = document.querySelector("#changeEmail");
let profileEditForm = document.querySelector("#profile_edit_form");
let editProfileImage = document.querySelector("#edit_image");
let profileImage;

profile_user_Input.value = username;
profile_email_Input.value = email;

profileEditForm.addEventListener("submit", editFormFunc);
editProfileImage .addEventListener("change", uploadImage);


function editFormFunc(e){

    e.preventDefault();
    localStorage.setItem("username", profile_user_Input.value);
    localStorage.setItem("email", profile_email_Input.value);
    localStorage.setItem("profileImage", profileImage)

    setTimeout(function(){
        window.location = "profile.html";
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
    profileImage = URL.createObjectURL(file);

}

function getImageBase64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        profileImage = reader.result;
    }
    reader.onerror = function(){
        alert("ERROR");
    }
}


