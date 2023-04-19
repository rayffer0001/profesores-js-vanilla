//It will be interacting of JS with html: validations, alerts, etc

//event that listens
//it can be a document like document or for the tab is a 'window' 
//por dentro del window esta el document(html)

import { formElements, getFormData } from "./form";
export function addEventListeners() {
    //(nombre del evento, funcion)
    window.addEventListener('load', () => {

        //event when submitting the form
        listenFormSubmitEvent();

    })
}

function listenFormSubmitEvent(){
    formElements.form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(getFormData());
    })
}
//estructura del projecto, se define responsabilidades para cada archivo y se comienza con el listener de algunos eventos como load y submit