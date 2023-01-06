import {addCardToPlaces, createCard} from "./card";
import {addNewCard, changeProfilePicture, editProfile} from "./api";
import {
    addPlaceButton,
    avatarEditButton,
    popupEditProfileButton,
    popupPlacesImageName, popupPlacesImageUrl,
    popupProfileAvatarUrl,
    popupProfileInfo,
    popupProfileName,
    profileAvatar,
    profileDescription,
    profileName, submitPopupPlacesButton, submitPopupProfileButton, submitProfileAvatarButton
} from "./constants";
import {deactivateSubmitButton} from "./utils";

export function closeByEscape(evt) {
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
    if (popup) {
        popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', closeByEscape);
    }
}

export function renderLoading(button, text) {
    button.textContent = text;
}

export function submitPopupProfile(popup) {
    renderLoading(submitPopupProfileButton, 'Сохранение...');
    editProfile(popupProfileName.value, popupProfileInfo.value)
        .then(() => {
            profileName.textContent = popupProfileName.value;
            profileDescription.textContent = popupProfileInfo.value;
            closePopup();
    })
        .catch(err => console.log(err))
        .finally(() => renderLoading(submitPopupProfileButton, 'Сохранить'));
}

export function submitPopupProfileAvatar(popup) {
    const popupForm = popup.querySelector('.popup__form');

    renderLoading(submitProfileAvatarButton, 'Сохранение...');
    changeProfilePicture(popupProfileAvatarUrl.value)
        .then(() => {
            profileAvatar.src = popupProfileAvatarUrl.value;
            closePopup();
            popupForm.reset();
            deactivateSubmitButton(submitProfileAvatarButton);
        })
        .catch(err => console.log(err))
        .finally(() => renderLoading(submitProfileAvatarButton, 'Сохранить'));
}

export function submitPopupPlaces(popup) {
    const popupForm = popup.querySelector('.popup__form');

    renderLoading(submitPopupPlacesButton, 'Создание...');
    addNewCard(popupPlacesImageName.value, popupPlacesImageUrl.value)
        .then(res => {
            const newCard = createCard(res, res.owner._id);
            addCardToPlaces(newCard, true);
            closePopup();
            popupForm.reset();
            deactivateSubmitButton(submitPopupPlacesButton);
        })
        .catch(error => console.log('Ошибка создания карточки ' + error))
        .finally(() => renderLoading(submitPopupPlacesButton, 'Создать'));
}

export function fillProfileInputs() {
    popupProfileName.value = profileName.textContent;
    popupProfileInfo.value = profileDescription.textContent;
}
