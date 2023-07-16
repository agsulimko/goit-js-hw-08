import { keys } from '@vimeo/player';
import throttle from 'lodash.throttle';
const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");
handlerFillForm();
// перезаписываем из  хранилища данные 
 function onFormInput(event) { 
     let formData = localStorage.getItem(LOCAL_KEY);
    //  console.log(formData);
     formData = formData ? JSON.parse(formData) : {};
    //   console.log(formData);
     formData[event.target.name] = event.target.value;
    //  console.log(formData[event.target.name]);
    //   console.log(event.target.name);
     
     localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
 };
// проверяем хранилище 
function handlerFillForm() {
    let saveData = localStorage.getItem(LOCAL_KEY);
    console.log(saveData);
    if (saveData) {
        saveData = JSON.parse(saveData)
        // console.dir(saveData);  
        const arraySaveData = Object.entries(saveData);
        arraySaveData.forEach(function([number, index]) {
             form.elements[number].value = index || '';
            // console.log(form.elements[number].value);
           
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









