import '../index.css';
import * as modal from "./modal";
import {enableValidation} from "./validate";
import {initPlaces} from "./card";
import {getPlaces, getProfileInfo} from "./api";
import {
    addPlaceButton,
    avatarEditButton, closePopupButtons, formList,
    popupEditProfileButton, popupPlaces, popupProfile,
    popupProfileAvatar,
    profileAvatar,
    profileDescription,
    profileId,
    profileName
} from "./utils";

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

enableValidation(formList);

avatarEditButton.addEventListener('click', function () {
    modal.openPopup(popupProfileAvatar);
});

popupProfileAvatar.addEventListener('submit', function () {
   modal.submitPopup(popupProfileAvatar);
});

popupEditProfileButton.addEventListener('click', function () {
    modal.openPopup(popupProfile);
    modal.setDefaultInput();
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