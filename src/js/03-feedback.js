import throttle from 'lodash.throttle';
const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");
handlerFillForm();
// const formData = {};
  // проверяем хранилище 
function onFormInput(event) { 
    let formInfa = localStorage.getItem(LOCAL_KEY);
    formInfa = formInfa ? JSON.parse(formInfa) : {};
    formInfa[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formInfa));
};

function handlerFillForm() {
    let saveInfa = localStorage.getItem(LOCAL_KEY);
    if (saveInfa) {
        saveInfa = JSON.parse(saveInfa)
        Object.entries(saveInfa).forEach(([key, text]) => {
            form.elements[key].value = text || '';

        });
    };
};
function onFormSubmit(event) {
    event.preventDefault();
    const { elements: { email, message } } = event.currentTarget;
    const messageAlert = "Please fill in all the fields!";
    if (email.value === "" || message.value === "") {
        return alert(messageAlert);
    } else {
        let formData = JSON.parse(localStorage.getItem(LOCAL_KEY));
        console.log(formData);
        //    Чистим поля формы и хранилище
        event.currentTarget.reset();
        localStorage.removeItem(LOCAL_KEY);
        formData = {};
    };

};
form.addEventListener('input', throttle(onFormInput, 500)); 
form.addEventListener('submit', onFormSubmit);







/









// const form = document.querySelector(".feedback-form");
// // const input = document.querySelector('input');
// const textarea = document.querySelector('textarea');
// // form.addEventListener("submit", onFormSubmit);
// textarea.addEventListener('input', throttle(storagTextareaData, 500));
// form.addEventListener('input', event => {
//     console.log(event.target.name);

//     console.log(event.target.value);
//  formData[event.target.name] = event.target.value;
// console.log(formData);
//     // -------------------------
//     console.log(form);
//     console.log(input);
//     console.log(textarea);
// });


// // textarea.addEventListener('input', storageFormData);
// function storageInputData(event) {
//     console.log(event.target.name);
   
    
//     // input.textContent = event.currentTarget.value.trim();
//     // console.log(input.textContent);
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(input.textContent));
// };
 

// function storagTextareaData(event) {
//     const textareaForm  = event.currentTarget.value.trim();
//     console.log(textareaForm);
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(textareaForm));
// };
 


//   //    Чистим хранилище
//     function removeLocalStorage() {
//             if (localStorage.getItem(LOCAL_KEY)){
//             localStorage.removeItem(LOCAL_KEY);
//             console.log('хранилище очищено!', localStorage.getItem(LOCAL_KEY));
//             return;
//     };
// };
// // проверяем состояние хранилища
//     const storageArr = JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? [];
//     console.log(storageArr);
//     console.log(storageArr.email);
//     console.log(storageArr.message);
// if (localStorage.getItem(LOCAL_KEY)) {
//     console.log(storageArr);
//         input.setAttribute('value', input.textContent);
//         // console.log(textarea);
//     textarea.innerHTML = `${textarea.textContent}`;
  
    
   
         
// };
     
// function onFormSubmit(event) {
//     event.preventDefault();
//     // console.log(event.currentTarget);
//     const { email, message }
//      = event.currentTarget.elements;
//     console.log(email.value, message.value);

//     const messageAlert = "Please fill in all the fields!";

//      if (email.value === "" || message.value === "") {
//          return alert(messageAlert);
         
//     };
    
//     const arrayForm = {
//         email: email.value,
//         message: message.value
//     };

//     console.log(' localStorage:', arrayForm);

//     localStorage.setItem(LOCAL_KEY, JSON.stringify(arrayForm));
    
//     //    Чистим поля формы
//     event.currentTarget.reset();
//     textarea.innerHTML = ``;
//     input.setAttribute('value', '');
    
//      removeLocalStorage();


// };


        
        
        
        
        
        



        
        
        
        
        
        
        
        
        
        
        

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import throttle from 'lodash.throttle';
// const LOCAL_KEY = 'feedback-form-state';
// const formData = {};
// const form = document.querySelector(".feedback-form");
// const input = document.querySelector('input');
// const textarea = document.querySelector('textarea');
// form.addEventListener("submit", onFormSubmit);
// // -------------------------
// console.log(form);
// console.log(input);
// console.log(textarea);

// textarea.addEventListener('input', throttle(storagTextareaData, 500));
// form.addEventListener('input', throttle(storageInputData, 500));
// // textarea.addEventListener('input', storageFormData);
// function storageInputData(event) {
//     console.log(event.target.name);
//     formData[event.target.name] = event.target.value;
//     console.log(formData);
//     // input.textContent = event.currentTarget.value.trim();
//     // console.log(input.textContent);
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(input.textContent));
// };
 

// function storagTextareaData(event) {
//     const textareaForm  = event.currentTarget.value.trim();
//     console.log(textareaForm);
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(textareaForm));
// };
 


//   //    Чистим хранилище
//     function removeLocalStorage() {
//             if (localStorage.getItem(LOCAL_KEY)){
//             localStorage.removeItem(LOCAL_KEY);
//             console.log('хранилище очищено!', localStorage.getItem(LOCAL_KEY));
//             return;
//     };
// };
// // проверяем состояние хранилища
//     const storageArr = JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? [];
//     console.log(storageArr);
//     console.log(storageArr.email);
//     console.log(storageArr.message);
// if (localStorage.getItem(LOCAL_KEY)) {
//     console.log(storageArr);
//         input.setAttribute('value', input.textContent);
//         // console.log(textarea);
//     textarea.innerHTML = `${textarea.textContent}`;
  
    
   
         
// };
     
// function onFormSubmit(event) {
//     event.preventDefault();
//     // console.log(event.currentTarget);
//     const { email, message }
//      = event.currentTarget.elements;
//     console.log(email.value, message.value);

//     const messageAlert = "Please fill in all the fields!";

//      if (email.value === "" || message.value === "") {
//          return alert(messageAlert);
         
//     };
    
//     const arrayForm = {
//         email: email.value,
//         message: message.value
//     };

//     console.log(' localStorage:', arrayForm);

//     localStorage.setItem(LOCAL_KEY, JSON.stringify(arrayForm));
    
//     //    Чистим поля формы
//     event.currentTarget.reset();
//     textarea.innerHTML = ``;
//     input.setAttribute('value', '');
    
//      removeLocalStorage();


// };















