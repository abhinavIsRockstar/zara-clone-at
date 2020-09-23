console.log('inside shopping mini.js');

let shopping_cart = document.querySelector('.shopping-cart')

shopping_cart.addEventListener('mouseover', e => {
    let shopping_main = document.querySelector('.main-shopping-mini');
    shopping_main.style.display = 'block'
})
shopping_cart.addEventListener('mouseout', e => {
    let shopping_main = document.querySelector('.main-shopping-mini');
    shopping_main.style.display = 'none'
})