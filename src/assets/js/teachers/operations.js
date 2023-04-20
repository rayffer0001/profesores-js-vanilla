//It will be interacting of JS with html: validations, alerts, etc

//event that listens
//it can be a document like document or for the tab is a 'window' 
//por dentro del window esta el document(html)

import { formElements, getFormData } from "./form";
import { createTeacher } from './repository';

export function listeners() {
    //(nombre del evento, funcion)
    window.addEventListener('load', () => {

        //event when submitting the form
        listenFormSubmitEvent();

    })
}

function listenFormSubmitEvent(){
    formElements.form.addEventListener('submit', (event) => {
        event.preventDefault();
        createTeacher(getFormData());
    })
}
