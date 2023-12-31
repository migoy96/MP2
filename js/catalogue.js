// import { formatCurrency, user, showQuantity } from './utils.js';

let dataSources = {
    "Mens Soles" : "https://migoy96.github.io/MP2/data/mensapi.js",
    "Womens Soles" : "https://migoy96.github.io/MP2/data/womenapi.js",
    "Kids Soles" : "https://migoy96.github.io/MP2/data/kidsapi.js",
    "Basketball Soles" : "https://migoy96.github.io/MP2/data/runningapi.js",
    "Running Soles" : "https://migoy96.github.io/MP2/data/basketballapi.js"
}

function catalogueTitles(){
    const category = localStorage.getItem("category");
    let title = `${category}`;
    let catalogueName = document.getElementById("catalogueTitle");
    catalogueName.innerText = title;
}

let shoes = [];

function addToCart(index){
    let logIn = JSON.parse(sessionStorage.getItem("login"));
    //reference to current shoe
        let shoe = shoes[index];
        let itemArray = JSON.parse(localStorage.getItem("order"));
        let orderList = itemArray || [];


    if(logIn == null){
        alert(`Please Log-In to proceed your order.`);
        window.location.replace("login.html");
    }else{
        orderList.push({id: shoe.id, product: shoe.product, price: shoe.price, img: shoe.img, category: shoe.category});
        localStorage.setItem("order", JSON.stringify(orderList));
        showQuantity();
        showModal();
    }    
}

function showModal(){
    let modal = document.getElementById("addedModal");
    modal.style.display = "block";
}

function closeModal(){
    let modal = document.getElementById("addedModal");
    modal.style.display = "none";
}


function initialize() {
    const category = localStorage.getItem("category");
    document.title = `${category}`;
    const url = dataSources[category];
    fetch(url)
    .then(response => response.json())  //object fetching
    .then(result => {
        shoes = result;
        let cards = "";
        let cardsArea = document.getElementById("cards");
        result.forEach((shoe, index) => {
            cards += `<div class="card d-inline-flex m-2">
                    <img src="${shoe.img}" id="image${shoe.id}" class="card-img-top" alt="${shoe.product}">
                    <div class="card-body">
                    <h5 class="card-title fs-6 fw-bolder" id="product${shoe.id}">${shoe.product}</h5>
                    <p class="card-text" id="price${shoe.id}">${formatCurrency(shoe.price, "php")}</p>
                    <a class="btn btn-secondary" id="${shoe.id}" onclick="addToCart(${index})">Add to Cart</a>
                    </div>
                    </div>`
        });
        cardsArea.innerHTML = cards;
    })
}

function showQuantity(){
    let quantityList = document.getElementById("quantity");
    let bilang = 0;
    let quantity = JSON.parse(localStorage.getItem("order"));
    if (quantity == null || quantity == ""){
        quantityList.innerText = 0;
    }else{
        quantity.forEach(
            () => {
                bilang += 1;
            }
        );
        quantityList.innerHTML = bilang;
    }
}

function formatCurrency(value, currency){
    let userLanguage = window.navigator.language;
         return new Intl.NumberFormat(userLanguage,{
             style: "currency",
             currency: currency,
         }).format(value);
};

function user(){
    let name = JSON.parse(sessionStorage.getItem("login"));
    let userName = document.getElementById("loginName");
    let startName = "";
    if(name) {
        name.forEach(
            (username) => {
                startName = ` Hi ${username.username}`;
            }
        )
    }

    userName.innerText = startName;   
}


function loginBtn(){
    let user = JSON.parse(sessionStorage.getItem("login"));

    if(user == null || user == ""){
        window.location.href = "login.html";
    }else{
        alert(`Already Logged In, Please Log-out to Proceed on other account`);
    }   
}



catalogueTitles();
user();
initialize();
showQuantity();
