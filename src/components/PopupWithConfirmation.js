import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }

  setSubmitHandler(handler) {
    this._handleSubmit = handler;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSubmit();
      this.close();
    });
    super.setEventListeners();
  }
}
