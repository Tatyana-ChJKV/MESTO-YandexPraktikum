import '../index.css';
import * as modal from "./modal";
import {enableValidation} from "./validate";
import {initPlaces} from "./card";
import {getPlaces, getProfileInfo} from "./api";
import {
    addPlaceButton,
    avatarEditButton, closePopupButtons, formList,
    popupEditProfileButton, popupPlaces, popupProfile,
    popupProfileAvatar, popups,
    profileAvatar,
    profileDescription,
    profileId,
    profileName
} from "./utils";
import {closeByEscape} from "./modal";

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
    document.addEventListener('keydown', closeByEscape);
});

popupProfileAvatar.addEventListener('submit', function () {
   modal.submitPopup(popupProfileAvatar);
});

popupEditProfileButton.addEventListener('click', function () {
    modal.openPopup(popupProfile);
    document.addEventListener('keydown', closeByEscape);
    modal.setDefaultInput();
});

closePopupButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        modal.closePopup();
        document.removeEventListener('keydown', closeByEscape);
    });
});

popupProfile.addEventListener('submit', function () {
    modal.submitPopup(popupProfile);
});

addPlaceButton.addEventListener('click', function () {
    modal.openPopup(popupPlaces);
    document.addEventListener('keydown', closeByEscape);
});

popupPlaces.addEventListener('submit', function () {
    modal.submitPopup(popupPlaces);
});

popups.forEach(popup => {
    popup.addEventListener('click', function (evt) {
        const popup = document.querySelector('.popup_opened');
        if (evt.target === popup) {
            modal.closePopup();
            document.removeEventListener('keydown', closeByEscape);
        }
    });
});