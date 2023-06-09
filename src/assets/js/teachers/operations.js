//It will be interacting of JS with html: validations, alerts, etc

//event that listens
//it can be a document like document or for the tab is a 'window' 
//por dentro del window esta el document(html)


//Third libraries
import alertify from "alertifyjs";
import swal from 'sweetalert2';

//Own libraries
import { validateForm, validateField, removeInputErrorMessage, removeErrorClassNameFields, removeErrorMessageElements } from './../utils/validations'

//Module libraries
import { formElements, fieldConfigurations, getFormData, resetForm, setFormData } from "./form";
import { createTeacher, readTeachers, findTeacherById, updateTeacher, deleteTeacher } from './repository';




export function listeners() {
    //(nombre del evento, funcion)
    window.addEventListener('load', () => {

        //event when submitting the form
        listenFormSubmitEvent();
        listTeacher();
        listenFormFieldsChangeEvent();
        listenFormResetEvent();
        listenTableClickEvent();

    });
}

function listenFormSubmitEvent() {
    formElements.form.addEventListener('submit', (event) => {
        event.preventDefault();
        alertify.dismissAll();

        if (validateForm(fieldConfigurations)) {
            const teacher = getFormData();
            const idTeacher = formElements.fields.id.value.trim();
            if(idTeacher){
                updateTeacher(teacher);
            }else{
                
                createTeacher(teacher);
            }

            
            resetForm();
            removeErrorClassNameFields('is-valid');
            alertify.success(`Teacher ${idTeacher ? 'Updated' : 'created'} successfully`);
            listTeacher();

        } else {
            alertify.error('Check the form data!');
        }


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
            editIcon.dataset.id = id;
            editButton.appendChild(editIcon);

            colButtons.appendChild(editButton);

            //Pintar botton eliminar
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-danger', 'btn-delete', 'm-1');
            deleteButton.dataset.id = id;
            deleteButton.setAttribute('title', 'Delete');

            const deleteIcon = document.createElement('em');
            deleteIcon.classList.add('fa', 'fa-trash');
            deleteIcon.dataset.id = id;
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


function listenFormFieldsChangeEvent() {

    fieldConfigurations.forEach(({ input, validations }) => {
        input.addEventListener('change', () => {
            removeInputErrorMessage(input);
            validations.forEach((validationConfig) => {
                validateField(input, validationConfig);
            });
        })
    });
}

function listenFormResetEvent() {
    formElements.form.addEventListener('reset', () => {
        removeErrorMessageElements();
        removeErrorClassNameFields('is-valid');
        resetForm();
        alertify.dismissAll();
    })
}

function listenTableClickEvent() {
    const table = document.getElementById('tblTeachers');
    table.addEventListener('click', ({ target }) => {
        console.log(target);

        const idTeacher = target.getAttribute('data-id');

        if (target.classList.contains('btn-edit') || target.classList.contains('fa-pencil')) {
            console.log('edit');
            editTeacher(idTeacher);
        } else if (target.classList.contains('btn-delete') || target.classList.contains('fa-trash')) {
            //console.log('delete');
            confirmDelete(idTeacher);
        }

    });
}

function editTeacher(idTeacher) {
    const teacher = findTeacherById(parseInt(idTeacher));

    if (teacher) {
        setFormData(teacher);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        alertify.error('The teacher does not exist, please create a new teacher')
    }
}

function confirmDelete(idTeacher) {

    const teacher = findTeacherById(parseInt(idTeacher));
    if (teacher) {
        swal.fire({
            title: `Are you sure you want to delete the teacher: ${teacher.name}`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#b2b2b2',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'close'
        }).then((resultConfirm) => {
            if (resultConfirm.isConfirmed) {
                //console.log('confirmar que elimina');
                deleteTeacher(parseInt(idTeacher));
                listTeacher();
                alertify.success('Teacher deleted successfully')
                dismissAll();
            } else {
                alertify.dismissAll();
                alertify.message('Cancelled action');
            }
        });
    } else {
        alertify.error('The teacher does not exist, please create a new teacher')
    }


}