

console.log('inside item-cart.js');


let arrow_left = document.querySelector('.arrow-left');
let arrow_right = document.querySelector('.arrow-right');
let slider = document.querySelector('.catagories-slider');
let shopping_cart = document.querySelector('.shopping-cart');
let shopping_mini = document.querySelector('.main-shopping-mini');
let view_less = document.querySelector('.view-less');
let size_guide_list_item = document.querySelectorAll('.size-guide-list-item');
let size_guide_list_item_array = Array.from(size_guide_list_item);
console.log(size_guide_list_item_array,'size_guide_list_item_array')
let size_guide_list = document.querySelector('.size-guide-list');
let button_add_list = document.querySelector('.size-guide-button');
let itemsArray = []


console.log(size_guide_list,'size_guide_list')


shopping_cart.addEventListener('mouseover', e=> {
   // console.log('mouseover');
    shopping_mini.style.display= 'block';
    shopping_mini.style.position = 'absolute';
    shopping_mini.style.right= '5px';
    shopping_mini.style.zIndex= '2';
    shopping_mini.style.marginTop= '0px';
    document.querySelector('.main-shopping-mini').style.zIndex = 2 
})

shopping_cart.addEventListener('mouseout', e=> {
    console.log('mouseover');
    shopping_mini.style.display= 'none';
       document.querySelector('.main-shopping-mini').style.zIndex = 0 
})

console.log(slider,'slider');

// arrow_left.addEventListener('click', e => {
//     console.log('left clicked');
//     slider.scrollBy(-50,0)
// })

// arrow_right.addEventListener('click', e => {
//     console.log('right clicked');
//     slider.scrollBy(50,0)
// })
let view_clicked = false;
view_less.addEventListener('click', e => {
    if(!view_clicked){
    document.querySelector('.item-full-detail').style.height = '85px';
    view_clicked = true;
    document.querySelector('.view-less').innerHTML = 'view less'
    } else {
        document.querySelector('.item-full-detail').style.height = '35px';
        view_clicked = false;
        document.querySelector('.view-less').innerHTML = 'view more'
    }
})

// this code is for toggle list item when one size is selected
// let size_guide_list_item_isClicked = false;
// size_guide_list_item.addEventListener('click', e => {
    
//     if(!size_guide_list_item_isClicked){
//     size_guide_list.style.height = '47px';
//     target = e.target.closest('li');
//     size_guide_list_item_isClicked = true;
//     console.log(target,' target')
//     } else {
//         size_guide_list.style.height = '200px';
//         size_guide_list_item_isClicked = false;
//     }
// })

function getTargetText (target){
    return target.innerHTML;
}

size_guide_list.addEventListener('click', e => {

    target = e.target.closest('li');
   // target.classList.add('current-clicked')
    let array_list = Array.from(size_guide_list);
    console.log(array_list,'array_list');
    let indexOfTarget = size_guide_list_item_array.indexOf(target);
    console.log(indexOfTarget,'index of target');    
    
    updateSelectedItem(target,indexOfTarget)
    console.log(target.innerHTML, 'target');
    console.log('list items clicked');
    getTargetText(target);

} )

function updateSelectedItem(target,indexOfTarget) {
    console.log(target.innerHTML,'target in update selected item')
    for(item in size_guide_list_item_array){
        //  console.log(item,'item');
          if(item == indexOfTarget){
              size_guide_list_item_array[item].classList.add('current-clicked')
              console.log('inside if');
          } else {
              size_guide_list_item_array[item].classList.remove('current-clicked')
              console.log('inside else');
          }
      }

    
}

// class Items {

//     constructor(src,text,price,size){

//         console.log('object is created');
//         this.src= '',
//         this.text = text,
//         this.price = price,
//         this.size = size

//     }
// }

//let user = new Items ('details', 500,'uk60');
//let user1 = new Items ('details', 600,'uk65');

//console.log(user,user1);

button_add_list.addEventListener('click', creatElementForCart);
let totalItems = 0;

function creatElementForCart(){

    let item_detail_text = document.querySelector('.item-detail-text');
    let main_container = document.querySelector('.main-container');
    let item = document.querySelectorAll('.item');
    console.log(item.length,'item.length');
    let totalItem = document.querySelector('.total-items');
    console.log(totalItem,totalItem)
    totalItems++;
    totalItem.innerHTML = totalItems;

    let item_id = document.getElementsByClassName('item-detail');
    console.log(item_id[0].dataset.itemId,'item detail');

    if (item.length < 3 ) {

        let item1 = document.createElement('div');
        item1.classList.add('item')          
           
        main_container.appendChild(item1);
        let imageDiv = document.createElement('div');
        imageDiv.classList.add('image-container');
        let itemDef = document.createElement('div');
        itemDef.classList.add('items-def');

        let itemDefAnchor = document.createElement('a');
        itemDefAnchor.setAttribute('href','#');
        itemDef.appendChild(itemDefAnchor);

        let pInsideAnchor = document.createElement('p');
        pInsideAnchor.classList.add('item-definition')
        itemDefAnchor.appendChild(pInsideAnchor);

        let spanTag = document.createElement('span');
        spanTag.classList.add('item-price');
        itemDef.appendChild(spanTag);
        
        let imageElement = document.createElement('img');
        imageElement.classList.add('item-image');
        imageElement.setAttribute('src','');
        console.log(imageDiv,'imageDiv');
        //.appendChild(imageDiv); 
        
        item1.appendChild(imageDiv);
        item1.appendChild(itemDef);
        imageDiv.appendChild(imageElement);
        
        updateCart(imageElement,pInsideAnchor,spanTag,item_detail_text,totalItems,item_id[0].dataset.itemId);

    } else {
        console.log('inside else');
        updateMainCart(item_detail_text);
    }

    localStorage.setItem('total-items',totalItems)
    console.log(main_container,'main_container');
    console.log(item,'item');

   
}

function updateMainCart(item_detail_text){
        let image_forMainCart = document.querySelector('.item-container-item-image').getAttribute('src');
        let imageText_ForMainCart = document.querySelector('.item-detail-text');
        let imagePrice_ForMainCart = document.querySelector('.item-detail-price').innerHTML
        let item_model_no_ForMainCart = document.querySelector('.item-model-no');  
        
         user = {

            src: image_forMainCart,
            text: item_detail_text.innerHTML,
            size: getTargetText(target),
            model_no: item_model_no_ForMainCart.innerHTML,
            price: imagePrice_ForMainCart

         }

        itemsArray.push(user);

        localStorage.setItem('itemsArray', JSON.stringify(itemsArray));   
}

function updateCart(imageElement,pInsideAnchor,spanTag,item_detail_text,totalItems,id) {

    // putting data inside created element

        let image = document.querySelector('.item-container-item-image').getAttribute('src');
        let imageText = document.querySelector('.item-detail-text');
        let item_detail = document.querySelector('.item-detail')
        
        let imagePrice = document.querySelector('.item-detail-price').innerHTML
        let item_model_no = document.querySelector('.item-model-no');        
        console.log(imagePrice,'imagePrice');
        console.log(image,'imageeee');

        if(totalItems <= 3){
        imageElement.setAttribute('src',image);
        pInsideAnchor.innerHTML = imageText.innerHTML;
        spanTag.innerHTML = imagePrice;
        shopping_mini.style.display = 'block';
        }    

       // let user1 = new Items (image,imageText.innerHTML,imagePrice)
        //console.log(user1,'user1')
        //itemsArray.push(user1);
        // console.log(itemsArray,'items array');  
       
        let target_text = getTargetText;
        console.log(target_text,'target text')
      
    
       let user = {
           id:id,
           quantity: 1,
           src: image,
           text: item_detail_text.innerHTML,
           size: getTargetText(target),
           model_no: item_model_no.innerHTML,
           price: imagePrice
        }
        // here I modified the display of same product but with different size so that
        // duplicacy on main cart page is removed


       if(itemsArray.length == 0){
        itemsArray.push(user);
        console.log('items array had zero element');
       } else {
           console.log('search inside array will happen here');
           itemsArray.forEach(element => {
               console.log(element.size,'size in for each');
               console.log(user.size,'user size in for each');
               if(!(user.size == element.size && user.model_no == element.model_no)){
                itemsArray.push(user);
                console.log('inside else of for each');   
               
               } else {
                element.quantity = element.quantity + 1;
                console.log(element.quantity,'user.quantity');
               }
           });
       }
       

        for(item in itemsArray){
            console.log(itemsArray[item],'itemArray');
        }

       localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
    }

    // function setItemLocalStorage()

// module.exports.updateCart = updateCart;