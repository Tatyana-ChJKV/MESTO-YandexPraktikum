export function openPopup(popup) {
    popup.classList.add('popup_opened');
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function submitPopupProfile(popup) {
    const popupName = popup.querySelector('#popup-form-name');
    const popupInfo = popup.querySelector('#popup-form-info');
    const profileName = document.querySelector('.profile__name');
    const profileInfo = document.querySelector('.profile__description');
    profileName.textContent = popupName.value;
    profileInfo.textContent = popupInfo.value;
    closePopup(popup);
}

export function submitPopup(popup) {
    if (popup.id === 'popup-profile') {
        submitPopupProfile(popup);

    } else if (popup.id === 'popup-places') {

    }
}

