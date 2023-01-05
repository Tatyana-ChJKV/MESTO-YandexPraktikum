import * as modal from "./modal";
import {deleteCard, deleteLike, putLike} from "./api";
import {popupFullSize, popupFullSizeImageDescription, popupFullSizeImage} from "./utils";
import {closeByEscape} from "./modal";

const places = document.querySelector('.places');

function deletePlace(placeFrame, card, profileId) {
    const deletePlaceButton = placeFrame.querySelector('.places__delete-button');
    if (card.owner._id !== profileId) {
        deletePlaceButton.classList.add('places__delete-button-inactive');
    } else {
        deletePlaceButton.addEventListener('click', function () {
            deleteCard(card._id)
                .then(() => {
                    placeFrame.closest('.places__frame').remove();
                })
                .catch(error => console.log(error));
        })
    }
}

function changeLikeButton(changeFunction, card, likeCounter, likeButton, add) {
    changeFunction(card._id)
        .then(res => {
            likeCounter.textContent = res.likes.length;
            add ?
                likeButton.classList.add('places__button-active') :
                likeButton.classList.remove('places__button-active');
        })
        .catch(error => console.log(error));
}

function initLikeButton(placeFrame, card, profileId, likeCounter) {
    const likeButton = placeFrame.querySelector('.places__button');
    if (card.likes.map(a => a._id).includes(profileId)) {
        likeButton.classList.add('places__button-active');
    }
    likeButton.addEventListener('click', function () {
        if (likeButton.classList.contains('places__button-active')) {
            changeLikeButton(deleteLike, card, likeCounter, likeButton, false);
        } else {
            changeLikeButton(putLike, card, likeCounter, likeButton, true);
        }
    });
}

function create(card, profileId) {
    const placeTemplate = document.querySelector('#place').content;
    const place = placeTemplate.querySelector('.places__frame').cloneNode(true);
    const placeImg = place.querySelector('.places__element');
    const placeDescription = place.querySelector('.places__description');
    const likeCounter = place.querySelector('.places__like-button');
    const placeId = place.querySelector('.places__id');
    placeImg.src = card.link;
    placeImg.alt = card.name;
    placeDescription.textContent = card.name;
    likeCounter.textContent = card.likes.length;
    placeId.textContent = card._id;
    initLikeButton(place, card, profileId, likeCounter);
    deletePlace(place, card, profileId);
    openFullSizeImage(placeImg, placeDescription);
    return place;
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
        popupFullSizeImage.src = placeImage.src;
        popupFullSizeImage.alt = placeDescription.textContent;
        popupFullSizeImageDescription.textContent = placeDescription.textContent;
        document.addEventListener('keydown', closeByEscape);
        modal.openPopup(popupFullSize);
    });
}

function initPlaces(initialCards, profileId) {
    initialCards.forEach(function (place) {
        const newCard = create(place, profileId);
        addCardToPlaces(newCard, false);
    })
}

export {create, addCardToPlaces, initPlaces};