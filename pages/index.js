import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

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

//VARIABLES
const cardWrapper = document.querySelector(".card-wrapper");
const cardModalTitle = document.querySelector("#card-modal__input-title");
const cardModalLink = document.querySelector("#card-modal__input-imagelink");
const addCardButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__arrow");

const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subheading");
const modalInputName = document.querySelector("#profileModal__input-name");
const modalInputDescription = document.querySelector(
  "#profileModal__input-description"
);

const cardTitle = document.querySelector(".card__title");
const cardImage = document.querySelector(".modal__cardImage_container");
const editForm = document.forms["profileModalForm"];
const cardForm = document.forms["cardModalForm"];

//FORM VALIDATOR OBJECT
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: ".modal__input-error",
  errorClass: ".modal__input-error_active",
  invalidInputClass: "modal__input-invalid",
};

// EVENT HANDLERS
addCardButton.addEventListener("click", () => {
  newCardPopup.open();
});

profileEditButton.addEventListener("click", () => {
  newProfilePopup.open();
  const profileInfo = newUserInfo.getUserInfo();
  newProfilePopup._getInputValues(profileInfo);
});

// handleFormSubmit & handleImage FUNCTIONS
const handleImageClick = (name, link) => {
  newImagePopup.open(name, link);
};

const handleAddCardSubmit = () => {
  cardTitle.textContent = cardModalTitle.value;
  cardImage.src = cardModalLink.value;
};

const handleEditProfileSubmit = (item) => {
  profileName.textContent = item.name;
  profileDescription.textContent = item.name;
};

//OBJECT FOR USERINFO
const userInfoObject = {
  userNameSelector: ".profile__title",
  userJobSelector: ".profile__subheading",
};

//SECTION OBJECT
const sectionObject = {
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, "#card-template", handleImageClick);
    const cardView = card.getView();
    section.addItem(cardView);
  },
};

//CREATE NEW INSTANCE
const newProfilePopup = new PopupWithForm(
  "#profileModal",
  handleEditProfileSubmit
);
const newCardPopup = new PopupWithForm("#cardModal", handleAddCardSubmit);
const newImagePopup = new PopupWithImage("#imageModal");
const section = new Section(sectionObject, cardWrapper);
const newUserInfo = new UserInfo(userInfoObject);
const editFormValidator = new FormValidator(editForm, config);
const cardFormValidator = new FormValidator(cardForm, config);

//const applyProfileData = newUserInfo.setUserInfo();

//CALLBACKS
section.renderItems();
newCardPopup.setEventListeners();
newProfilePopup.setEventListeners();
newImagePopup.setEventListeners();
editFormValidator.enableValidation();
cardFormValidator.enableValidation();

//newProfilePopup.setEventListeners(applyProfileData);
