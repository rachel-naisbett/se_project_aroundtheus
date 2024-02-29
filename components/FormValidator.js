export default class FormValidator {
  constructor(formElement, config) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(".modal__button");
    this._inputElements = this._formElement.querySelectorAll(".modal__input");
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

  _inputArray = () => {
    this._inputElements.every((inputSelector) => {
      if (!inputSelector.validity.valid) {
        foundInvalid = true;
      }
    });
  };

  //TOGGLE BUTTON
  _toggleButtonState(inputElements) {
    let foundInvalid = false;
    this._inputArray();
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
    this._errorMessageEl = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    this._errorMessageEl.textContent = errorMessage;
    this._errorMessageEl.classList.add(this._errorClass);
  }
  //HIDE ERROR MESSAGE
  _hideInputError(inputElement) {
    this._errorMessageEl = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    this._errorMessageEl.textContent = "";
    this._errorMessageEl.classList.remove(this._errorClass);
  }
}
