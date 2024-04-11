!function(){"use strict";class e{constructor(e,t,s){let{name:r,link:o}=e;this._name=r,this._link=o,this._cardSelector=t,this._handleImageClick=s}_toggleLike=()=>{this._likeButton.classList.toggle("card__icon-button_active")};_setEventListeners(){this._likeButton.addEventListener("click",this._toggleLike),this._deleteButton.addEventListener("click",this._deleteCard),this._cardImage.addEventListener("click",(()=>{this._handleImageClick(this._name,this._link)}))}_deleteCard=e=>{this._cardElement.remove(),this._cardElement=null};getView(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._likeButton=this._cardElement.querySelector(".card__icon"),this._deleteButton=this._cardElement.querySelector(".card__delete-button"),this._cardImage=this._cardElement.querySelector(".card__image"),this._cardTitle=this._cardElement.querySelector(".card__title"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._setEventListeners(),this._cardElement}}class t{constructor(e,t){this._invalidInputClass=t.invalidInputClass,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._formElement=e,this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inputElements=[...this._formElement.querySelectorAll(this._inputSelector)]}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}enableValidation(){this._formElement.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}_setEventListeners(e){this._toggleButtonState(),this._inputElements.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}_toggleButtonState(){this._checkFormValidity()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}_checkFormValidity(){return this._inputElements.some((e=>!e.validity.valid))}_showInputError(e,t){this._errorMessageEl=this._formElement.querySelector(`#${e.id}-error`),e.classList.add(this._inputErrorClass),this._errorMessageEl.textContent=t,this._errorMessageEl.classList.add(this._errorClass),e.classList.add(this._invalidInputClass)}_hideInputError(e){this._errorMessageEl=this._formElement.querySelector(`#${e.id}-error`),e.classList.remove(this._inputErrorClass),this._errorMessageEl.textContent="",this._errorMessageEl.classList.remove(this._errorClass),e.classList.remove(this._invalidInputClass)}}class s{constructor(e){this._popupElement=document.querySelector(e),this._closeButtonPopup=this._popupElement.querySelector(".modal__close")}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose=e=>{"Escape"===e.key&&this.close()};setEventListeners(){this._popupElement.addEventListener("click",(e=>{e.target!==this._closeButtonPopup&&e.target!==this._popupElement||this.close()}))}}class r extends s{constructor(e,t){super(e),this._popupForm=this._popupElement.querySelector(".modal__form"),this._handleFormSubmit=t,this._profileDescription=document.querySelector(".profile__subheading"),this._profileName=document.querySelector(".profile__title"),this._modalInputName=document.querySelector("#profileModal__input-name"),this._modalInputDescription=document.querySelector("#profileModal__input-description"),this._inputList=[...this._popupForm.querySelectorAll(".modal__input")],this._closeButtonPopup=this._popupElement.querySelector(".modal__close"),this._popupButton=this._popupElement.querySelector(".modal__button")}close(){this._popupForm.reset(),super.close()}setEventListeners(){this._popupForm.addEventListener("submit",(e=>{this._handleFormSubmit(this._getInputValues()),this.close()})),super.setEventListeners()}setInputValues(e){this._inputList.forEach((t=>{t.value=e[t.name]}))}_getInputValues(){const e={};return this._inputList.forEach((t=>{e[t.name]=t.value})),e}}const o=document.querySelector("card-wrapper"),i=document.querySelector(".profile__add-button"),n=document.querySelector(".profile__arrow"),a=document.forms.profileModalForm,l=document.forms.cardModalForm,c={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:".modal__input-error",errorClass:".modal__input-error_active",invalidInputClass:"modal__input-invalid"};i.addEventListener("click",(()=>{h.open()})),n.addEventListener("click",(()=>{m.open();const e=g.getUserInfo();m.setInputValues(e)}));const u=(e,t)=>{p.open(e,t)},_=t=>new e(t,"#card-template",u).getView(),d={items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:e=>{const t=_(e);E.addItem(t)}},m=new r("#profileModal",(e=>{g.setUserInfo(e)})),h=new r("#cardModal",(e=>{const t=_(e);E.addItem(t)})),p=new class extends s{constructor(e){super(e),this._cardModalImage=document.querySelector(".cardImage__modal-image"),this._imageModaltext=document.querySelector(".card__imageModal-text"),this._cardImage=document.querySelector(".card__image")}open(e,t){this._cardModalImage.src=t,this._imageModaltext.textContent=e,this._cardModalImage.alt=e,super.open()}}("#imageModal"),E=new class{constructor(e,t){let{items:s,renderer:r}=e;this._items=s,this._renderer=r,this._wrapper=t}renderItems=()=>{this._items.forEach((e=>{this._renderer(e)}))};addItem=e=>{this._wrapper.prepend(e)}}(d,o),g=new class{constructor(e){let{userNameSelector:t,userJobSelector:s}=e;this._userName=document.querySelector(t),this._userJob=document.querySelector(s)}getUserInfo(){return{name:this._userName.textContent,job:this._userJob.textContent}}setUserInfo(e){let{name:t,job:s}=e;this._userName.textContent=t,this._userJob.textContent=s}}({userNameSelector:".profile__title",userJobSelector:".profile__subheading"}),v=new t(a,c),S=new t(l,c);E.renderItems(),h.setEventListeners(),m.setEventListeners(),p.setEventListeners(),v.enableValidation(),S.enableValidation()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJCYkssRUFBb0IsSUFBSXRHLEVBQWNxRSxFQUFVbkUsR0FDaERxRyxFQUFvQixJQUFJdkcsRUFBY3VFLEVBQVVyRSxHQUd0RG1GLEVBQVFTLGNBQ1JyQixFQUFVM0Isb0JBQ1Y0QixFQUFhNUIsb0JBQ2JnQyxFQUFXaEMsb0JBQ1h3RCxFQUFrQjVFLG1CQUNsQjZFLEVBQWtCN0Usa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoeyBuYW1lLCBsaW5rIH0sIGNhcmRTZWxlY3RvciwgaGFuZGxlSW1hZ2VDbGljaykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBsaW5rO1xuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrID0gaGFuZGxlSW1hZ2VDbGljaztcbiAgfVxuXG4gIC8vREVDT05TVFJVQ1RJTkcgU0VURVZFTlRMSVNURU5FUlNcbiAgX3RvZ2dsZUxpa2UgPSAoKSA9PiB7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9faWNvbi1idXR0b25fYWN0aXZlXCIpO1xuICB9O1xuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL0xJS0UgQlVUVE9OXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fdG9nZ2xlTGlrZSk7XG5cbiAgICAvL0RFTEVURSBCVVRUT05cbiAgICB0aGlzLl9kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2RlbGV0ZUNhcmQpO1xuICAgIC8vSU1BR0UgQlVUVE9OXG4gICAgdGhpcy5fY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspO1xuICAgIH0pO1xuICB9XG5cbiAgX2RlbGV0ZUNhcmQgPSAoZSkgPT4ge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gbnVsbDtcbiAgfTtcblxuICBnZXRWaWV3KCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ljb25cIik7XG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIlxuICAgICk7XG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcbiAgICB0aGlzLl9jYXJkVGl0bGUgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xuXG4gICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XG4gICAgdGhpcy5fY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcblxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoZm9ybUVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2ludmFsaWRJbnB1dENsYXNzID0gY29uZmlnLmludmFsaWRJbnB1dENsYXNzO1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWcuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBjb25maWcuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3JcbiAgICApO1xuICAgIHRoaXMuX2lucHV0RWxlbWVudHMgPSBbXG4gICAgICAuLi50aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpLFxuICAgIF07XG4gIH1cblxuICAvL0NIRUNLIElOUFVUIFZBTElESVRZXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvL0VOQUJMRSBWQUxJREFUSU9OXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvL0VWRU5UIExJU1RFTkVSU1xuICBfc2V0RXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xuICAgIHRoaXMuX2lucHV0RWxlbWVudHMuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vVE9HR0xFIEJVVFRPTlxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2NoZWNrRm9ybVZhbGlkaXR5KCkpIHtcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBfY2hlY2tGb3JtVmFsaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudHMuc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcbiAgICB9KTtcbiAgfVxuXG4gIC8vU0hPVyBFUlJPUiBNRVNTQUdFXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xuICAgIHRoaXMuX2Vycm9yTWVzc2FnZUVsID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2VFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2ludmFsaWRJbnB1dENsYXNzKTtcbiAgfVxuICAvL0hJREUgRVJST1IgTUVTU0FHRVxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlRWwgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yTWVzc2FnZUVsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2VFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2ludmFsaWRJbnB1dENsYXNzKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9jbG9zZUJ1dHRvblBvcHVwID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlXCIpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0ID09PSB0aGlzLl9jbG9zZUJ1dHRvblBvcHVwIHx8XG4gICAgICAgIGUudGFyZ2V0ID09PSB0aGlzLl9wb3B1cEVsZW1lbnRcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fcG9wdXBGb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgdGhpcy5fcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19zdWJoZWFkaW5nXCIpO1xuICAgIHRoaXMuX3Byb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcbiAgICB0aGlzLl9tb2RhbElucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZU1vZGFsX19pbnB1dC1uYW1lXCIpO1xuICAgIHRoaXMuX21vZGFsSW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNwcm9maWxlTW9kYWxfX2lucHV0LWRlc2NyaXB0aW9uXCJcbiAgICApO1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IFsuLi50aGlzLl9wb3B1cEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9faW5wdXRcIildO1xuICAgIHRoaXMuX2Nsb3NlQnV0dG9uUG9wdXAgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XG4gICAgdGhpcy5fcG9wdXBCdXR0b24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fYnV0dG9uXCIpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX3BvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBzZXRJbnB1dFZhbHVlcyhwb3B1cEluZm8pIHtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS52YWx1ZSA9IHBvcHVwSW5mb1tpdGVtLm5hbWVdO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgZm9ybVZhbHVlc1tpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybVZhbHVlcztcbiAgfVxufVxuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC95b3NlbWl0ZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuLy9WQVJJQUJMRVNcbmNvbnN0IGNhcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhcmQtd3JhcHBlclwiKTtcbmNvbnN0IGFkZENhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5jb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXJyb3dcIik7XG5cbmNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJwcm9maWxlTW9kYWxGb3JtXCJdO1xuY29uc3QgY2FyZEZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImNhcmRNb2RhbEZvcm1cIl07XG5cbi8vRk9STSBWQUxJREFUT1IgT0JKRUNUXG5jb25zdCBjb25maWcgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwiLm1vZGFsX19pbnB1dC1lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIi5tb2RhbF9faW5wdXQtZXJyb3JfYWN0aXZlXCIsXG4gIGludmFsaWRJbnB1dENsYXNzOiBcIm1vZGFsX19pbnB1dC1pbnZhbGlkXCIsXG59O1xuXG4vLyBFVkVOVCBIQU5ETEVSU1xuYWRkQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjYXJkUG9wdXAub3BlbigpO1xufSk7XG5cbnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByb2ZpbGVQb3B1cC5vcGVuKCk7XG4gIGNvbnN0IHByb2ZpbGVJbmZvID0gdXNlckluZm9JbnN0YW5jZS5nZXRVc2VySW5mbygpO1xuICBwcm9maWxlUG9wdXAuc2V0SW5wdXRWYWx1ZXMocHJvZmlsZUluZm8pO1xufSk7XG5cbi8vIGhhbmRsZUZvcm1TdWJtaXQgJiBoYW5kbGVJbWFnZSBGVU5DVElPTlNcbmNvbnN0IGhhbmRsZUltYWdlQ2xpY2sgPSAobmFtZSwgbGluaykgPT4ge1xuICBpbWFnZVBvcHVwLm9wZW4obmFtZSwgbGluayk7XG59O1xuXG5jb25zdCBoYW5kbGVBZGRDYXJkU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGRhdGEpO1xuICBzZWN0aW9uLmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xufTtcblxuY29uc3QgaGFuZGxlRWRpdFByb2ZpbGVTdWJtaXQgPSAoZm9ybVZhbHVlcykgPT4ge1xuICB1c2VySW5mb0luc3RhbmNlLnNldFVzZXJJbmZvKGZvcm1WYWx1ZXMpO1xufTtcblxuLy9PQkpFQ1QgRk9SIFVTRVJJTkZPXG5jb25zdCB1c2VySW5mb09iamVjdCA9IHtcbiAgdXNlck5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fdGl0bGVcIixcbiAgdXNlckpvYlNlbGVjdG9yOiBcIi5wcm9maWxlX19zdWJoZWFkaW5nXCIsXG59O1xuXG4vL05FVyBDQVJEXG5jb25zdCBjcmVhdGVDYXJkID0gKGl0ZW0pID0+IHtcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGl0ZW0sIFwiI2NhcmQtdGVtcGxhdGVcIiwgaGFuZGxlSW1hZ2VDbGljayk7XG4gIHJldHVybiBjYXJkLmdldFZpZXcoKTtcbn07XG5cbi8vU0VDVElPTiBPQkpFQ1RcbmNvbnN0IHNlY3Rpb25PYmplY3QgPSB7XG4gIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXG4gIHJlbmRlcmVyOiAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY3JlYXRlQ2FyZChkYXRhKTtcbiAgICBzZWN0aW9uLmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xuICB9LFxufTtcblxuLy9DUkVBVEUgTkVXIElOU1RBTkNFXG5jb25zdCBwcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcbiAgXCIjcHJvZmlsZU1vZGFsXCIsXG4gIGhhbmRsZUVkaXRQcm9maWxlU3VibWl0XG4pO1xuY29uc3QgY2FyZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjY2FyZE1vZGFsXCIsIGhhbmRsZUFkZENhcmRTdWJtaXQpO1xuY29uc3QgaW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIiNpbWFnZU1vZGFsXCIpO1xuY29uc3Qgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKHNlY3Rpb25PYmplY3QsIGNhcmRXcmFwcGVyKTtcbmNvbnN0IHVzZXJJbmZvSW5zdGFuY2UgPSBuZXcgVXNlckluZm8odXNlckluZm9PYmplY3QpO1xuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihlZGl0Rm9ybSwgY29uZmlnKTtcbmNvbnN0IGNhcmRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY2FyZEZvcm0sIGNvbmZpZyk7XG5cbi8vQ0FMTEJBQ0tTXG5zZWN0aW9uLnJlbmRlckl0ZW1zKCk7XG5jYXJkUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnByb2ZpbGVQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuaW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuY2FyZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fY2FyZE1vZGFsSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRJbWFnZV9fbW9kYWwtaW1hZ2VcIik7XG4gICAgdGhpcy5faW1hZ2VNb2RhbHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlTW9kYWwtdGV4dFwiKTtcbiAgICB0aGlzLl9jYXJkSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xuICB9XG4gIG9wZW4obmFtZSwgbGluaykge1xuICAgIHRoaXMuX2NhcmRNb2RhbEltYWdlLnNyYyA9IGxpbms7XG4gICAgdGhpcy5faW1hZ2VNb2RhbHRleHQudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuX2NhcmRNb2RhbEltYWdlLmFsdCA9IG5hbWU7XG4gICAgc3VwZXIub3BlbigpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgd3JhcHBlcikge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl93cmFwcGVyID0gd3JhcHBlcjtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zID0gKCkgPT4ge1xuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGFkZEl0ZW0gPSAoY2FyZEVsZW1lbnQpID0+IHtcbiAgICB0aGlzLl93cmFwcGVyLnByZXBlbmQoY2FyZEVsZW1lbnQpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IHVzZXJOYW1lU2VsZWN0b3IsIHVzZXJKb2JTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJOYW1lU2VsZWN0b3IpO1xuICAgIHRoaXMuX3VzZXJKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJKb2JTZWxlY3Rvcik7XG4gIH1cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50LFxuICAgICAgam9iOiB0aGlzLl91c2VySm9iLnRleHRDb250ZW50LFxuICAgIH07XG4gIH1cbiAgc2V0VXNlckluZm8oeyBuYW1lLCBqb2IgfSkge1xuICAgIHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLl91c2VySm9iLnRleHRDb250ZW50ID0gam9iO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiX3JlZiIsImNhcmRTZWxlY3RvciIsImhhbmRsZUltYWdlQ2xpY2siLCJuYW1lIiwibGluayIsInRoaXMiLCJfbmFtZSIsIl9saW5rIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiX3RvZ2dsZUxpa2UiLCJfbGlrZUJ1dHRvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9zZXRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZGVsZXRlQnV0dG9uIiwiX2RlbGV0ZUNhcmQiLCJfY2FyZEltYWdlIiwiZSIsIl9jYXJkRWxlbWVudCIsInJlbW92ZSIsImdldFZpZXciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2NhcmRUaXRsZSIsInNyYyIsImFsdCIsInRleHRDb250ZW50IiwiRm9ybVZhbGlkYXRvciIsImZvcm1FbGVtZW50IiwiY29uZmlnIiwiX2ludmFsaWRJbnB1dENsYXNzIiwiaW52YWxpZElucHV0Q2xhc3MiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfZm9ybUVsZW1lbnQiLCJfc3VibWl0QnV0dG9uIiwiX2lucHV0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImlucHV0RWxlbWVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImVuYWJsZVZhbGlkYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfY2hlY2tGb3JtVmFsaWRpdHkiLCJhZGQiLCJkaXNhYmxlZCIsInNvbWUiLCJlcnJvck1lc3NhZ2UiLCJfZXJyb3JNZXNzYWdlRWwiLCJpZCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfY2xvc2VCdXR0b25Qb3B1cCIsIm9wZW4iLCJfaGFuZGxlRXNjQ2xvc2UiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJzZXRFdmVudExpc3RlbmVycyIsInRhcmdldCIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0Iiwic3VwZXIiLCJfcG9wdXBGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfcHJvZmlsZURlc2NyaXB0aW9uIiwiX3Byb2ZpbGVOYW1lIiwiX21vZGFsSW5wdXROYW1lIiwiX21vZGFsSW5wdXREZXNjcmlwdGlvbiIsIl9pbnB1dExpc3QiLCJfcG9wdXBCdXR0b24iLCJyZXNldCIsIl9nZXRJbnB1dFZhbHVlcyIsInNldElucHV0VmFsdWVzIiwicG9wdXBJbmZvIiwiaXRlbSIsInZhbHVlIiwiZm9ybVZhbHVlcyIsImNhcmRXcmFwcGVyIiwiYWRkQ2FyZEJ1dHRvbiIsInByb2ZpbGVFZGl0QnV0dG9uIiwiZWRpdEZvcm0iLCJmb3JtcyIsImNhcmRGb3JtIiwiZm9ybVNlbGVjdG9yIiwiY2FyZFBvcHVwIiwicHJvZmlsZVBvcHVwIiwicHJvZmlsZUluZm8iLCJ1c2VySW5mb0luc3RhbmNlIiwiZ2V0VXNlckluZm8iLCJpbWFnZVBvcHVwIiwiY3JlYXRlQ2FyZCIsInNlY3Rpb25PYmplY3QiLCJpdGVtcyIsInJlbmRlcmVyIiwiZGF0YSIsImNhcmRFbGVtZW50Iiwic2VjdGlvbiIsImFkZEl0ZW0iLCJzZXRVc2VySW5mbyIsIl9jYXJkTW9kYWxJbWFnZSIsIl9pbWFnZU1vZGFsdGV4dCIsIndyYXBwZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfd3JhcHBlciIsInJlbmRlckl0ZW1zIiwicHJlcGVuZCIsInVzZXJOYW1lU2VsZWN0b3IiLCJ1c2VySm9iU2VsZWN0b3IiLCJfdXNlck5hbWUiLCJfdXNlckpvYiIsImpvYiIsIl9yZWYyIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJjYXJkRm9ybVZhbGlkYXRvciJdLCJzb3VyY2VSb290IjoiIn0=