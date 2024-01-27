// get total

let title = document.getElementById("title");
let price = document.getElementById("price");
let texes = document.getElementById("texes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let category = document.getElementById("category");
let totle = document.getElementById("total");
let submit = document.getElementById("submit");

function sumTotal () {
    if (price.value != "")
    {
        totle.innerHTML = (+price.value + +texes.value + +ads.value) - +discount.value
        totle.style.backgroundColor = "#09e700"

    }else {
        totle.innerHTML = ""
        totle.style.backgroundColor = "#cb0046"
    }

}



// create product حلقة #4

let datapro = [];
if (localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = [];
}



submit.onclick = function(){
    let newPro = {
        title : title.value, 
        price : price.value, 
        texes : texes.value, 
        ads : ads.value, 
        discount : discount.value, 
        count : count.value, 
        category : category.value,
        totle : totle.innerText, 
    }

    datapro.push(newPro)



// save localstorag

    localStorage.setItem('product' , JSON.stringify(datapro))

    clearData()

    showData()
   
}


// clear inputs

function clearData(){
    title.value = '';
    price.value = '';
    texes.value = '';
    ads.value = '';
    discount.value = '';
    count.value = '';
    category.value = '';
    totle.innerHTML = '';

}

// read  data

function showData() {
    let table = ''
    for(let i=0 ; i < datapro.length ; i++) {
        table += `
        <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].texes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].totle}</td>
        <td>${datapro[i].category}</td>
        
        <td><button id="update">update</button></td>
        <td><button id="delete">delete</button></td>
    </tr>
        `
        document.getElementById("shData").innerHTML = table

    }
}