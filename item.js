console.log('inside purchase.js');

let arrow_left = document.querySelector('.arrow-left');
let arrow_right = document.querySelector('.arrow-right');
let slider = document.querySelector('.catagories-slider');
let shopping_cart = document.querySelector('.shopping-cart');
let shopping_mini = document.querySelector('.main-shopping-mini');


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