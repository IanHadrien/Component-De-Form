const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.Email');
const password = document.querySelector('.Password');

const formF = document.querySelector('.form-First');
const formL = document.querySelector('.form-Last');
const formEmail = document.querySelector('.form-Email');
const formPassW = document.querySelector('.form-Password');

const send = document.querySelector('.toSend');

function validateForm(name) {
    if(name === '' || name.length < 3) return false;
    return true;
}

function validatePassword(passW) {
    let force = 0;

    if(passW === '' || passW.length < 3) {
        password.style.border = '1px solid hsl(0, 100%, 74%)';
        formPassW.style.color = 'hsl(0, 100%, 74%)';
        formPassW.innerHTML = 'Password cannot be empty';
        event.preventDefault();
        return;
    }

    if(passW.match(/[a-z]+/)) force += 1;
    if(passW.match(/[A-Z]+/)) force += 2;
    if(passW.match(/d+/)) force += 2;
    if(passW.match(/W+/)) force += 5;

    if(force < 5) {
        password.style.border = '1px solid hsl(0, 100%, 74%)';
        formPassW.style.color = 'hsl(0, 100%, 74%)';
        formPassW.innerHTML = 'Password too weak';
        event.preventDefault();
    } else if(force >= 5 && force < 7) {
        password.style.border = '1px solid hsl(154, 59%, 51%)';
        formPassW.style.color = 'hsl(154, 59%, 51%)';
        formPassW.innerHTML = 'Very Good Password';
    } else {
        password.style.border = '1px solid hsl(248, 32%, 49%)';
        formPassW.style.color = 'hsl(248, 32%, 49%)';
        formPassW.innerHTML = 'Password is great';
    }
}

function toSend() {
    if(!validateForm(firstName.value)) {
        firstName.style.border = '1px solid hsl(0, 100%, 74%)';
        formF.innerHTML = 'First Name cannot be empty';
        event.preventDefault();
    } else {
        firstName.style.border = '1px solid hsl(154, 59%, 51%)';
        formF.textContent = '';
    }
    if(!validateForm(lastName.value)) {
        lastName.style.border = '1px solid hsl(0, 100%, 74%)';
        formL.innerHTML = 'Last Name cannot be empty';
        event.preventDefault();
    } else {
        lastName.style.border = '1px solid hsl(154, 59%, 51%)';
        formL.textContent = '';
    }
    if(!validateForm(email.value)) {
        email.style.border = '1px solid hsl(0, 100%, 74%)';
        formEmail.innerHTML = 'Looks like this is not an email';
        event.preventDefault();
    } else {
        email.style.border = '1px solid hsl(154, 59%, 51%)';
        formEmail.textContent = '';
    }

    validatePassword(password.value);
}
send.addEventListener('click', toSend);
