console.log('inside menu.js');

let menuContainer = document.querySelectorAll('.menu-main-container')
let menuClassArray = Array.from(menuContainer[0].children);
let menuButtons = document.querySelector('.navigation-lists')
let menubtn =  Array.from(menuButtons.children)
let homeBtn = document.querySelector('.menu-home-button')


console.log(menuClassArray,'menuclass')
console.log(menuContainer,'menucontainer')
console.log(menubtn,'menubtn')
console.log(menuButtons,'menuButtonss')

let menuShown = false

homeBtn.addEventListener('click', e => {
    console.log('home button clicked')
    location.reload();
})



menuButtons.addEventListener('click', e => {

    console.log('clicked')
    
    let currentMenu = document.querySelector('.current')
    let target =  e.target.closest('li');
    targetIndex = menubtn.findIndex(dots => dots === target)
    let text = target.innerText.toLowerCase();
   
    console.log(text,'targettt') 
    console.log(targetIndex,'targetIndex')   

    if(!target) return

    updateMenuList(currentMenu, target);  
    updateMenu(targetIndex)

   

})

const updateMenuList = (currentMenu, target) => {
    console.log('inside updateMenuCurrent')

    currentMenu.classList.remove('current')
    target.classList.add('current');
    console.log(currentMenu,'current')
    console.log(target,'target')

}

const updateMenu = (targetIndex) => {

    console.log('inside update menu')
    console.log(menuClassArray,'menuclass array')

    for(let i =0;i<menuClassArray[0].children.length;i++){
        if(i== targetIndex){
            //enable the menu
            menuClassArray[0].children[i].classList.add('active')
            menuClassArray[0].children[i].classList.remove('disable')
        } else {
            // disable the menu
            menuClassArray[0].children[i].classList.remove('active')
            menuClassArray[0].children[i].classList.add('disable')
        }

    }
}



// toggling of catagories

let menuCatagoryClicked = false
let collectionListItem = document.getElementsByClassName('collection-lists-items')


function collectionToggle (value) {
        if(!menuCatagoryClicked) {
            collectionListItem[value].style.display ='grid';
            collectionListItem[value].style.transition = 'ease-in 1s'
            menuCatagoryClicked = true
        } else {
            collectionListItem[value].style.display ='none';
            menuCatagoryClicked = false;
        }
}

let shoesAndBagsClicked = false
let shoesAndBagsItem = document.getElementsByClassName('menu-shoes-and-bags-items')

function shoesAndBagsToggle (value) {

    if(!shoesAndBagsClicked) {
        shoesAndBagsItem[value].style.display ='grid';
        shoesAndBagsClicked = true
    } else {
        shoesAndBagsItem[value].style.display ='none';
        shoesAndBagsClicked = false;
    }

}
let storesClicked = false
let storiesItem = document.getElementsByClassName('menu-stories-items')

function storiesToggle(value) {

    if(!storesClicked) {
        storiesItem[value].style.display ='grid';
        storesClicked = true
    } else {
        storiesItem[value].style.display ='none';
        storesClicked = false;
    }

}

let joinLifeClicked = false
let joinLifeItem = document.getElementsByClassName('join-life-items')

function joinLifeToggle(value) {
    if(!joinLifeClicked) {
        joinLifeItem[value].style.display ='grid';
        joinLifeClicked = true
    } else {
        joinLifeItem[value].style.display ='none';
        joinLifeClicked = false;
    }
}


let infoClicked = false
let infoItem = document.getElementsByClassName('menu-info-items')

function infoToggle(value) {

    if(!infoClicked) {
        infoItem[value].style.display ='grid';
        infoClicked = true
    } else {
        infoItem[value].style.display ='none';
        infoClicked = false;
    }

}
// work incomplete as html markup of this is incomplete

let girlMenuClicked = false
let girlMenuItem = document.getElementsByClassName('girl-items')

function girlMenutoggle(value) {
    const girlItem = Array.from(document.querySelectorAll('.girl-item'));
    const x =(girlItem)
    console.log( x,'x')
    console.log(x[0].className,'class name')
    if(!girlMenuClicked) {
        girlMenuItem[value].style.display ='grid';
        girlMenuItem[value].style.opacity ='1';
        // girlItem[0].style.transition ='display 500ms'
        // girlMenuItem[value].style.opacity = '1';
        // console.log( girlMenuItem[value],' girlMenuItem[value]')
        // x[0].style.transition = 'linear 300ms'
        girlMenuClicked = true
    } else {
        girlMenuItem[value].style.display ='none';
        girlMenuClicked = false;
    }
}

let boyMenuClicked = false
let boyMenuItem = document.getElementsByClassName('boy-items')


function boyMenutoggle(value) {
    if(!boyMenuClicked) {
        boyMenuItem[value].style.display ='grid';
        boyMenuClicked = true
    } else {
        boyMenuItem[value].style.display ='none';
        boyMenuClicked = false;
    }
}

let babyGirlMenuClicked = false
let babyGirlItem = document.getElementsByClassName('baby-girl-items')

function babyGirlMenuToggle(value) {
    if(!babyGirlMenuClicked) {
        babyGirlItem[value].style.display ='grid';
        babyGirlMenuClicked = true
    } else {
        babyGirlItem[value].style.display ='none';
        babyGirlMenuClicked = false;
    }
}


let babyBoyclicked = false;
let babyBoyClicked = document.getElementsByClassName('baby-boy-items')


function babyBoyMenuToggle(value) {
    if(!babyBoyclicked) {
        infoItem[value].style.display ='grid';
        babyBoyclicked = true
    } else {
        infoItem[value].style.display ='none';
        babyBoyclicked = false;
    }
}

