console.log('inside purchase.js');

let arrow_left = document.querySelector('.arrow-left');
let arrow_right = document.querySelector('.arrow-right');
let slider = document.querySelector('.catagories-slider');
let shopping_cart = document.querySelector('.shopping-cart');
let shopping_mini = document.querySelector('.main-shopping-mini');
let item_main = document.querySelector('.item-main');

item_main.addEventListener('click', e => {
    console.log('item is clicked',e);
    // let id = e.path[0].alt;
    // console.log(id,'id');
    // window.location.href="/public/item-cart.html";
    // item_main.appendChild('a').href="/public/item-cart.html"
})



shopping_cart.addEventListener('mouseover', e=> {
    console.log('mouseover');
    shopping_mini.style.display= 'block';
    shopping_mini.style.position = 'absolute';
    shopping_mini.style.right= '5px';
    shopping_mini.style.zIndex= '2';
    shopping_mini.style.marginTop= '0px';
})

shopping_cart.addEventListener('mouseout', e=> {
    console.log('mouseover');
    shopping_mini.style.display= 'none';
})

console.log(slider,'slider');
arrow_left.addEventListener('click', e => {
    console.log('left clicked');
    slider.scrollBy(-50,0)
})

arrow_right.addEventListener('click', e => {
    console.log('right clicked');
    slider.scrollBy(50,0)
})