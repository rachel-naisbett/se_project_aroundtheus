import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import { Api } from "../components/API.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

//VARIABLES
const cardWrapper = document.querySelector(".card-wrapper");
const addCardButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__arrow");
const deletePopupButton = document.querySelector("#confirm-delete-button");

const deletePopup = document.querySelector("#deletePopup");
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
  api
    .addNewCard(data)
    .then((result) => {
      debugger;
      const cardElement = createCard(result);
      section.addItem(cardElement);
    })
    .catch((err) => {
      console.error(err);
    });
};

const handleEditProfileSubmit = (formValues) => {
  console.log(formValues);
  api.editProfileData();
  userInfoInstance.setUserInfo(formValues);
};

// this runs when you click the delete button on a card
const handleDeleteClick = (card) => {
  // this runs when you click the yes button in the confirmation modal
  const handleDeleteCard = () => {
    api.deleteCard(card._id).then(() => {
      card.deleteCard();
    });
    popupDelete.open();
    popupDelete.setSubmitHandler(handleDeleteCard);
  };
};

//OBJECT FOR USERINFO
const userInfoObject = {
  userNameSelector: ".profile__title",
  userJobSelector: ".profile__subheading",
};

//NEW CARD
const createCard = (item) => {
  const card = new Card(
    item,
    "#card-template",
    handleImageClick,
    handleDeleteClick
  );
  return card.getView();
};

//SECTION OBJECT
const sectionObject = {
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
const popupDelete = new PopupWithConfirmation("#deletePopup");

//CALLBACKS
//section.renderItems();
cardPopup.setEventListeners();
profilePopup.setEventListeners();
imagePopup.setEventListeners();
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
popupDelete.setEventListeners();

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
    "Content-Type": "application/json",
  },
});

//API CALLBACKS
api
  .getInitialCards()
  .then((result) => {
    section.renderItems(result);
  })
  .catch((err) => {
    console.error(err);
  });

api
  .getUserInfo()
  .then((result) => {
    userInfoInstance.setUserInfo(result);
  })
  .catch((err) => {
    console.error(err);
  });

// api
//   .editProfileData()
//   .then((result) => {
//     profilePopup.setInputValues(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });