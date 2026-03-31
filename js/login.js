
function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    email = email.trim();
    password = password.trim();
    if (email === "admin" && password === "admin"){
        return true;
    } else {
        return false;
    }
}