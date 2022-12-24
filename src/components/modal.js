import {addCardToPlaces, create} from "./card";

export function openPopup(popup) {
    popup.classList.add('popup_opened');
}

export function closePopup() {
    const popup = document.querySelector('.popup_opened');
    popup.classList.remove('popup_opened');
}

function submitPopupProfile(popup) {
    const popupName = popup.querySelector('#popup-form-name');
    const popupInfo = popup.querySelector('#popup-form-info');
    const profileName = document.querySelector('.profile__name');
    const profileInfo = document.querySelector('.profile__description');
    profileName.textContent = popupName.value;
    profileInfo.textContent = popupInfo.value;
    closePopup();
}

function submitPopupPlaces(popup) {
    const popupName = popup.querySelector('#popup-form-place');
    const popupLink = popup.querySelector('#popup-form-link');
    const card = create(popupLink.value, popupName.value);
    addCardToPlaces(card, true);
    closePopup();
}

export function submitPopup(popup) {
    if (popup.id === 'popup-profile') {
        submitPopupProfile(popup);
    } else if (popup.id === 'popup-places') {
        submitPopupPlaces(popup);
    }
}