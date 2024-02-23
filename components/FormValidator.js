export default class FormValidator {
  constructor(formElement, config) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._formElement = formElement;
    this._submitButton = document.querySelector(".modal__button");
    this._inputElements = document.querySelectorAll(".modal__input");
  }

  //CHECK INPUT VALIDITY
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //ENABLE VALIDATION
  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }

  //EVENT LISTENERS
  _setEventListeners(formElement) {
    this._toggleButtonState(this._inputElements);
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  //TOGGLE BUTTON
  _toggleButtonState(inputElements) {
    let foundInvalid = false;
    this._inputElements.forEach((inputSelector) => {
      if (!inputSelector.validity.valid) {
        foundInvalid = true;
      }
    });
    if (foundInvalid) {
      this._submitButton.classList.add("modal__button_disabled");
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove("modal__button_disabled");
      this._submitButton.disabled = false;
    }
  }
  //SHOW ERROR MESSAGE
  _showInputError(inputElement, errorMessage) {
    const errorMessageEl = this._formElement(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = errorMessage;
    errorMessageEl.classList.add(this._errorClass);
  }
  //HIDE ERROR MESSAGE
  _hideInputError(inputElement) {
    const errorMessageEl = this._formElement(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }
}
