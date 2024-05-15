export default class FormValidator {
  constructor(formElement, config) {
    this._invalidInputClass = config.invalidInputClass;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputElements = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
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
    this._toggleButtonState();
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  //TOGGLE BUTTON
  _toggleButtonState() {
    if (this._checkFormValidity()) {
      this.disableButton();
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _checkFormValidity() {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //SHOW ERROR MESSAGE
  _showInputError(inputElement, errorMessage) {
    this._errorMessageEl = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    this._errorMessageEl.textContent = errorMessage;
    this._errorMessageEl.classList.add(this._errorClass);
    inputElement.classList.add(this._invalidInputClass);
  }
  //HIDE ERROR MESSAGE
  _hideInputError(inputElement) {
    this._errorMessageEl = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    this._errorMessageEl.textContent = "";
    this._errorMessageEl.classList.remove(this._errorClass);
    inputElement.classList.remove(this._invalidInputClass);
  }
}
