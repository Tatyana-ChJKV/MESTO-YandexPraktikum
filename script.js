const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popup-profile');
const closePopupButton = popupProfile.querySelector('.popup__close-button');
const popupName = popupProfile.querySelector('#popup-form-name');
const profileName = document.querySelector('.profile__name');
const popupInfo = popupProfile.querySelector('#popup-form-info');
const profileInfo = document.querySelector('.profile__description');
const popupPlaces = document.querySelector('#popup-places');
const addPlaceButton = document.querySelector('.profile__add-button');
const closePopupPlaceButton = popupPlaces.querySelector('.popup__close-button');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function initialPlace(place) {
    const places = document.querySelector('.places');
    const placeTemplate = document.querySelector('#place').content;
    const placeFrame = placeTemplate.querySelector('.places__frame').cloneNode(true);
    const placeImage = placeFrame.querySelector('.places__element');
    const placeDescription = placeFrame.querySelector('.places__description');

    placeImage.src = place.link;
    placeImage.alt = place.name;
    placeDescription.textContent = place.name;

    places.append(placeFrame);

    initLikeButton(placeFrame);

    deletePlace(placeFrame);

    openFullSizeImage(placeImage, placeDescription);
}

initialCards.forEach(initialPlace);

function initLikeButton(placeFrame) {
    const likeButton = placeFrame.querySelector('.places__button');
    likeButton.addEventListener('click', function () {
        likeButton.classList.toggle('places__button-active');
    });
}

function deletePlace(placeFrame) {
    const deletePlaceButton = placeFrame.querySelector('.places__delete-button');
    deletePlaceButton.addEventListener('click', function () {
        placeFrame.closest('.places__frame').remove();
    });
}

function openFullSizeImage(placeImage, placeDescription) {
    placeImage.addEventListener('click', function () {
        const popupFullSizeImage = document.querySelector('#popup__full-image');
        popupFullSizeImage.classList.add('popup_opened');
        console.log(popupFullSizeImage);
        const popupImage = popupFullSizeImage.querySelector('.popup__image');
        popupImage.src = placeImage.src;
        const textImage = popupFullSizeImage.querySelector('.popup__image-description');
        textImage.textContent = placeDescription.textContent;
        const closeFullSizeImage = popupFullSizeImage.querySelector('.popup__close-button');
        closeFullSizeImage.addEventListener('click', function () {
            closePopup(popupFullSizeImage);
        });
    });
}

function openPopup() {
    popupProfile.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupInfo.value = profileInfo.textContent;
    closePopupButton.addEventListener('click', function () {
        closePopup(popupProfile);
    });
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileInfo.textContent = popupInfo.value;
    closePopup(popupProfile);
}

function openPopupPlaces() {
    popupPlaces.classList.add('popup_opened');
    closePopupPlaceButton.addEventListener('click', function () {
        closePopup(popupPlaces);
    });
}

editButton.addEventListener('click', openPopup);
popupProfile.addEventListener('submit', handleFormSubmit);

addPlaceButton.addEventListener('click', openPopupPlaces);

function handleFormPlacesSubmit(evt) {
    evt.preventDefault();

    const places = document.querySelector('.places');
    const placeTemplate = document.querySelector('#place').content;
    const placeFrame = placeTemplate.querySelector('.places__frame').cloneNode(true);
    const placeImage = placeFrame.querySelector('.places__element');
    const placeDescription = placeFrame.querySelector('.places__description');
    const inputImage = popupPlaces.querySelector('#popup-form-link');
    const inputPlaceName = popupPlaces.querySelector('#popup-form-place');

    placeImage.src = inputImage.value;
    placeImage.alt = inputPlaceName.value;
    placeDescription.textContent = inputPlaceName.value;

    places.prepend(placeFrame);
    closePopup(popupPlaces);

    initLikeButton(placeFrame);

    deletePlace(placeFrame);

    openFullSizeImage(placeImage, placeDescription);
}

popupPlaces.addEventListener('submit', handleFormPlacesSubmit);




