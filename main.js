(()=>{"use strict";var e=document.querySelector(".profile__avatar"),t=document.querySelector(".profile__name"),n=document.querySelector(".profile__description"),o=document.querySelector(".profile__id"),r=document.querySelector("#popup-profile"),c=document.querySelector(".profile__edit-button"),a=document.querySelector("#popup-form-name"),u=document.querySelector("#popup-form-info"),i=r.querySelector(".popup__button"),l=document.querySelector("#popup-profile-avatar"),s=document.querySelector(".profile__avatar-edit-button"),d=document.querySelector("#popup-profile-url"),p=l.querySelector(".popup__button"),f=document.querySelector("#popup-places"),m=document.querySelector(".profile__add-button"),v=document.querySelector("#popup-form-place"),_=document.querySelector("#popup-form-link"),y=f.querySelector(".popup__button"),h=document.querySelector("#popup-full-image"),b=document.querySelector(".popup__image"),S=document.querySelector(".popup__image-description"),q=Array.from(document.querySelectorAll(".popup__close-button")),C=[r,l,f,h],E={formSelector:".popup__form",inputSelector:".popup__form-text",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-inactive",inputErrorClass:"popup__form-text-error",errorClass:"popup__input-error-active"};function L(e){return e.ok?e.json():Promise.reject(e.status)}function g(e){e.classList.add(E.inactiveButtonClass),e.disabled=!0}var k={baseUrl:"https://mesto.nomoreparties.co/v1/wbf-cohort-3",headers:{authorization:"cf336180-acdd-4618-920e-c3a47bf944b6","Content-Type":"application/json"}};function x(e){return fetch("".concat(k.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:k.headers}).then(L)}function A(e){return fetch("".concat(k.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:k.headers}).then(L)}var U,w=document.querySelector(".places");function j(e,t,n,o,r){e(t._id).then((function(e){n.textContent=e.likes.length,r?o.classList.add("places__button-active"):o.classList.remove("places__button-active")})).catch((function(e){return console.log(e)}))}function O(e,t){var n=document.querySelector("#place").content.querySelector(".places__frame").cloneNode(!0),o=n.querySelector(".places__element"),r=n.querySelector(".places__description"),c=n.querySelector(".places__like-button"),a=n.querySelector(".places__id");return o.src=e.link,o.alt=e.name,r.textContent=e.name,c.textContent=e.likes.length,a.textContent=e._id,function(e,t,n,o){var r=e.querySelector(".places__button");t.likes.map((function(e){return e._id})).includes(n)&&r.classList.add("places__button-active"),r.addEventListener("click",(function(){r.classList.contains("places__button-active")?j(A,t,o,r,!1):j(x,t,o,r,!0)}))}(n,e,t,c),function(e,t,n){var o=e.querySelector(".places__delete-button");t.owner._id!==n?o.classList.add("places__delete-button-inactive"):o.addEventListener("click",(function(){var n;(n=t._id,fetch("".concat(k.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:k.headers}).then(L)).then((function(){e.closest(".places__frame").remove()})).catch((function(e){return console.log(e)}))}))}(n,e,t),function(e,t){e.addEventListener("click",(function(){b.src=e.src,b.alt=t.textContent,S.textContent=t.textContent,P(h)}))}(o,r),n}function T(e,t){!0===t?w.prepend(e):w.append(e)}function B(e){"Escape"===e.key&&N()}function P(e){e.classList.add("popup_opened"),document.addEventListener("keydown",B)}function N(){var e=document.querySelector(".popup_opened");e&&(e.classList.remove("popup_opened"),document.removeEventListener("keydown",B))}function D(e,t){e.textContent=t}function I(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}Promise.all([fetch("".concat(k.baseUrl,"/users/me"),{headers:k.headers}).then(L),fetch("".concat(k.baseUrl,"/cards"),{headers:k.headers}).then(L)]).then((function(r){var c,a,u,i=(u=2,function(e){if(Array.isArray(e))return e}(a=r)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return u}}(a,u)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(a,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],s=i[1];c=l,t.textContent=c.name,n.textContent=c.about,e.src=c.avatar,e.alt=c.about,o.textContent=c._id,function(e,t){e.forEach((function(e){T(O(e,t),!1)}))}(s,o.textContent)})).catch((function(e){return console.log(e)})),U=E,Array.from(document.querySelectorAll(U.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);I(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));o.classList.remove(n.errorClass),o.textContent="",t.classList.remove(n.inputErrorClass)}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));r.classList.add(o.errorClass),r.textContent=n,t.classList.add(o.inputErrorClass)}(e,t,t.validationMessage,n)}(e,r,t),I(n,o,t)}))}))}(e,U)})),s.addEventListener("click",(function(){P(l)})),l.addEventListener("submit",(function(){var t,n;n=l.querySelector(".popup__form"),D(p,"Сохранение..."),(t=d.value,fetch("".concat(k.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:k.headers,body:JSON.stringify({avatar:t})}).then(L)).then((function(){e.src=d.value,N(),n.reset(),g(p)})).catch((function(e){return console.log(e)})).finally((function(){return D(p,"Сохранить")}))})),c.addEventListener("click",(function(){P(r),a.value=t.textContent,u.value=n.textContent})),q.forEach((function(e){e.addEventListener("click",(function(){N()}))})),r.addEventListener("submit",(function(){var e,o;D(i,"Сохранение..."),(e=a.value,o=u.value,fetch("".concat(k.baseUrl,"/users/me"),{method:"PATCH",headers:k.headers,body:JSON.stringify({name:e,about:o})}).then(L)).then((function(){t.textContent=a.value,n.textContent=u.value,N()})).catch((function(e){return console.log(e)})).finally((function(){return D(i,"Сохранить")}))})),m.addEventListener("click",(function(){P(f)})),f.addEventListener("submit",(function(){var e,t,n;n=f.querySelector(".popup__form"),D(y,"Создание..."),(e=v.value,t=_.value,fetch("".concat(k.baseUrl,"/cards"),{method:"POST",headers:k.headers,body:JSON.stringify({name:e,link:t})}).then(L)).then((function(e){T(O(e,e.owner._id),!0),N(),n.reset(),g(y)})).catch((function(e){return console.log("Ошибка создания карточки "+e)})).finally((function(){return D(y,"Создать")}))})),C.forEach((function(e){e.addEventListener("click",(function(t){t.target===e&&N()}))}))})();