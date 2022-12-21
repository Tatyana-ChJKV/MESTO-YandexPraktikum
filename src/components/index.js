import '../styles/index.css';

// import * as modal from "./src/components/modal";
import * as card from "./card";



const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popup-profile');
const closePopupButton = popupProfile.querySelector('.popup__close-button');
const popupName = popupProfile.querySelector('#popup-form-name');
const profileName = document.querySelector('.profile__name');
const popupInfo = popupProfile.querySelector('#popup-form-info');
const profileInfo = document.querySelector('.profile__description');
const popupPlaces = document.querySelector('#popup-places');
const addPlaceButton = document.querySelector('.profile__add-button');
const closePopupPlaceButton = popupPlaces.querySelector('.popup__close-button');

function initPlace(place) {
    const newCard = card.create(place.link, place.name);
    console.log(newCard);
    card.addCardToPlaces(newCard, false);
    // openFullSizeImage(placeImage, placeDescription);
}

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




