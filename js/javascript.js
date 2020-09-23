console.log('inside javascript')

let burgerBtn = document.querySelector('.burger-container');
let homeMain = document.querySelector('.main')
let closeBtn = document.getElementById('close-button')
let burgermenuContainer = document.querySelector('.menu-container')
let burgerMenuContainerOpen = document.querySelector('.open')

let burgerBtnClicked = false;
let menuShownBurger = false


console.log(burgermenuContainer,'burger container')
console.log(closeBtn,'closeBtn')


burgerBtn.addEventListener('click', e => {
    
    if(!menuShownBurger) {
        console.log('clicked');
        burgermenuContainer.classList.add('open');
        homeMain.style.position = 'absolute';
        homeMain.style.zIndex = '-1'
        homeMain.style.display = 'none'
        menuShownBurger = true;
        burgerBtnClicked = true;
    } 
    console.log('burger button clicked')
    console.log(burgerBtnClicked,'burger btn')
})

closeBtn.addEventListener('click', e => {
    console.log('cross clicked')
    burgermenuContainer.classList.remove('open');
    homeMain.style.position = '';
    homeMain.style.zIndex = ''
    homeMain.style.display = ''
    menuShownBurger = false;
    burgerBtnClicked = false;
})



// burgerBtn.addEventListener('click', e =>{
//     console.log(e.target,'button is clicked');

//     if(!menuShown) {
//         console.log('inside if');
//         menuContainer.classList.add('open');
//         menuShown = true;
//     } else {
//         console.log('inside else')
//         menuContainer.classList.remove('open');
//         menuShown = false;
//     }



// })

// let container = document.querySelectorAll('.menu-main-container');
// console.log(container[0].children,'container children')
// let arr = Array.from(container[0].children);
// console.log(arr,'arr')
// let classlist = arr[0].classList[1]
// console.log(classlist,'classlist')
// // for(let i=0;i<arr.length;i++){
// //     console.log('inside for looop')
// //     console.log(arr.classList,'arr.classList')

// // }

// add the click events in menu






//// js for menu items


// const collection = document.querySelector('.collection-heading');

// console.log(collection,'collection')


// collection.addEventListener('click', e => {
//     console.log('clicked collection')
//     const collectionLists = document.getElementsByClassName('collection-lists-items');
//     console.log(collectionLists,'collectionLists')
//     collectionLists[1].style.display = 'block';
// })


// burger button event


/// for catagories of home page

const menuHomeBtn = document.querySelector('.categories');
const menuHomeBtnArray = Array.from(menuHomeBtn);
// const menuHomeList = Array.from(menuHomeBtnArray[0].children)
console.log(menuHomeBtn,'menuHomeBtn')
console.log(menuHomeBtn,'menu home button')
// console.log(menuHomeList,'menuHomeList')

menuHomeBtn.addEventListener('click', e => {
    console.log(e.target.closest('a'),'e')
    const target= e.target.closest('a');
    const current = document.querySelector('.current-menu');
    console.log(current,'current')
    const currentArray = Array.from(current);
     console.log(currentArray,'currentArray')
    // const targetIndex = currentArray.findIndex(dots => dots === target);
    // console.log(targetIndex,'target index')

    updateMenuHome(target, current)
    

})

function updateMenuHome(target, current) {

    target.classList.add('current-menu');
    current.classList.remove('current-menu')
}

// const carouselContainer = document.querySelectorAll('.carousel-container');

// console.log(carouselContainer[0].children,'carousel container')

// carouselContainer[0].children.addEventListener('scroll', e => {
//     console.log('scrolled container')
// } )
//   document.querySelector('.carousel-container').addEventListener('scroll', e => {
//       console.log(e,'e')
//     //   console.log(e.target.scrollTop,'e.target.scrollTop')
//   })
// const carouselContainer = document.querySelector('.carousel-container');
// // const animationSectionWoman = document.querySelector('.animation-section')
// console.log(carouselContainer,'kids container')

// let totalScrollAllowedAtATime = 300;
// previousScrolledValue =  0;

//previousScrolledValueX = 0;



// carouselContainer.addEventListener('scroll', e => {

    
//     console.log(e,'e')
//     let currentScrolled  = e.target.scrollTop;
//    // let currentScrolledForX = e.target.scrollLeft;
        
//         scrollValue = currentScrolled - previousScrolledValue;
//       //  scrollValueForX = currentScrolled - previousScrolledValueX;
//         // window.pageYOffset +=200

//         console.log(scrollValue,'scroll value')

//         // console.log(window.clientHeight,'client hight')
//         console.log(previousScrolledValue,'previous scrolled value')
    
//     if(totalScrollAllowedAtATime <=  scrollValue ){
//         // alert('koyla kaala hai')
//         console.log(e.target.scrollTop,'e.target.scrollTop')
//         // totalScrollAllowedAtATime = e.target.scrollTop;
//         // console.log(difference,'difference')
//         console.log('inside if')
//         previousScrolledValue = e.target.scrollTop
//         e.target.scrollTop+=300
//         console.log(e.target.scrollTop ,'e.target.scrollTop ')
        
        
//     }
// })
//     setTimeout(() => {
//         e.target.scrollTop += 100
//     }, 100);
//     // e.preventDefault();

//     // else if(totalScrollAllowedAtATime <= scrollValueForX){
//     //     previousScrolledValueY = e.target.scrollLeft
//     //     e.target.scrollLeft += 100;
//     // }
    
// })
// let last_known_scroll_position = 0;
// let ticking = false; 

// function doSomething(scrollPosition,e) {
//         e.target.scrollTop +=100;
//         console.log(e.target.scrollTop,'e')
// }
// carouselContainerKids.addEventListener('scroll',function(e) {
//     last_known_scroll_position = window.scrollY;
//     console.log('scrolling')
//     if(!ticking) {
//         window.requestAnimationFrame(function (){
//             doSomething(last_known_scroll_position,e);
//             ticking = false;
//         })
//         ticking = true;
//     }
// } )

// let cont = Array.from(carouselContainer);
// console.log(cont,'cont')
// carouselContainer.addEventListener('scroll', e => {
//     let scrollTop = e.target.scrollTop;
//     if(scrollTop >=1000){
//         console.log(e,'e')
//         console.log(carouselContainer,'details')
//         // e.target.scrollTo(0,100)
//         e.target.scrollTop += 200;
//         scroll.preventDefault
//     }
    
// })
//

// scrollHeight = 600;

// carouselContainer.addEventListener('scroll', e => {
//     console.log('inside scroll');
//     console.log(e.target.scrollTop,'e')

//     if(e.target.scrollTop >= scrollHeight){
//         console.log('inside if')
//         e.target.scrollTop += 10
        
//     }
// },false)

// let windowScreen = window.innerWidth;
// console.log(windowScreen,'window screen')
// const searchIcon = document.querySelector('.search-bar')
// const searchContainer = document.querySelector('.search-container')
// if(windowScreen > 990) {
//     searchIcon.style.display = 'none';
//     searchContainer.style.display = 'none';
//     // document.querySelector('.search-bar').style.display = 'none';
// }
// else {
//     searchIcon.style.display = 'block';
//     searchContainer.style.display = 'block';
// }

let windowScreen = window.innerWidth;
let element = document.body;
let carouselMain = document.querySelectorAll('.carousel-container')
let arrowImg = document.querySelector('.arrow-down-svg');
let arrowRightImg = document.querySelector('.arrow-right-image')
let arrowLeftImg = document.querySelector('.arrow-left-image')
let burgerContainer_mainPage = document.querySelector('.burger-container')
let dotItems = document.querySelectorAll('.dot-item')
let dotItem = document.querySelector('.dot-items')

console.log(dotItem,'dotItem')
// let dotItemArr = dotItem[0]
// let anchor =dotItemArr.children
let scrollHeight = carouselMain[0].scrollHeight;
// console.log(dotItemArr,'dotItemArr')

if(windowScreen > 990) {
    console.log(carouselMain[0].scrollHeight,'scroll height')

    document.addEventListener('scroll', e => {
            console.log('what did that happened')
    })

    arrowImg.addEventListener('click', e => {
        console.log(carouselMain ,'window')
        // window.scroll({
        //     top: 100,
        //     left: 100,
        //     behavior: 'smooth'
        //   });
      //  window.document.documentElement.scrollTop+=350
      console.log(carouselMain[0].scrollHeight,'scrollheight')
      carouselMain[0].scrollTop+=parseInt(scrollHeight/dotItems.length)
      console.log(parseInt(scrollHeight/dotItems.length),'scrollHeight/dotItems.length')
      dotActive(parseInt(carouselMain[0].scrollTop));
        // console.log(window,'element')
        console.log(e,'arrow down clicked')
    })
    console.log('screen size suitable for laptops')

    arrowRightImg.addEventListener('click', e => {
        console.log('right arrow clicked');
        carouselMain[0].scrollLeft += 1347
    })

    arrowLeftImg.addEventListener('click', e => {
        console.log('left arrow image clicked')
        carouselMain[0].scrollLeft -= 1347
    })

    let mouseOverMenu = false

    burgerContainer_mainPage.addEventListener('mouseover', e => {
        console.log('mouse over done')
        if(!mouseOverMenu){
        burgermenuContainer.classList.add('open');
        homeMain.style.position = 'absolute';
        homeMain.style.zIndex = '-1'
        homeMain.style.display = 'none'
        menuShownBurger = true;
        mouseOverMenu = true;
    }  
    })


    burgermenuContainer.addEventListener('mouseleave',e => {
        console.log('onmouseleave')
        burgermenuContainer.classList.remove('open');
        homeMain.style.position = '';
        homeMain.style.zIndex = ''
        homeMain.style.display = ''
        menuShownBurger = false;
        mouseOverMenu = false;
    })

    }

else {
        
        arrowImg.style.display = 'none'
        console.log('screen size suitable for small screen laptops and mobile screens')
}

// location.reload(true);

function dotActive(value) {

    let dotActiveAllowance = parseInt(scrollHeight / dotItems.length);
    let dotActiveHeight = parseInt(scrollHeight / value)
    let dotIndex = parseInt(value/dotActiveAllowance) 
    // get the screen size
    // place the switch case
    console.log(value,'value')
    console.log(dotIndex,'dotIndex')

//    if(value <= dotActiveAllowance) {
//     console.log('inside if')
//     //dotItems[0].classList.add('dot-item-active')
//     for(let i = 0; i<dotItems[0].length;i++){
//         if(i=0){
//             dotItems[i].classList.add('dot-item-active')
//         } else {
//             dotItems[i].classList.remove('dot-item-active')
//         }
//     }
//    }  else if (value >dotActiveAllowance && value <= dotActiveAllowance * 2 ){

//    } 
   for(let i = 0; i < dotItems.length;i++){
            console.log('inside for loop')
           if(i== dotIndex){
               console.log('inside if ')
               dotItems[i].classList.add('dot-item-active')
           } 
           else {
               console.log('inside else')
               dotItems[i].classList.remove('dot-item-active')
           }
   }
}

// dotItems.forEach(dotClicked);

function dotClicked(item,index,arr) {
    console.log(index,'index')
    arr[index].addEventListener('click', e => {
        console.log(e, 'active')
        let close = e.target.closest('a');
         console.log(e,'e')
        //  let findIndex = dotItems.findIndex(dot => dot === close)   
        //  console.log(findIndex,'findindex')    
        // console.log(findIndex,'findindex')
    })
   
}

dotItem.addEventListener('click', e => {
    let target = e.target.closest('li');
//  let targetIndex = dotItems.findIndex(dot =>dot ===target)
    console.log(target,'target')
    let dotItemActive = document.querySelector('.dot-item-active');
        console.log(dotItemActive,'dot item active')
        dotItemActive.classList.remove('dot-item-active')
        e.target.classList.add('dot-item-active')

    
    console.log('clicked')
})