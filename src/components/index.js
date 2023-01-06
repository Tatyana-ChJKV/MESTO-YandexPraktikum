import '../index.css';
import * as modal from "./modal";
import {enableValidation} from "./validate";
import {initPlaces} from "./card";
import {getPlaces, getProfileInfo} from "./api";
import {setProfileInfo} from "./utils";
import {
    addPlaceButton,
    avatarEditButton,
    closePopupButtons,
    popupEditProfileButton,
    popupPlaces,
    popupProfile,
    popupProfileAvatar,
    popups,
    profileId,
    validationSettings
} from "./constants";

Promise.all([getProfileInfo(), getPlaces()])
    .then(([profileResponse, placesResponse]) => {
        setProfileInfo(profileResponse);
        initPlaces(placesResponse, profileId.textContent);
})
    .catch(error => console.log(error));

enableValidation(validationSettings);

avatarEditButton.addEventListener('click', function () {
    modal.openPopup(popupProfileAvatar);
});

popupProfileAvatar.addEventListener('submit', function () {
   modal.submitPopupProfileAvatar(popupProfileAvatar);
});

popupEditProfileButton.addEventListener('click', function () {
    modal.openPopup(popupProfile);
    modal.fillProfileInputs();
});

closePopupButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        modal.closePopup();
    });
});

popupProfile.addEventListener('submit', function () {
    modal.submitPopupProfile(popupProfile);
});

addPlaceButton.addEventListener('click', function () {
    modal.openPopup(popupPlaces);
});

popupPlaces.addEventListener('submit', function () {
    modal.submitPopupPlaces(popupPlaces);
});

popups.forEach(popup => {
    popup.addEventListener('click', function (evt) {
        if (evt.target === popup) {
            modal.closePopup();
        }
    });
});