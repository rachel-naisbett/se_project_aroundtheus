export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }
  _setEventListeners() {
    //LIKE BUTTON
    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("card__icon-button_active");
    });
    //DELETE BUTTON
    this._deleteButton.addEventListener("click", (event) => {
      this._deleteCard(event);
    });
    //IMAGE BUTTON
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  _deleteCard = (e) => {
    e.target.closest.this._cardElement.remove();
    this._cardElement = null;
  };

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeButton = this._cardElement.querySelector(".card__icon");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();
    return this._cardElement;
  }
}
