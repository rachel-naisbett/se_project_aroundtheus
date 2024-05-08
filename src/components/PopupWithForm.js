import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = [...this._popupForm.querySelectorAll(".modal__input")];
    this._closeButtonPopup = this._popupElement.querySelector(".modal__close");
    this._popupButton = this._popupElement.querySelector(".modal__button");
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  setInputValues(popupInfo) {
    this._inputList.forEach((item) => {
      item.value = popupInfo[item.name];
    });
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((item) => {
      formValues[item.name] = item.value;
    });
    return formValues;
  }
}
