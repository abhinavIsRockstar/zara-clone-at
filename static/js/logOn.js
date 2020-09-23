console.log('inside log on page');

let registerBtn = document.querySelector('.register-href-definition');
let registerForm = document.querySelector('.register-form');
let logInFormContainer = document.querySelector('.log-in-form-container')
console.log(registerBtn,'register button')
console.log(registerForm,'register form')

let registerBtnClicked = false;
registerBtn.addEventListener('click', e => {
    console.log('register btn clicked');

    if(!registerBtnClicked) {
        registerForm.style.display = 'block';
        logInFormContainer.style.display = 'none';
        registerBtnClicked = true
    } else {
        registerForm.style.display = 'none';
        logInFormContainer.style.display = 'block';
        registerBtnClicked = false;
    }    
    
})



// let homeBtnLogIn = document.querySelector('.menu-home-button');


// homeBtnLogIn.addEventListener('click', e => {
//     location.reload();
// })