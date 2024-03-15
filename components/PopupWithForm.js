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
    this._inputList = this._popupForm.querySelectorAll(".modal__input");
  }
  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners = () => {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this.getInputValues());
      this.close();
    });
  };

  getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }
}
