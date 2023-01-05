import {handleResponse} from "./utils";

const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/wbf-cohort-3',
    headers: {
        authorization: 'cf336180-acdd-4618-920e-c3a47bf944b6',
        'Content-Type': 'application/json',
    },
};

export function getProfileInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then(handleResponse);
}

export function getPlaces() {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then(handleResponse);
}

export function editProfile(name, about) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
        .then(handleResponse);
}

export function addNewCard(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then(handleResponse);
}

export function deleteCard(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
        .then(handleResponse);
}

export function putLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    })
        .then(handleResponse);
}

export function deleteLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
        .then(handleResponse);
}

export function changeProfilePicture(imageUrl) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: imageUrl
        })
    })
        .then(handleResponse);
}