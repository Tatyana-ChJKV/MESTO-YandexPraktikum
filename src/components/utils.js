import {profileAvatar, profileDescription, profileId, profileName, validationSettings} from "./constants";

export function handleResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

export function setProfileInfo(profile) {
    profileName.textContent = profile.name;
    profileDescription.textContent = profile.about;
    profileAvatar.src = profile.avatar;
    profileAvatar.alt = profile.about;
    profileId.textContent = profile._id;
}

export function deactivateSubmitButton(button) {
    button.classList.add(validationSettings.inactiveButtonClass);
    button.disabled = true;
}