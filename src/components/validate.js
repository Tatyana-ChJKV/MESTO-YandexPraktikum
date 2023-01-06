function showInputError(form, input, errorMessage, settings) {
    const error = form.querySelector(`.${input.id}-error`);
    error.classList.add(settings.errorClass);
    error.textContent = errorMessage;
    input.classList.add(settings.inputErrorClass);
}

function hideInputError(form, input, settings) {
    const error = form.querySelector(`.${input.id}-error`);
    error.classList.remove(settings.errorClass);
    error.textContent = '';
    input.classList.remove(settings.inputErrorClass);
}

function hasInvalidInput(inputList) {
    return inputList.some(function (input) {
        return !input.validity.valid;
    });
}

function toggleButtonState(inputList, button, settings) {
    if (hasInvalidInput(inputList)) {
        button.classList.add(settings.inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(settings.inactiveButtonClass);
        button.disabled = false;
    }
}

function checkInput(form, input, settings) {
    if (input.validity.valid) {
        hideInputError(form, input, settings);
    } else {
        showInputError(form, input, input.validationMessage, settings);
    }
}

function addInputEventListeners(form, settings) {
    const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
    const button = form.querySelector(settings.submitButtonSelector);
    toggleButtonState(inputList, button, settings);
    inputList.forEach(function (input) {
        input.addEventListener('input', function () {
            checkInput(form, input, settings);
            toggleButtonState(inputList, button, settings);
        });
    });
}

export function enableValidation(settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));

    formList.forEach(function (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        addInputEventListeners(form, settings);
    });
}