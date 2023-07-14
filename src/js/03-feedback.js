const LOCAL_KEY = 'feedback-form-state'
const form = document.querySelector(".feedback-form");
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
//  input.addEventListener("input", throttle(storageFormData, 500));

form.addEventListener("submit", onFormSubmit);
// проверяем состояние хранилища

// const storage = localStorage.getItem(LOCAL_KEY);
// console.log(storage);
const storageArr = JSON
    .parse(localStorage.getItem(LOCAL_KEY)) ?? [];
    console.log(storageArr);
console.log(storageArr.email);
console.log(storageArr.message);
if (storageArr) {
    input.setAttribute('value', storageArr.email);
    // console.log(textarea);
    textarea.innerHTML = `${storageArr.message}`;
};
    

function onFormSubmit(event) {
    event.preventDefault();
    // console.log(event.currentTarget);
    // console.log("Button was clicked");
    const { email, message }
     = event.currentTarget.elements;
    console.log(email.value, message.value);

    
    const arrayForm = {
        email: email.value,
        message: message.value
    };


    console.log(' localStorage:', arrayForm);

    localStorage.setItem
        (LOCAL_KEY, JSON.stringify(arrayForm));
    
    input.removeAttribute("value");
    console.log('Email delete!', email.value);
   

    textarea.innerHTML = '';
     console.log('Messege delete!', email.value);
    //  Чистим хранилище
    //  localStorage.removeItem('feedback-form-state');
    
    
};
 


