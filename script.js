const userName = document.getElementById("username");
const userError = document.querySelector(".usertext");

const email = document.getElementById("email");
const emailError = document.querySelector(".emailtext");

const phone = document.getElementById("phone");
const phoneError = document.querySelector(".phonetext");

const password = document.getElementById("password");
const passwordError = document.querySelector(".passtext");

const confirmPassword = document.getElementById("c-password");
const confirmError = document.querySelector(".confirmtext");


function userValidate() {
    if (userName.value.length < 3) {
        userError.textContent = "Username is too short";
        return false;
    }
    else if (userName.value.length > 15) {
        userError.textContent = "Username is too long";
        return false;
    }

    else if (userName.value.trim() == "") {
        userError.textContent = "Username can't be empty";
        return false;
    }
    else {
        userError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function emailValidate() {
    const regX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if (!regX.test(email.value)) {
        emailError.textContent = "Enter a valid email";
        return false;
    }
    else {
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}


function phoneValidate() {
    const regx = /^[0-9]{10}$/;
    if (!regx.test(phone.value)) {
        phoneError.textContent = "Enter a valid number";
        return false;
    }
    else {
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function passwordValidate() {
    if (password.value.length < 8) {
        passwordError.textContent = "It should 8 character";
        return false;
    }

    else if (password.value == userName.value) {
        passwordError.textContent = "Cannot be same as username";
        return false;
    }
    else {
        passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function confirmValidate(){
    if (password.value != confirmPassword.value){
        confirmError.textContent = "It does not match";
        return false;
    }
    else {
        confirmError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function validate(){
    if(!userValidate() || !passwordValidate() || !emailValidate() || !phoneValidate() || !confirmValidate()){
        return false;
    }
    else{
        return true
    }
}


