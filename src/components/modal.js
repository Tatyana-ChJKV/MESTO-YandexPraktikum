import {addCardToPlaces, create} from "./card";
import {addNewCard, editProfile} from "./api";

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
    const popupName = popup.querySelector('#popup-form-name');
    const popupInfo = popup.querySelector('#popup-form-info');
    const profileName = document.querySelector('.profile__name');
    const profileInfo = document.querySelector('.profile__description');

    renderLoading(popup, 'Сохранение...');
    editProfile(popupName.value, popupInfo.value)
        .then(() => {
            profileName.textContent = popupName.value;
            profileInfo.textContent = popupInfo.value;
    })
        .catch(err => console.log(err))
        .finally(() => renderLoading(popup, 'Сохранить'));
    closePopup();
}

function submitPopupPlaces(popup) {
    const popupName = popup.querySelector('#popup-form-place');
    const popupLink = popup.querySelector('#popup-form-link');

    renderLoading(popup, 'Создание...');
    addNewCard(popupName.value, popupLink.value)
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
    } else if (popup.id === 'popup-places') {
        submitPopupPlaces(popup);
    }
}