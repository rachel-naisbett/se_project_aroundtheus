export default class Card {
  constructor(
    { name, link, _id },
    cardSelector,
    handleImageClick,
    handleDeleteClick
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  //DECONSTRUCTING SETEVENTLISTENERS
  _toggleLike = () => {
    this._likeButton.classList.toggle("card__icon-button_active");
  };

  _setEventListeners() {
    //LIKE BUTTON
    this._likeButton.addEventListener("click", this._toggleLike);

    //DELETE BUTTON
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteClick(this)
    );
    //IMAGE BUTTON
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  deleteCard() {
    this._cardElement.remove();
  }

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
