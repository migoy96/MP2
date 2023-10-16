//display number in cart icon
export function showQuantity(){
    let quantityList = document.getElementById("quantity");
    let bilang = 0;
    let quantity = JSON.parse(localStorage.getItem("order"));
    if (quantity == null || quantity == ""){
        quantityList.innerText = "";
    }else{
        quantity.forEach(
            () => {
                bilang += 1;
            }
        );
        quantityList.innerHTML = bilang;
    }
}

export function formatCurrency(value, currency){
    let userLanguage = window.navigator.language;
         return new Intl.NumberFormat(userLanguage,{
             style: "currency",
             currency: currency,
         }).format(value);
};

export function user(){
    let name = JSON.parse(sessionStorage.getItem("login"));
    console.log(name);
    let userName = document.getElementById("loginName");
    let startName = "";
    if(name) {
        console.log('test');
        name.forEach(
            (username) => {
                startName = ` Hi ${username.email}`;
            }
        )
    }

    userName.innerText = startName;   
}