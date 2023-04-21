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

function listenFormSubmitEvent() {
    formElements.form.addEventListener('submit', (event) => {
        event.preventDefault();
        createTeacher(getFormData());
        listTeacher();
    })
}


function listTeacher() {
    const arrayTeachers = readTeachers();
    const tbody = document.querySelector('#tblTeachers tbody');
    tbody.innerHTML = '';

    if (arrayTeachers.length > 0) {

        //Funcion for each
        arrayTeachers.forEach((teacher) => {

            const { id, name, description, email, birthDate } = teacher; //Destructuracion


            //Creo la fila
            const row = document.createElement('tr');
            row.classList.add('align-middle');

            //Creo las columnas de la tabla
            const colId = document.createElement('td');
            colId.textContent = id;
            colId.classList.add('align-center');

            const colName = document.createElement('td');
            colName.textContent = name;

            const colDescription = document.createElement('td');
            colDescription.textContent = description;

            const colEmail = document.createElement('td');
            colEmail.textContent = email;

            const colBirthDate = document.createElement('td');
            colBirthDate.textContent = birthDate;

            const colButtons = document.createElement('td');
            colButtons.classList.add('text-center');

            //Pintar botton editar
            const editButton = document.createElement('button');
            editButton.classList.add('btn', 'btn-primary', 'btn-edit', 'm-1');
            editButton.dataset.id = id;
            editButton.setAttribute('title', 'Edit');

            const editIcon = document.createElement('em');
            editIcon.classList.add('fa', 'fa-pencil');
            editButton.appendChild(editIcon);

            colButtons.appendChild(editButton);

            //Pintar botton eliminar
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-danger', 'btn-delete', 'm-1');
            deleteButton.dataset.id = id;
            deleteButton.setAttribute('title', 'Delete');

            const deleteIcon = document.createElement('em');
            deleteIcon.classList.add('fa', 'fa-trash');
            deleteButton.appendChild(deleteIcon);

            colButtons.appendChild(deleteButton);


            //Agrego las columnas a la fila
            row.appendChild(colId);
            row.appendChild(colName);
            row.appendChild(colDescription);
            row.appendChild(colEmail);
            row.appendChild(colBirthDate);
            row.appendChild(colButtons);

            //Agrego la fila al tbody
            tbody.appendChild(row);

        });

    } else {

        const rowEmpty = document.createElement('tr');
        const colEmpty = document.createElement('td');
        colEmpty.setAttribute('colspan', '6');//con esta propiedad puedo elejir cuantas columnas poner
        colEmpty.textContent = 'Not records saved';
        colEmpty.classList.add('text-center');
        rowEmpty.appendChild(colEmpty);
        
        tbody.appendChild(rowEmpty);

    }



}