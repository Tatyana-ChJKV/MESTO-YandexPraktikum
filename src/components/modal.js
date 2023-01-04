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

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        closePopup();
    }
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

export function closePopup() {
    const popup = document.querySelector('.popup_opened');
    const popupForm = popup.querySelector('.popup__form');
    popup.classList.remove('popup_opened');
    setTimeout(() => popupForm.reset(), 500);
    document.removeEventListener('keydown', closeByEscape);
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
    })
        .catch(err => console.log(err))
        .finally(() => renderLoading(popup, 'Сохранить'));
    closePopup();
}

function submitPopupProfileAvatar(popup) {
    renderLoading(popup, 'Сохранение...');
    changeProfilePicture(popupProfileAvatarUrl.value)
        .then(() => profileAvatar.src = popupProfileAvatarUrl.value)
        .catch(err => console.log(err))
        .finally(() => renderLoading(popup, 'Сохранить'));
    closePopup();
}

function submitPopupPlaces(popup) {
    renderLoading(popup, 'Создание...');
    addNewCard(popupPlacesImageName.value, popupPlacesImageUrl.value)
        .then(res => {
            const newCard = create(res, res.owner._id);
            addCardToPlaces(newCard, true);
        })
        .catch(error => console.log('Ошибка создания карточки ' + error))
        .finally(() => renderLoading(popup, 'Создать'));
    closePopup();
}

export function submitPopup(popup) {
    if (popup.id === 'popup-profile') {
        submitPopupProfile(popup);
    } else if (popup.id === 'popup-profile-avatar') {
        submitPopupProfileAvatar(popup);
    } else if (popup.id === 'popup-places') {
        submitPopupPlaces(popup);
    }
}

export function setDefaultInput() {
    popupProfileName.value = profileName.textContent;
    popupProfileInfo.value = profileDescription.textContent;
}
