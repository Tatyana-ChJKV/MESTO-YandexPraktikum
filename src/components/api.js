const myToken = 'cf336180-acdd-4618-920e-c3a47bf944b6';
const mestoUrl = 'https://mesto.nomoreparties.co/v1/wbf-cohort-3/';

export function getProfileInfo() {
    return fetch(`${mestoUrl}users/me`, {
        headers: {
            authorization: myToken
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        });
}

export function getPlaces() {
    return fetch(`${mestoUrl}cards`, {
        headers: {
            authorization: myToken
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        });
}

export function editProfile(name, about) {
    return fetch(`${mestoUrl}users/me`, {
        method: 'PATCH',
        headers: {
            authorization: myToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        });
}

export function addNewCard(name, link) {
    return fetch(`${mestoUrl}cards`, {
        method: 'POST',
        headers: {
            authorization: myToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        });
}

export function deleteCard(cardId) {
    return fetch(`${mestoUrl}cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: myToken,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        });
}

export function putLike(cardId) {
    return fetch(`${mestoUrl}cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: myToken,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        });
}

export function deleteLike(cardId) {
    return fetch(`${mestoUrl}cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: myToken,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        });
}

export function changeProfilePicture(imageUrl) {
    return fetch(`${mestoUrl}users/me/avatar`, {
        method: 'PATCH',
        headers: {
            authorization: myToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: imageUrl
        })
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        });
}