import {addCardToPlaces, create} from "./card";
import {addNewCard, changeProfilePicture, editProfile} from "./api";
import {
    popupPlacesImageName, popupPlacesImageUrl,
    popupProfileAvatarUrl,
    popupProfileInfo,
    popupProfileName,
    profileAvatar,
    profileDescription,
    profileName
} from "./utils";

export function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        closePopup();
        document.removeEventListener('keydown', closeByEscape);
    }
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
}

export function closePopup() {
    const popup = document.querySelector('.popup_opened');
    popup.classList.remove('popup_opened');
}

export function renderLoading(popup, text) {
    const button = popup.querySelector('.popup__button');
    button.textContent = text;
}

function submitPopupProfile(popup) {
    renderLoading(popup, 'Сохранение...');
    editProfile(popupProfileName.value, popupProfileInfo.value)
        .then(() => {
            profileName.textContent = popupProfileName.value;
            profileDescription.textContent = popupProfileInfo.value;
            closePopup();
    })
        .catch(err => console.log(err))
        .finally(() => renderLoading(popup, 'Сохранить'));
}

function submitPopupProfileAvatar(popup) {
    const popupForm = popup.querySelector('.popup__form');

    renderLoading(popup, 'Сохранение...');
    changeProfilePicture(popupProfileAvatarUrl.value)
        .then(() => {
            profileAvatar.src = popupProfileAvatarUrl.value;
            closePopup();
            popupForm.reset();
        })
        .catch(err => console.log(err))
        .finally(() => renderLoading(popup, 'Сохранить'));
}

function submitPopupPlaces(popup) {
    const popupForm = popup.querySelector('.popup__form');

    renderLoading(popup, 'Создание...');
    addNewCard(popupPlacesImageName.value, popupPlacesImageUrl.value)
        .then(res => {
            const newCard = create(res, res.owner._id);
            addCardToPlaces(newCard, true);
            closePopup();
            popupForm.reset();
        })
        .catch(error => console.log('Ошибка создания карточки ' + error))
        .finally(() => renderLoading(popup, 'Создать'));
}

export function submitPopup(popup) {
    if (popup.id === 'popup-profile') {
        submitPopupProfile(popup);
    } else if (popup.id === 'popup-profile-avatar') {
        submitPopupProfileAvatar(popup);
    } else if (popup.id === 'popup-places') {
        submitPopupPlaces(popup);
    }
    document.removeEventListener('keydown', closeByEscape);
}

export function setDefaultInput() {
    popupProfileName.value = profileName.textContent;
    popupProfileInfo.value = profileDescription.textContent;
}
