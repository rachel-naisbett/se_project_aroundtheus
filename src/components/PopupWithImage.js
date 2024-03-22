import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardModalImage = document.querySelector(".cardImage__modal-image");
    this._imageModaltext = document.querySelector(".card__imageModal-text");
    this._cardImage = document.querySelector(".card__image");
  }
  open(name, link) {
    this._cardModalImage.src = link;
    this._imageModaltext.textContent = name;
    this._cardModalImage.alt = name;
    super.open();
  }
}
