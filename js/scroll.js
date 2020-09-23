console.log('inside scroll js')

// window.addEventListener('scroll', e => {
//     console.log('scrolled',e)

//     let tick = false;

//     if(e.target.scrollingElement.scrollTop > 80 && tick === false){
//         console.log('inside if')
//         e.target.scrollingElement.scrollTop += 10
//         console.log(e.target.scrollingElement.scrollTop  ,'window.scrolltop ')
//         tick = true
//         console.log(e.target.scrollingElement.scrollY,'scroll Y')
//     }
// })
//   let element = document.querySelector('.element')
//   window.addEventListener('scroll', e =>{
//     console.log('scrolled',e)

//     if(e.target.scrollingElement.scrollTop> 200) {
//         console.log('inside if')
//         setTimeout(() => {
//             console.log('inside timeout')
//             e.target.scrollingElement.scrollTop =+ 200  
//         }, 50);
//     }
// //  window.removeEventListener('scroll',e=>{})
    
// })
// document.querySelector('.element').removeEventListener('click', e=>{},false)

let box1 = document.body
// let boxP = box1[0].children;
boxContainer = Array.from(box1)
let value = 10;
console.log(boxContainer,'box  container')
let x = document.querySelector('.one')

x.addEventListener('click', e=> {
    window.document.scrollingElement.scrollTop+=350
    console.log(window.document.scrollingElement.scrollTop,'window')
})

// window.addEventListener('scroll', e => {
//     console.log(e,'e')
// })