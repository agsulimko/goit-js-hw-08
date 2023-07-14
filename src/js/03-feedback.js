import throttle from 'lodash.throttle';
const LOCAL_KEY = 'feedback-form-state'
const form = document.querySelector(".feedback-form");
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
//  input.addEventListener("input", throttle(storageFormData, 500));

form.addEventListener("submit", throttle(onFormSubmit), 500);
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
//    Чистим хранилище
    function removeLocalStorage() {
        localStorage.removeItem(LOCAL_KEY);
        console.log('хранилище очищено!', localStorage.getItem(LOCAL_KEY));
        return;
    };
    removeLocalStorage();
};
    

function onFormSubmit(event) {
    event.preventDefault();
    // console.log(event.currentTarget);
    // console.log("Button was clicked");
    const { email, message }
     = event.currentTarget.elements;
    console.log(email.value, message.value);

    const messageAlert = "Please fill in all the fields!";

     if (email.value === "" || message.value === "") {
         return alert(messageAlert);
         
    };
    
    const arrayForm = {
        email: email.value,
        message: message.value
    };

    console.log(' localStorage:', arrayForm);

    localStorage.setItem(LOCAL_KEY, JSON.stringify(arrayForm));
    
    //    Чистим поля формы
   
// 2 -й вариант
    if (localStorage.getItem(LOCAL_KEY)) {
        input.removeAttribute("value");
        console.log('Email delete!', email.value);
        textarea.innerHTML = '';
        console.log('Messege delete!', email.value);
        return;
    }
};

// player.on('timeupdate',throttle(onPlay, 1000 ));
