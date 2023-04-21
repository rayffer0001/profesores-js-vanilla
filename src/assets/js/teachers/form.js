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

export function resetForm(){
    formElements.form.reset();
}