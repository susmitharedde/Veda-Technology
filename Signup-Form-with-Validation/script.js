const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const strength = document.getElementById("strength");
const successMessage = document.getElementById("successMessage");

passwordInput.addEventListener("input", checkStrength);

function checkStrength(){

    const password = passwordInput.value;

    if(password.length==0){
        strength.innerHTML="";
        return;
    }

    if(password.length<6){
        strength.innerHTML="Weak";
        strength.style.color="red";
    }
    else if(password.length<8){
        strength.innerHTML="Medium";
        strength.style.color="orange";
    }
    else if(
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*]/.test(password)
    ){
        strength.innerHTML="Strong";
        strength.style.color="green";
    }
    else{
        strength.innerHTML="Medium";
        strength.style.color="orange";
    }

}

form.addEventListener("submit",function(e){

    e.preventDefault();

    nameError.innerHTML="";
    emailError.innerHTML="";
    passwordError.innerHTML="";
    successMessage.innerHTML="";

    let valid=true;

    const name=nameInput.value.trim();
    const email=emailInput.value.trim();
    const password=passwordInput.value;

    if(name==""){
        nameError.innerHTML="Name is required";
        valid=false;
    }
    else if(name.length<3){
        nameError.innerHTML="Name must be at least 3 characters";
        valid=false;
    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email==""){
        emailError.innerHTML="Email is required";
        valid=false;
    }
    else if(!emailPattern.test(email)){
        emailError.innerHTML="Invalid Email";
        valid=false;
    }

    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if(password==""){
        passwordError.innerHTML="Password is required";
        valid=false;
    }
    else if(!passwordPattern.test(password)){
        passwordError.innerHTML="Password must contain uppercase, lowercase, number and special character";
        valid=false;
    }

    if(valid){

        successMessage.innerHTML="Signup Successful!";

        form.reset();

        strength.innerHTML="";
    }

});