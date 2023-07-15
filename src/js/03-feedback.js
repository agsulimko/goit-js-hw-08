import { keys } from '@vimeo/player';
import throttle from 'lodash.throttle';
const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");
handlerFillForm();

 function onFormInput(event) { 
     let formInfa = localStorage.getItem(LOCAL_KEY);
    //  console.log(formInfa);
     formInfa = formInfa ? JSON.parse(formInfa) : {};
     formInfa[event.target.name] = event.target.value;
     console.log(formInfa[event.target.name]);
      console.log(event.target.name);
     localStorage.setItem(LOCAL_KEY, JSON.stringify(formInfa));
 };
// проверяем хранилище 
function handlerFillForm() {
    let saveInfa = localStorage.getItem(LOCAL_KEY);
    console.log(saveInfa);
    if (saveInfa) {
        saveInfa = JSON.parse(saveInfa)
        console.dir(saveInfa);  
        const arraySaveInfa = Object.entries(saveInfa);
        arraySaveInfa.forEach(function([number, index]) {
             form.elements[number].value = index || '';
            console.log(form.elements[number].value);
           
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









