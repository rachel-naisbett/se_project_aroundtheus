import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardModalImage = document.querySelector(".cardImage__modal-image");
    this._imageModaltext = document.querySelector(".card__imageModal-text");
  }
  handleImageClick() {
    this._cardModalImage.src = this._link;
    this._imageModaltext.textContent = this._name;
    this._cardModalImage.alt = this._cardImage.alt;
  }
}
