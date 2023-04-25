//It does the validations with js
export function validateForm(fieldConfigurations) {
    let isValid = true;
    fieldConfigurations.forEach(fieldConfig => {
        fieldConfig.validations.forEach((validationConfig) => {
            const currentFieldIsValid = validateField(fieldConfig.input, validationConfig);
            isValid = isValid && currentFieldIsValid;
        })
    });
    return isValid;
}

function validateField(input, validationConfig) {
    const { errorId, errorMessage, validationFunction } = validationConfig;
    const fieldIsValid = validationFunction(input.value);


    // Negacion es lo mismo que decir === false
    if (!fieldIsValid) {
        input.classList.add('is-invalid');
        const errorMessageElement = createErrorMessageElement(errorId, errorMessage);
        input.insertAdjacentElement('afterend', errorMessageElement);
    }else{
        input.classList.add('is-valid');
    }
    return fieldIsValid;
}

/**
 * Crea un elemento de mensaje de error para ser insertado despues de que un campo no es valido
 * @private
 * @param {String} errorId - El ID del elemento del mensaje de error
 * @param {String} errorMessage - El mensaje de error que se muestra al usuario
 * @returns {HTMLDivElement} Retorna el elemento que contiene el mensaje de error
 */
function createErrorMessageElement(errorId, errorMessage) {
    const errorMessageElement = document.createElement('div');
    errorMessageElement.classList.add('Invalid-feedback');
    errorMessageElement.setAttribute('id', errorId);
    errorMessageElement.textContent = errorMessage;
    return errorMessageElement;
}

function removeErrorMessageElements() {

}

function removeInputErrorMessage(input) {

}