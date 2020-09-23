// const { parse } = require("dotenv/types");

console.log('inside cart-main.js');

let memory = JSON.parse(localStorage.getItem('itemsArray'));
let memoryArray = Array.from(memory);

console.log(memoryArray.length,'memory array');

let totalItems = localStorage.getItem('total-items');
let totalItemText = document.querySelector('.count-text');
let widget_container = document.querySelector('.widget-contaier');
let total_pay = document.querySelector('.total-pay');
let save_change_pop_up = document.querySelector('.main-pop-up');
let continue_pay_btn = document.querySelector('.continue-button')
let totalPay;


console.log(total_pay,'total_pay');
console.log(totalItems,'total-items');
console.log(memory,'memory');
console.log(localStorage.getItem('total-items'));


totalItemText.innerHTML = totalItems + ' items ' 
// for(item of memory){
//     console.log(memory[item],'item')
// }

for(let [key,value] in memory){
    console.log(memory[key][value],'item');
}

// create element for item dynamically which depends upon number of items selected
for(let i = 0; i<memory.length;i++){


let item_widget = document.createElement('div');
item_widget.classList.add('items-widget');
item_widget.setAttribute('data-item-id',memory[i].id)
widget_container.appendChild(item_widget);
// add image element
let item_image = document.createElement('img');
item_image.classList.add('item-image');
item_image.setAttribute('src',memory[i].src);
item_widget.appendChild(item_image);

// create a anchor tag
let item_def = document.createElement('a');
item_def.setAttribute('href','#');
item_def.classList.add('item-def');
item_widget.appendChild(item_def);
// create a p tag inside anchor tag
let item_def_text = document.createElement('p');
item_def_text.classList.add('item-def-text');
item_def_text.innerHTML = memory[i].text;
item_def.appendChild(item_def_text);

// create a container of price details

let price_details = document.createElement('div');
price_details.classList.add('price-details');
item_widget.appendChild(price_details);

//create 3 p tag inside price detail container
let model_no = document.createElement('p');
let price = document.createElement('p');
let item_size = document.createElement('p');

model_no.classList.add('model-no');
price.classList.add('price');
item_size.classList.add('item-size');
item_size.innerHTML = memory[i].size;

price.innerHTML = memory[i].price;
model_no.innerHTML = memory[i].model_no;

price_details.appendChild(model_no);
price_details.appendChild(price);
price_details.appendChild(item_size);

// create a item quantitiy tool container

let item_quantity_tool = document.createElement('div');
item_quantity_tool.classList.add('item-quantity-tool');
item_widget.appendChild(item_quantity_tool);

//create minus container inside item quantity tool

let minus = document.createElement('div');   
minus.classList.add('minus');
item_quantity_tool.appendChild(minus);

minus.addEventListener('click', e => {
    console.log(' minus clicked');
    let costOfProduct = parseInt((e.path[2].childNodes[2].childNodes[1].childNodes[0].data).replace('$',''));
    if(memory[i].quantity >1){
    // let quantity = memory[i].quantity
    // --quantity;
    memory[i].quantity --;
    total_quantity.innerHTML = memory[i].quantity;
    updateTotalPrice(costOfProduct,'decrement');
}
})

// create a hr container

let hr_after_minus = document.createElement('div');
hr_after_minus.classList.add('hr-after-minus');
item_quantity_tool.appendChild(hr_after_minus);

// create a quantity container

let quantity = document.createElement('div');
quantity.classList.add('quantity');
item_quantity_tool.appendChild(quantity);

// create a span tag inside quantity
let total_quantity = document.createElement('div');
total_quantity.classList.add('total-quantity');
total_quantity.innerHTML = memory[i].quantity;
quantity.appendChild(total_quantity);

//create a plus container

let plus = document.createElement('div');   
plus.classList.add('plus');
item_quantity_tool.appendChild(plus);

plus.addEventListener('click', e => {
    let costOfProduct = parseInt((e.path[2].childNodes[2].childNodes[1].childNodes[0].data).replace('$',''));
    console.log(typeof(costOfProduct),'costOfProduct');
    console.log(e.path[2].childNodes[2].childNodes[1].childNodes[0].data, 'e');
    if(memory[i].quantity <= 10){
    memory[i].quantity ++;
    total_quantity.innerHTML = memory[i].quantity; 
    updateTotalPrice(costOfProduct,'increment');
} 

})

//create a hr plus container
let hr_after_plus = document.createElement('div');
hr_after_plus.classList.add('hr-before-plus');
item_quantity_tool.appendChild(hr_after_plus);

// creat a delete button

let delete_button = document.createElement('div');
delete_button.classList.add('delete-button');
item_widget.appendChild(delete_button);



// create a span tag inside delete container

let delete_text = document.createElement('span');
delete_text.classList.add('delete-text');
delete_text.innerHTML = 'delete';
delete_button.appendChild(delete_text);

// console.log(delete_button,'delete button')


// delete item widget by single click

delete_button.addEventListener('click', e => {
    console.log('clicked');
    let container = e.path[2].childNodes[2].children[1].childNodes[0].data;
    let containerPrice = container.replace('$','')
    console.log(containerPrice,'containerNew');

    deleteItemWidget(item_widget);
    integerPrice -=  parseInt(containerPrice);
    total_pay.innerHTML = `$ ${integerPrice}.00`;
    console.log(integerPrice,'integer price');
    
})  

function deleteItemWidget(item_widget){
    setTimeout(() => {
        save_change_pop_up.style.display = 'none';
    }, 800);
    save_change_pop_up.style.display = 'block';
    item_widget.remove();
    totalItemText.innerHTML = --totalItems + ' Items';
}

console.log(widget_container,'widget container');

}


let totalItemPrice = document.querySelectorAll('.price');
let arrayPrice = Array.from(totalItemPrice);
console.log(arrayPrice,'ArrayPrice');
let priceItems = '';
let integerPrice = 0;

for(let i = 0; i<arrayPrice.length;i++){
    
    totalPay = arrayPrice[i].innerHTML;  
    for(let i = 0; i<totalPay.length; i++){
        priceItems += totalPay.charAt(i);

    }
    console.log(priceItems,'priceItems');   
    integerPrice += parseInt(priceItems);
    priceItems = '';

    console.log(integerPrice,'integer price');   
    console.log(arrayPrice[i].innerHTML,'innerHtml');
    console.log(totalPay,'totalpay');
}

// assign total price

total_pay.innerHTML = `$ ${integerPrice}.00`;

// let deleteItemsWidget = document.querySelectorAll('.delete-button');
// let deleteItemsWidgetArray = Array.from(deleteItemsWidget);
// console.log(deleteItemsWidget,'delete items widget');
// console.log(deleteItemsWidgetArray,'deleteItemsWidgetArray');

// deleteItemsWidgetArray.addEventListener('click', e=> {
//     console.log('click');
// })

//path[2].childNodes[2].children[1].childNodes[0].data

// add event on Plus and Minus button

// let plusButton = document.querySelectorAll('.plus');
// let minusButton = document.querySelectorAll('.minus');
// let plusButtonArray = Array.from(plusButton);
// let minusButtonArray = Array.from(minusButton);



// console.log(plusButtonArray,' plus button');
// console.log(minusButtonArray,' minus button');

// plusButtonArray.addEventListener('click', e => {
//     console.log(' plus button is clicked');
// })

// minusButtonArray.addEventListener('click', e => {
//     console.log(' minus button is clicked');
// })


function updateTotalPrice(costOfProduct,value){
    if(value=== 'increment'){
    integerPrice += costOfProduct;
    total_pay.innerHTML = `$ ${integerPrice}.00`;
    } else if(value ==='decrement'){
        integerPrice -= costOfProduct;
        total_pay.innerHTML = `$ ${integerPrice}.00`;  
    }
}

continue_pay_btn.addEventListener('click', payRequest);


    
           
function payRequest(){
    console.log('continue button is clicked');
    // alert('You have been initiated to purchasing items.Thank You!')

    
    let items = []
    let item = document.getElementsByClassName('items-widget');
    
    for(let i =0; i < item.length; i++){
        console.log(item[i],'item');
        let quantityElement = document.getElementsByClassName('total-quantity');
        let quantity = quantityElement[i].innerText;
        let idElement = document.getElementsByClassName('items-widget')
        let id = idElement[i].dataset.itemId
        let nameElement = document.getElementsByClassName('item-def-text')
        let name = nameElement[i].innerHTML;
        // console.log(quantityElement,'quantityElement')
        // console.log(quantitiy,'quantitiy')
        // console.log(id,'id');
        items.push({
            id:id,
            name:name,
            quantity:quantity
        })
    }

    fetch('/create-checkout-session', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           
            items: items
        })
    })
    .then(function(res){
                 console.log(res,'response in cart-main')
                 let response = res.json();
                 console.log(response,'response')
                 return response;
            }).then(function(data){
                console.log(data,'data')
                // alert(data.message);
                stripe.redirectToCheckout({sessionId:data.sessionId}).then(handleresult)
            }).catch(function(error){
                console.error(error,'errrr')
            })
            console.log(items,'itemssssss')

            let priceElement = document.getElementsByClassName('total-pay')[0]
            let price = parseFloat(priceElement.innerText.replace('$','')) * 100
            console.log(priceElement,'price element');
        }
        
        const handleresult = {
            if(error){
                console.log(error,'error in if')
            }
   





   
    // stripeHandler.open({
    //     amount:price
    // })
}

// let widget = document.getElementsByClassName('items-widget')
// // let quantityElement = getElementsByClassName('item-quantity-tool')
// // console.log(quantityElement,'quantity element')
// console.log(widget,'widget')
// for(let i = 0; i<widget.length; i++){
//     console.log(widget[i],'console i')
// }