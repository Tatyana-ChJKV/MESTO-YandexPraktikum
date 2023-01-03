import '../styles/index.css';
import * as modal from "./modal";
import {enableValidation} from "./validate";
import {initPlaces} from "./card";
import {getPlaces, getProfileInfo} from "./api";

const profile = document.querySelector('.profile');
const profileAvatar = profile.querySelector('.profile__avatar');
const profileName = profile.querySelector('.profile__name');
const profileDescription = profile.querySelector('.profile__description');
const profileId = profile.querySelector('.profile__id');
const popupProfile = document.querySelector('#popup-profile');
const editButton = document.querySelector('.profile__edit-button');
const closePopupButtons = Array.from(document.querySelectorAll('.popup__close-button'));
const popupPlaces = document.querySelector('#popup-places');
const addPlaceButton = document.querySelector('.profile__add-button');

function setProfileInfo(profile) {
    profileName.textContent = profile.name;
    profileDescription.textContent = profile.about;
    profileAvatar.src = profile.avatar;
    profileAvatar.alt = profile.about;
    profileId.textContent = profile._id;
}

Promise.all([getProfileInfo(), getPlaces()])
    .then(([profileResponse, placesResponse]) => {
        setProfileInfo(profileResponse);
        initPlaces(placesResponse, profileId.textContent);
})
    .catch(error => console.log(error));

enableValidation();

editButton.addEventListener('click', function () {
    modal.openPopup(popupProfile);
});

closePopupButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        modal.closePopup();
    });
});

popupProfile.addEventListener('submit', function () {
    modal.submitPopup(popupProfile);
});

addPlaceButton.addEventListener('click', function () {
    modal.openPopup(popupPlaces);
});

popupPlaces.addEventListener('submit', function () {
    modal.submitPopup(popupPlaces);
});

document.addEventListener('click', function (evt) {
    const popup = document.querySelector('.popup_opened');
    if (evt.target === popup) {
        modal.closePopup();
    }
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        modal.closePopup();
    }
});