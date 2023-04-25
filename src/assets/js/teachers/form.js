// Configuration and interaction about the operations in the form
//we are going to create an object

/** 
 * Este objeto contiene las referenciaas a los elementos clave del formulario
 */
export const formElements = {
    form: document.getElementById('teacherForm'),
    fields: {
        name: document.getElementById('txtName'),
        description: document.getElementById('txtDescription'),
        email: document.getElementById('txtEmail'),
        birthDate: document.getElementById('birthDate'),
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
];

export function getFormData() {
    // const formData = new FormData(formElements.form);
    // return Object.FormData.entries();
    const teacher = {
        id: new Date().getTime(),
        name: formElements.fields.name.value,
        description: formElements.fields.description.value,
        email: formElements.fields.email.value,
        birthDate: formElements.fields.birthDate.value,
    };
    return teacher;
}

export function resetForm() {
    formElements.form.reset();
}