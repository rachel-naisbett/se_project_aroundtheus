export class Api {
  constructor(options) {
    // constructor body
  }

  ///TURN THIS INTO A FUNCTION FOR ALL METHODS
  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
      },
    }).then(this.checkResponse);
  }
  getUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
      },
    }).then(this.jsonMethods);
  }

  editProfileData() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Rachel Naisbett",
        about: "Explorer",
      }),
    }).then(this.checkResponse);
  }

  addNewCard(data) {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: {
        authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this.checkResponse);
  }

  deleteCard(id) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/cards/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
          "Content-Type": "application/json",
        },
      }
    ).then(this.checkResponse);
  }

  likeCard() {
    return PUT(
      "https://around-api.en.tripleten-services.com/v1/cards/cardId/likes",
      {
        headers: {
          authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
          "Content-Type": "application/json",
        },
      }
    ).then(this.checkResponse);
  }

  deleteLike() {
    return DELETE(
      "https://around-api.en.tripleten-services.com/v1/cards/cardId/likes",
      {
        headers: {
          authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
          "Content-Type": "application/json",
        },
      }
    ).then(this.checkResponse);
  }
}
