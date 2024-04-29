export class Api {
  constructor(options) {
    // constructor body
  }

  _checkResponse(res) {
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
    }).then(this._checkResponse);
  }
  getUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
      },
    }).then(this._checkResponse);
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
    }).then(this._checkResponse);
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
    }).then(this._checkResponse);
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
    ).then(this._checkResponse);
  }

  likeCard(id) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/cards/${id}/likes`,
      {
        method: "PUT",
        headers: {
          authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }

  deleteLike(id) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/cards/${id}/likes`,
      {
        method: "DELETE",
        headers: {
          authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }

  editAvatar(data) {
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: "14d5451e-ea68-4211-8036-23527b03c3ac",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      }
    ).then(this._checkResponse);
  }
}
