const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* Variables*/
const addCardButton = document.querySelector(".profile__add-button");
const cardModal = document.querySelector(".card-modal");
const cardTitle = document.querySelector(".card__title");
const cardLink = document.querySelector(".card__image");
const cardModalTitle = document.querySelector("#card-modal__input-title");
const cardModalLink = document.querySelector("#card-modal__input-imagelink");
const cardModalClose = document.querySelector(".card-modal__close");
const cardModalSave = document.querySelector(".card-modal__button");
const cardsWrap = document.querySelector(".card-wrapper");
const cardModalForm = document.querySelector(".card-modal__form");
const likeButton = document.querySelectorAll(".card__icon");

const profileEditButton = document.querySelector(".profile__arrow");
const profileEditModal = document.querySelector(".modal");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subheading");

const modalInputName = document.querySelector("#modal__input-name");
const modalInputDescription = document.querySelector(
  "#modal__input-description"
);

const profileModalClose = document.querySelector(".modal__close");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".card-wrapper");

const cardModalImage = document.querySelector(".cardImage__modal-image");
const imageModaltext = document.querySelector(".card__imageModal-text");

// EVENT HANDLERS
addCardButton.addEventListener("click", () => {
  cardModal.classList.add("card-modal_opened");
});

function closeCardModal(modal) {
  cardModal.classList.remove("card-modal_opened");
}

cardModalClose.addEventListener("click", () => {
  closeCardModal();
});

cardModalForm.addEventListener("submit", (e) => {
  closeCardModal();
  e.preventDefault();
  const cardData = {
    name: cardModalTitle.value,
    link: cardModalLink.value,
  };
  cardsWrap.prepend(getCardElement(cardData));
});

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", () => {
  modalInputName.value = profileName.textContent;
  modalInputDescription.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileModalClose.addEventListener("click", () => {
  closePopup();
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = modalInputName.value;
  profileDescription.textContent = modalInputDescription.value;
  closePopup();
});

// CREATE NEW CARD FUNCTION
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__icon");

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.link;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__icon-button_active");
  });

  cardImageEl.addEventListener("click", () => {
    handleImageClick(cardData);
  });

  cardImageEl.addEventListener("click", () => {
    cardImageModal.classList.add("cardImage_modal-opened");
  });

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => deleteCard(cardElement));

  return cardElement;
}

function handleImageClick(imageData) {
  cardImageModal.classList.add("cardImage_modal-opened");
  cardModalImage.src = imageData.link;
  imageModaltext.textContent = imageData.name;
  console.log(imageData);
}

initialCards.forEach((cardData) => {
  cardsWrap.prepend(getCardElement(cardData));
});

// DELETE CARD FUNCTION
function deleteCard(element) {
  element.remove();
}

// CARD IMAGE MODAL
const cardImageModal = document.querySelector(".cardImage__modal");

const cardImageCloseButton = document.querySelector(
  ".cardImage__imageModalButton"
);

cardImageCloseButton.addEventListener("click", () => {
  closeCardImageModal(close);
});

function closeCardImageModal(close) {
  cardImageModal.classList.remove("cardImage_modal-opened");
}
