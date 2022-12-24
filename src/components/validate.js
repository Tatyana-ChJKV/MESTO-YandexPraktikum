function showInputError(form, input, errorMessage) {
    const error = form.querySelector(`.${input.id}-error`);
    error.classList.add('popup__input-error-active');
    error.textContent = errorMessage;
    input.classList.add('popup__form-text-error');
}

function hideInputError(form, input) {
    const error = form.querySelector(`.${input.id}-error`);
    error.classList.remove('popup__input-error-active');
    error.textContent = '';
    input.classList.remove('popup__form-text-error');
}

function hasInvalidInput(inputList) {
    return inputList.some(function (input) {
        return !input.validity.valid;
    });
}

function toggleButtonState(inputList, button) {
    if (hasInvalidInput(inputList)) {
        button.classList.add('popup__button-inactive');
        button.disabled = true;
    } else {
        button.classList.remove('popup__button-inactive');
        button.disabled = false;
    }
}

function checkInput(form, input) {
    if (input.validity.valid) {
        hideInputError(form, input);
    } else {
        showInputError(form, input, input.validationMessage);
    }
}

function addInputEventListeners(form) {
    const inputList = Array.from(form.querySelectorAll('.popup__form-text'));
    const button = form.querySelector('.popup__button');
    toggleButtonState(inputList, button);
    inputList.forEach(function (input) {
        input.addEventListener('input', function () {
            checkInput(form, input);
            toggleButtonState(inputList, button);
        });
    });
}

export function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(function (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        addInputEventListeners(form);
    });
}