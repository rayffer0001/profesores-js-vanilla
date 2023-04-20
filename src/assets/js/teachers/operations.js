//It will be interacting of JS with html: validations, alerts, etc

//event that listens
//it can be a document like document or for the tab is a 'window' 
//por dentro del window esta el document(html)

import { formElements, getFormData } from "./form";
import { createTeacher, readTeachers } from './repository';

export function listeners() {
    //(nombre del evento, funcion)
    window.addEventListener('load', () => {

        //event when submitting the form
        listenFormSubmitEvent();
        listTeacher();

    })
}

function listenFormSubmitEvent(){
    formElements.form.addEventListener('submit', (event) => {
        event.preventDefault();
        createTeacher(getFormData());
        listTeacher();
    })
}


function listTeacher(){
    const arrayTeachers = readTeachers();
    const tbody = document.querySelector('#tblTeachers tbody');
    tbody.innerHTML = '';

    //Funcion for each
    arrayTeachers.forEach( (teacher, index) => {
        //Creo la fila
        const row = document.createElement('tr');
        
        //Creo las columnas de la tabla
        const colId = document.createElement('td');
        colId.textContent = index;
        
        const colName = document.createElement('td');
        colName.textContent = teacher.name;
        
        const colDescription = document.createElement('td');
        colDescription.textContent = teacher.description;
        
        const colEmail = document.createElement('td');
        colEmail.textContent = teacher.email;
        
        const colBirthDate = document.createElement('td');
        colBirthDate.textContent = teacher.birthDate;
        
        const colButtons = document.createElement('td');
        
        //Agrego las columnas a la fila
        row.appendChild(colId);
        row.appendChild(colName);
        row.appendChild(colDescription);
        row.appendChild(colEmail);
        row.appendChild(colBirthDate);
        row.appendChild(colButtons);
        
        //Agrego la fila al tbody
        tbody.appendChild(row); 

     } );

    
        
    
}