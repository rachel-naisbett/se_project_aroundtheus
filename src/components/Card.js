export default class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick,
    handleDislikeClick
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._isLiked = isLiked;
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._handleLikeClick = handleLikeClick;
    this._handleDislikeClick = handleDislikeClick;
  }

  _setEventListeners() {
    //LIKE BUTTON
    this._likeButton.addEventListener("click", () => {
      if (this._isLiked) {
        this._handleDislikeClick(this._id, this);
      } else {
        this._handleLikeClick(this._id, this);
      }
    });
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
    this._likeButton = this._cardElement.querySelector(".card__icon");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );

    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    if (this._isLiked) {
      this.renderLike();
    }

    this._setEventListeners();
    return this._cardElement;
  }

  like() {
    this._isLiked = !this._isLiked;
    this.renderLike();
  }
  dislike() {
    this._isLiked = !this._isLiked;
    this._likeButton.classList.remove("card__icon-button_active");
  }

  renderLike() {
    this._likeButton.classList.add("card__icon-button_active");
  }
}
