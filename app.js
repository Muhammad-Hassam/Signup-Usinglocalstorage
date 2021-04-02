var email = document.getElementById("email");
var password = document.getElementById("password");
var error = document.getElementById("error");
var success = document.getElementById("success");
var users=[];
var user;
function onSingup() {
    error.innerHTML = "";
    success.innerHTML = "";
    var getUsersFromStorage = localStorage.getItem("users");
    users = JSON.parse(getUsersFromStorage)
    var isEmailExist = false;
    if (!users) {
        users = []
    }
    // set a flag
    for (let i = 0; i < users.length; i++) {
        user = users[i];
        // checking email exist or not
        if (user.email === email.value) {
            // email exist
            isEmailExist = true;
            break;
        }
    }
    if (isEmailExist) {
        error.innerHTML = email.value + " Already exist";
    } else {
        users.push({
            email: email.value,
            password: password.value,
        });
        localStorage.setItem("users", JSON.stringify(users));
        success.innerHTML = "Account create successfully";
    }

}


function onSingIn(){
    error.innerHTML = "";
    success.innerHTML = "";
    var getUsersFromStorage = localStorage.getItem("users");
    var users = JSON.parse(getUsersFromStorage);
    var isEmailExist = false;
    for (var i = 0; i < users.length; i++) {
    if(email.value===users[i].email){
        isEmailExist=true;
        break;
    }
} 
if(isEmailExist){
    success.innerHTML = "Account SignIn successfully";
  
}
else{
    error.innerHTML =  email.value+ "Invalid user";
    console.log("Invaliduser");
}

}