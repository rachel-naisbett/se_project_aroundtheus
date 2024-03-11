import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";

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

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

/* Variables*/
const modals = document.querySelectorAll(".modal");
const addCardButton = document.querySelector(".profile__add-button");
const cardModal = document.querySelector("#cardModal");
const cardTitle = document.querySelector(".card__title");
const cardLink = document.querySelector(".card__image");
const cardModalTitle = document.querySelector("#card-modal__input-title");
const cardModalLink = document.querySelector("#card-modal__input-imagelink");
const cardModalClose = document.querySelector("#card-modal__close");
const cardModalSave = document.querySelector("#cardModal__button");
const cardsWrap = document.querySelector(".card-wrapper");

const profileEditButton = document.querySelector(".profile__arrow");
const profileModal = document.querySelector("#profileModal");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subheading");

const modalInputName = document.querySelector("#profileModal__input-name");
const modalInputDescription = document.querySelector(
  "#profileModal__input-description"
);

const profileModalClose = document.querySelector("#profile-modal__close");
const profileModalForm = document.forms["profileModalForm"];
const cardModalForm = document.forms["cardModalForm"];
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".card-wrapper");

// const cardModalImage = document.querySelector(".cardImage__modal-image");
// const imageModaltext = document.querySelector(".card__imageModal-text");

// EVENT HANDLERS
// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", handleEscClick);
// }

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", handleEscClick);
// }

// addCardButton.addEventListener("click", () => {
//   openModal(cardModal);
// });

// profileModalForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   profileName.textContent = modalInputName.value;
//   profileDescription.textContent = modalInputDescription.value;
//   closeModal(profileModal);
// });

// cardModalForm.addEventListener("submit", (e) => {
//   closeModal(cardModal);
//   e.preventDefault();
//   const cardData = {
//     name: cardModalTitle.value,
//     link: cardModalLink.value,
//   };
//   cardsWrap.prepend(getCardElement(cardData));
//   cardModalForm.reset();
// });

// profileEditButton.addEventListener("click", () => {
//   modalInputName.value = profileName.textContent;
//   modalInputDescription.value = profileDescription.textContent;
//   openModal(profileModal);
// });

// CREATE NEW CARD FUNCTION
function getCardElement(cardData) {
  return new Card(cardData, "#card-template", handleImageClick).getView();
}

function handleImageClick(imageData) {
  openModal(cardImageModal);
  cardModalImage.src = this._link;
  imageModaltext.textContent = this._name;
  cardModalImage.alt = this._cardImage.alt;
}

// initialCards.forEach((cardData) => {
//   cardsWrap.prepend(getCardElement(cardData));
// });

// CARD IMAGE MODAL
// const cardImageModal = document.querySelector(".cardImage__modal");

// const cardImageCloseButton = document.querySelector(
//   ".cardImage__imageModalButton"
// );

//CODE TO CLOSE MODALS BY OVERLAY AND EXIT BUTTON

// function handleEscClick(e) {
//   if (e.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     closeModal(openedModal);
//   }
// }

// modals.forEach((modal) => {
//   modal.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("modal_opened")) {
//       closeModal(modal);
//     }
//     if (evt.target.classList.contains("modal__close")) {
//       closeModal(modal);
//     }
//   });
// });

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: ".modal__input-error",
  errorClass: ".modal__input-error_active",
  invalidInputClass: "modal__input-invalid",
};

// const editForm = document.forms["profileModalForm"];
// const cardForm = document.forms["cardModalForm"];

// const editFormValidator = new FormValidator(editForm, config);
// editFormValidator.enableValidation();

// const cardFormValidator = new FormValidator(cardForm, config);
// cardFormValidator.enableValidation();

// //SPRINT-EIGHT
// class Section {
//   constructor(newCard) {}

//   renderItems() {
//     initialCards.forEach((cardData) => {});
//   }

//   renderer(){
//     cardsWrap.prepend(getCardElement(cardData));
//   }

//   addItem(
//     getCardElement(cardData) {
//       return new Card(cardData, "#card-template", handleImageClick).getView();
//     }
//   );
// }
// }

// const newCard{
//   items: array,
//   renderer: function
// }

// //CREATE NEW INSTANCE
// const newProfilePopup = new PopupWithForm("#profileModal", handleFormSubmit);
// const newCardPopup = new PopupWithForm("#cardModal", handleFormSubmit);
// const newImagePopup = new PopupWithImage("#imageModal");

// this._handleFormSubmit = () => {
//   this._profileName.textContent = this._modalInputName.value;
//   this._profileDescription.textContent = this._modalInputDescription.value;
// };

// this._popupForm.addEventListener("submit", (e) => {
//   this.close();
//   e.preventDefault();
//   // const cardData = {
//   //   name: cardModalTitle.value,
//   //   link: cardModalLink.value,
//   // };
//   // cardsWrap.prepend(getCardElement(cardData));
//   cardModalForm.reset();
// });

// const newCardData = {
//   name: cardModalTitle.value,
//   link: cardModalLink.value,
// };

// initialCards.forEach((item) => {
//   const card = new Card(item, "#card-template", handleImageClick());
//   console.log(card);
//   const cardView = card.getView();
//   console.log(cardView);
//   section.renderer(cardView);
// });

const cardWrapper = document.querySelector(".card-wrapper");
const section = new Section(sectionObject, cardWrapper);

//OBJECT FOR SECTION
const sectionObject = {
  items: initialCards,
  renderer: (renderer = () => {
    const card = new Card(item, "#card-template", handleImageClick());
    const cardView = card.getView();
    addItem();
  }),
};
