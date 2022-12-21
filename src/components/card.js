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

function create(imageSrc, description) {
    const placeTemplate = document.querySelector('#place').content;
    const place = placeTemplate.querySelector('.places__frame').cloneNode(true);
    const placeImg = place.querySelector('.places__element');
    const placeDescription = place.querySelector('.places__description');
    placeImg.src = imageSrc;
    placeImg.alt = description;
    placeDescription.textContent = description;
    initLikeButton(place);
    deletePlace(place);
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

export {create, places, addCardToPlaces, initialCards};