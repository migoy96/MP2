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
    let error = document.getElementById("registerError");
    let newUser = {
        username: newUsername,
        password: newPassword
    }

    if(newUsername == null || newUsername == ""){
        error.innerHTML = `<b style="font-size: 14pt;">Please fill up your email and username</b>`;
        return
    }if(newPassword == null || newPassword == ""){
        error.innerHTML = `<b style="font-size: 14pt;">Please fill up your password</b>`;
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
        error.innerHTML = `<b style="font-size: 14pt;">Please register to Log-in</b>`;
    }
    
    if(username != newArray[0].username || username.length != newArray[0].username.length){
        error.innerHTML = `<b style="font-size: 14pt;">Username doesn't match</b>`;
        return
    }if(password != newArray[0].password || password.length != newArray[0].password.length){
        error.innerHTML = `<b style="font-size: 14pt;">Password doesn't match</b>`;
        return
    }else{
        window.location.href = "catalogue.html";
    }
}

function showUsername(){
    let array = JSON.parse(sessionStorage.getItem("login"));
    let username = document.getElementById("log_username");

    if(array == null || array == ""){
        username.value = "";
    }else{
        username.value = `${(array[0].username)}`;
    }
    
}

showUsername();