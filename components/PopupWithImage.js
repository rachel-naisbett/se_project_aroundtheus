import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardModalImage = document.querySelector(".cardImage__modal-image");
    this._imageModaltext = document.querySelector(".card__imageModal-text");
    this._cardImage = document.querySelector(".card__image");
  }
  open() {
    this._cardModalImage.src = this._link;
    this._imageModaltext.textContent = this._name;
    this._cardModalImage.alt = this._cardImage.alt;
    super.open();
  }
}
