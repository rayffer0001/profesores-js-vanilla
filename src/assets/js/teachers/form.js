// Configuration and interaction about the operations in the form
//we are going to create an object

/** 
 * Este objeto contiene las referenciaas a los elementos clave del formulario
 */
export const formElements = {
    form: document.getElementById('teacherForm'),
    containerId: document.getElementById('containerId'),
    fields: {
        id: document.getElementById('txtId'),
        name: document.getElementById('txtName'),
        description: document.getElementById('txtDescription'),
        email: document.getElementById('txtEmail'),
        birthDate: document.getElementById('birthDate'),
    },
    buttons: {
        btnSubmit: document.getElementById('btnSubmit'),

    }
};

/**
 * Array de objetos que contiene informacion para as validaciones
 * cada objeto contiene una referencia a cada campo, un array de objetos
 * de validaciones que tendra, el ID del error, el mensaje y la funcion de validacion
 */
export const fieldConfigurations = [
    {
        input: formElements.fields.name,
        validations: [
            {
                errorId: `${formElements.fields.name.id}Required`,//template literals
                errorMessage: 'Name is mandatory',
                //Las validaciones retornaran un false cuando debe mostrar el mensaje de error
                //y un true cuando no debe mostrarlo
                validationFunction: (value) => {
                    return value.trim() !== '';
                }

            }
        ]
    },
    {
        input: formElements.fields.description,
        validations: [
            {
                errorId: `${formElements.fields.description.id}Required`,//template literals
                errorMessage: 'A description is mandatory',
                //Las validaciones retornaran un false cuando debe mostrar el mensaje de error
                //y un true cuando no debe mostrarlo
                validationFunction: (value) => {
                    return value.trim() !== '';
                }

            }
        ]
    },
    {
        input: formElements.fields.email,
        validations: [
            {
                errorId: `${formElements.fields.email.id}Required`,//template literals
                errorMessage: 'Email is mandatory',
                //Las validaciones retornaran un false cuando debe mostrar el mensaje de error
                //y un true cuando no debe mostrarlo
                validationFunction: (value) => {
                    return value.trim() !== '';
                }

            },
            {
                errorId: `${formElements.fields.email.id}Pattern`,//template literals
                errorMessage: "Please write a valid email. i.e. example@domain.com",
                validationFunction: (value) => {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
                }
            }
        ]

    },
    {
        input: formElements.fields.birthDate,
        validations: [
            {
                errorId: `${formElements.fields.birthDate.id}Required`,//template literals
                errorMessage: 'BirthDate is mandatory',
                //Las validaciones retornaran un false cuando debe mostrar el mensaje de error
                //y un true cuando no debe mostrarlo
                validationFunction: (value) => {
                    return value.trim() !== '';
                }

            }
        ]
    },
];

export function getFormData() {
    // const formData = new FormData(formElements.form);
    // return Object.FormData.entries();
    const teacher = {
        id: formElements.fields.id.value.trim() ? parseInt(formElements.fields.id.value.trim()) : new Date().getTime(),
        name: formElements.fields.name.value,
        description: formElements.fields.description.value,
        email: formElements.fields.email.value,
        birthDate: formElements.fields.birthDate.value,
    };
    return teacher;
}

export function resetForm() {
    formElements.form.reset();
    hideIdAndChangeElementForNew();
}

export function setFormData(teacher){
    const{ id, name, description, email, birthDate} = teacher;
    formElements.fields.id.value = id;
    formElements.fields.name.value = name;
    formElements.fields.description.value = description;
    formElements.fields.email.value = email;
    formElements.fields.birthDate.value = birthDate;
    showIdAndChangeElementForEdit();
}

function showIdAndChangeElementForEdit(){
    formElements.containerId.classList.replace('d-none', 'd-block');
    formElements.buttons.btnSubmit.classList.replace('btn-success', 'btn-primary');
    formElements.buttons.btnSubmit.textContent = 'Update';
}

function hideIdAndChangeElementForNew(){
    formElements.containerId.classList.replace('d-block', 'd-none');
    formElements.buttons.btnSubmit.classList.replace('btn-primary', 'btn-success');
    formElements.buttons.btnSubmit.textContent = 'Submit';
}