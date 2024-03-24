import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";

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
const addCardButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__arrow");

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
  cardPopup.open();
});

profileEditButton.addEventListener("click", () => {
  profilePopup.open();
  const profileInfo = userInfoInstance.getUserInfo();
  profilePopup.setInputValues(profileInfo);
});

// handleFormSubmit & handleImage FUNCTIONS
const handleImageClick = (name, link) => {
  imagePopup.open(name, link);
};

const handleAddCardSubmit = (data) => {
  const cardElement = createCard(data);
  section.addItem(cardElement);
};

const handleEditProfileSubmit = (formValues) => {
  userInfoInstance.setUserInfo(formValues);
};

//OBJECT FOR USERINFO
const userInfoObject = {
  userNameSelector: ".profile__title",
  userJobSelector: ".profile__subheading",
};

//NEW CARD
const createCard = (item) => {
  const card = new Card(item, "#card-template", handleImageClick);
  return card.getView();
};

//SECTION OBJECT
const sectionObject = {
  items: initialCards,
  renderer: (data) => {
    const cardElement = createCard(data);
    section.addItem(cardElement);
  },
};

//CREATE NEW INSTANCE
const profilePopup = new PopupWithForm(
  "#profileModal",
  handleEditProfileSubmit
);
const cardPopup = new PopupWithForm("#cardModal", handleAddCardSubmit);
const imagePopup = new PopupWithImage("#imageModal");
const section = new Section(sectionObject, cardWrapper);
const userInfoInstance = new UserInfo(userInfoObject);
const editFormValidator = new FormValidator(editForm, config);
const cardFormValidator = new FormValidator(cardForm, config);

//CALLBACKS
section.renderItems();
cardPopup.setEventListeners();
profilePopup.setEventListeners();
imagePopup.setEventListeners();
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
