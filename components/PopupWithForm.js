import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._profileDescription = document.querySelector(".profile__subheading");
    this._profileName = document.querySelector(".profile__title");
    this._modalInputName = document.querySelector("#profileModal__input-name");
    this._modalInputDescription = document.querySelector(
      "#profileModal__input-description"
    );
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
      this.close();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  _getInputValues(item) {
    const formValues = {};
    this._inputList.forEach((item) => {
      formValues[item.name] = item.value;
    });
    return formValues;
  }
}
