import '../styles/index.css';
import * as modal from "./modal";
import * as card from "./card";
import {enableValidation} from "./validate";

const formList = Array.from(document.querySelectorAll('.popup__form'))
const popupProfile = document.querySelector('#popup-profile');
const editButton = document.querySelector('.profile__edit-button');
const closePopupButton = popupProfile.querySelector('.popup__close-button');

const popupForm = document.querySelector('.form');

const popupPlaces = document.querySelector('#popup-places');
const addPlaceButton = document.querySelector('.profile__add-button');
const closePopupPlaceButton = popupPlaces.querySelector('.popup__close-button');


function initPlace(place) {
    const newCard = card.create(place.link, place.name);
    card.addCardToPlaces(newCard, false);
    // openFullSizeImage(placeImage, placeDescription);
}

enableValidation(formList);
editButton.addEventListener('click', function () {
    modal.openPopup(popupProfile);
});

closePopupButton.addEventListener('click', function () {
    modal.closePopup(popupProfile);
});

popupProfile.addEventListener('submit', function () {
    modal.submitPopup(popupProfile);
});

card.initialCards.forEach(initPlace);

// function openpopupprof() {
//     modal.openPopup(popupProfile);
//     popupName.value = profileName.textContent;
//     popupInfo.value = profileInfo.textContent;
//     closePopupButton.addEventListener('click', function () {
//         modal.closePopup(popupProfile);
//     });
// }
//
// function openPopupPlaces() {
//     modal.openPopup(popupPlaces);
//     closePopupPlaceButton.addEventListener('click', function () {
//         modal.closePopup(popupPlaces);
//     });
// }
//
// function openFullSizeImage(placeImage, placeDescription) {
//     placeImage.addEventListener('click', function () {
//         const popupFullSizeImage = document.querySelector('#popup__full-image');
//         modal.openPopup(popupFullSizeImage);
//         console.log(popupFullSizeImage);
//         const popupImage = popupFullSizeImage.querySelector('.popup__image');
//         popupImage.src = placeImage.src;
//         const textImage = popupFullSizeImage.querySelector('.popup__image-description');
//         textImage.textContent = placeDescription.textContent;
//         const closeFullSizeImage = popupFullSizeImage.querySelector('.popup__close-button');
//         closeFullSizeImage.addEventListener('click', function () {
//             modal.closePopup(popupFullSizeImage);
//         });
//     });
// }
//
// function handleFormSubmit(evt) {
//     evt.preventDefault();
//     profileName.textContent = popupName.value;
//     profileInfo.textContent = popupInfo.value;
//     modal.closePopup(popupProfile);
// }
//
// editButton.addEventListener('click', openpopupprof);
// popupProfile.addEventListener('submit', handleFormSubmit);
//
// addPlaceButton.addEventListener('click', openPopupPlaces);
//
// function handleFormPlacesSubmit(evt) {
//     evt.preventDefault();
//
//     const inputImage = popupPlaces.querySelector('#popup-form-link');
//     const inputDescription = popupPlaces.querySelector('#popup-form-place');
//     const newCard = card.create(inputImage.value, inputDescription.value);
//     card.addCardToPlaces(newCard, true);
//     modal.closePopup(popupPlaces);
//     openFullSizeImage(placeImage, placeDescription);
// }
//
// popupPlaces.addEventListener('submit', handleFormPlacesSubmit);




