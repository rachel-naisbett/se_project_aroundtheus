export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._formSelector = config.formSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
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
    this._formSelector.forEach(() => {
      this._formSelector.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      this._setEventListeners();
    });
  }

  //EVENT LISTENERS
  _setEventListeners() {
    this._toggleButtonState();
    this._inputSelector.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  }

  //TOGGLE BUTTON
  _toggleButtonState(inputSelector) {
    let foundInvalid = false;
    this._inputSelector.forEach((inputSelector) => {
      if (!inputSelector.validity.valid) {
        foundInvalid = true;
      }
    });
    if (foundInvalid) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = true;
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = false;
    }
  }
  //SHOW ERROR MESSAGE
  _showInputError(inputElement, errorMessage) {
    const errorMessageEl = this._formSelector.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = errorMessage;
    errorMessageEl.classList.add(this._errorClass);
  }
  //HIDE ERROR MESSAGE
  _hideInputError(inputElement) {
    const errorMessageEl = this._formSelector.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }
}
