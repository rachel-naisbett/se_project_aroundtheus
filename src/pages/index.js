import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import { Api } from "../components/API.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import { userInfoObject } from "../components/utils/constants.js";
import { config } from "../components/utils/constants.js";

//VARIABLES
const cardWrapper = document.querySelector(".card-wrapper");
const addCardButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__arrow");
const profileAvatarButton = document.querySelector("#profile__imageButton");
const profileModalButton = document.querySelector("#profileModal__button");
const cardModalButton = document.querySelector("#cardModal__button");
const avatarModalButton = document.querySelector("#avatarModal__button");

const editForm = document.forms["profileModalForm"];
const cardForm = document.forms["cardModalForm"];
const avatarForm = document.forms["avatarForm"];

// EVENT HANDLERS
profileAvatarButton.addEventListener("click", () => {
  avatarPopup.open();
});

addCardButton.addEventListener("click", () => {
  cardPopup.open();
});

profileEditButton.addEventListener("click", () => {
  profilePopup.open();
  const profileInfo = userInfoInstance.getUserInfo();
  profilePopup.setInputValues({
    name: profileInfo.name,
    about: profileInfo.about,
  });
});

// handleFormSubmit & handleImage FUNCTIONS
const handleImageClick = (name, link) => {
  imagePopup.open(name, link);
};

const handleAddCardSubmit = (data) => {
  cardModalButton.textContent = "Saving...";
  api
    .addNewCard(data)
    .then((result) => {
      cardPopup.close();
      cardModalButton.textContent = "Save";
      const cardElement = createCard(result);
      section.addItem(cardElement);
      cardFormValidator.disableButton();
    })
    .catch((err) => {
      console.error(err);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      cardModalButton.textContent = "Save";
    });
};

const handleEditProfileSubmit = (formValues) => {
  profileModalButton.textContent = "Saving...";
  api
    .editProfileData(formValues)
    .then((formvalues) => {
      profilePopup.close();
      profileModalButton.textContent = "Save";
      userInfoInstance.setUserInfo(formValues);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      cardModalButton.textContent = "Save";
    });
};

const handleAvatarSubmit = (link) => {
  avatarModalButton.textContent = "Saving...";
  api
    .editAvatar(link)
    .then((avatar) => {
      avatarPopup.close();
      avatarModalButton.textContent = "Save";
      userInfoInstance.setAvatarUrl(avatar);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      cardModalButton.textContent = "Save";
    });
};

// this runs when you click the delete button on a card
const handleDeleteClick = (card) => {
  // this runs when you click the yes button in the confirmation modal
  const handleDeleteCard = () => {
    api
      .deleteCard(card._id)
      .then(() => {
        card.deleteCard();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  popupDelete.open();
  popupDelete.setSubmitHandler(handleDeleteCard);
};

const handleLikeClick = (id, card) => {
  api.likeCard(id).then(() => {
    card.like();
  });
};

const handleDislikeClick = (id, card) => {
  api.deleteLike(id).then(() => {
    card.dislike();
  });
};

//NEW CARD
const createCard = (item) => {
  const card = new Card(
    item,
    "#card-template",
    handleImageClick,
    handleDeleteClick,
    handleLikeClick,
    handleDislikeClick
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
const avatarPopup = new PopupWithForm("#avatarModal", handleAvatarSubmit);
const section = new Section(sectionObject, cardWrapper);
const userInfoInstance = new UserInfo(userInfoObject);
const editFormValidator = new FormValidator(editForm, config);
const cardFormValidator = new FormValidator(cardForm, config);
const popupDelete = new PopupWithConfirmation("#deletePopup");
const avatarFormValidator = new FormValidator(avatarForm, config);

//CALLBACKS
avatarPopup.setEventListeners();
cardPopup.setEventListeners();
profilePopup.setEventListeners();
imagePopup.setEventListeners();
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();
popupDelete.setEventListeners();

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
    "Content-Type": "application/json",
  },
  //catchError:
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
    userInfoInstance.setAvatarUrl(result);
  })
  .catch((err) => {
    console.error(err);
  });
