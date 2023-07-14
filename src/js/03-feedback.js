import throttle from 'lodash.throttle';
const LOCAL_KEY = 'feedback-form-state'
const form = document.querySelector(".feedback-form");
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
//  input.addEventListener("input", throttle(storageFormData, 500));

form.addEventListener("submit", throttle(onFormSubmit, 500));
// form.addEventListener('input', throttle(storageFormData, 500));
// проверяем состояние хранилища

// const storage = localStorage.getItem(LOCAL_KEY);
// console.log(storage);
  //    Чистим хранилище
    function removeLocalStorage() {
            if (localStorage.getItem(LOCAL_KEY)){
            localStorage.removeItem(LOCAL_KEY);
            console.log('хранилище очищено!', localStorage.getItem(LOCAL_KEY));
            return;
    };
};

    const storageArr = JSON
        .parse(localStorage.getItem(LOCAL_KEY)) ?? [];
    console.log(storageArr);
    console.log(storageArr.email);
    console.log(storageArr.message);
if (localStorage.getItem(LOCAL_KEY)) {
    console.log(storageArr);
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
//    event.currentTarget.reset();
// 2 -й вариант
    if (localStorage.getItem(LOCAL_KEY)) {
        input.removeAttribute("value");
        console.log('Email delete!', email.value);
        textarea.innerHTML = '';
        console.log('Messege delete!', email.value);
        if (!localStorage.getItem(LOCAL_KEY)) {
   removeLocalStorage();
};
        return;
    }
};

//  textarea.innerHTML = ``;
//     input.setAttribute('value', '');
    

 
