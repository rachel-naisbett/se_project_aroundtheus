export default class UserInfo {
  constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userJob.textContent,
    };
  }
  setUserInfo({ name, about }) {
    this._userName.textContent = name;
    this._userJob.textContent = about;
  }

  setAvatarUrl({ avatar }) {
    this._userAvatar.src = avatar;
  }
}
