import * as modal from "./modal";

const places = document.querySelector('.places');
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

function deletePlace(placeFrame) {
    const deletePlaceButton = placeFrame.querySelector('.places__delete-button');
    deletePlaceButton.addEventListener('click', function () {
        placeFrame.closest('.places__frame').remove();
    });
}

function create(imageLink, description) {
    const placeTemplate = document.querySelector('#place').content;
    const place = placeTemplate.querySelector('.places__frame').cloneNode(true);
    const placeImg = place.querySelector('.places__element');
    const placeDescription = place.querySelector('.places__description');
    placeImg.src = imageLink;
    placeImg.alt = description;
    placeDescription.textContent = description;
    initLikeButton(place);
    deletePlace(place);
    openFullSizeImage(placeImg, placeDescription);
    return place;
}

function initLikeButton(placeFrame) {
    const likeButton = placeFrame.querySelector('.places__button');
    likeButton.addEventListener('click', function () {
        likeButton.classList.toggle('places__button-active');
    });
}

function addCardToPlaces(card, onTop) {
    if (onTop === true) {
        places.prepend(card);
    } else {
        places.append(card);
    }
}

function openFullSizeImage(placeImage, placeDescription) {
    placeImage.addEventListener('click', function () {
        const popup = document.querySelector('#popup__full-image');
        modal.openPopup(popup);
        const popupImage = popup.querySelector('.popup__image');
        popupImage.src = placeImage.src;
        popupImage.alt = placeDescription.textContent;
        const textImage = popup.querySelector('.popup__image-description');
        textImage.textContent = placeDescription.textContent;
    });
}

function initPlaces() {
    initialCards.forEach(function (place) {
        const newCard = create(place.link, place.name);
        addCardToPlaces(newCard, false);
    })
}

export {create, addCardToPlaces, initPlaces};