let login_array = [];


let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.loglink');
let registerLink = document.querySelector('.reglink');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

function registerUser(){
    let newUsername = document.getElementById("reg_username").value;
    let newPassword = document.getElementById("reg_password").value;
    let newUser = {
        username: newUsername,
        password: newPassword
    }

    if(newUsername == null || newUsername == ""){
        alert(`Please fill up all required details`);
        return
    }if(newPassword == null || newPassword == ""){
        alert(`Please fill up all required details`);
        return
    }else{
        login_array.push(newUser);
        sessionStorage.setItem("login", JSON.stringify(login_array));
        alert(`Thank you for your registration`);
        window.location.href = "login.html";
    } 
}


function loginUser(){
    let newArray = JSON.parse(sessionStorage.getItem("login"));
    let username = document.getElementById("log_username").value;
    let password = document.getElementById("log_password").value;
    let error = document.getElementById("loginError");

    if(newArray == null || newArray == ""){
        error.innerHTML = `Please register to Log-in`;
    }
    
    if(username != newArray[0].username || username.length != newArray[0].username.length){
        error.innerHTML = `Username doesn't match`;
        return
    }if(password != newArray[0].password || password.length != newArray[0].password.length){
        error.innerHTML = `Password doesn't match`;
        return
    }else{
        window.location.href = "catalogue.html";
    }
}