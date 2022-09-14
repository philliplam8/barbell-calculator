import { useState, useEffect } from 'react';

const KEY = 'weightProfile';

function getStorageValue(objectKey, defaultValue) {

    const savedProfile = localStorage.getItem(KEY);

    // Get profile stored in localStorage if it exists
    if (savedProfile) {
        return JSON.parse(savedProfile)[objectKey];
    }
    // If profile does not exist, use the default value
    else {
        return defaultValue;
    }
}

export function useLocalStorage(objectKey, defaultValue, setContextState) {
    const [value, setValue] = useState(() => {
        return getStorageValue(objectKey, defaultValue)
    });

    // Store into local storage
    useEffect(() => {
        // Create copy of local storage
        let updatedProfile = JSON.parse(localStorage.getItem(KEY));
        console.log(updatedProfile);
        let updatedValue;

        if (updatedProfile) {
            updatedProfile[objectKey] = value;
            updatedValue = JSON.stringify(updatedProfile);
        }

        else {
            updatedValue = JSON.stringify({ [objectKey]: value });
        }

        // Update value in local storage
        localStorage.setItem(KEY, updatedValue);

        // Update value in context state as well
        setContextState(value);

    }, [defaultValue, objectKey, setContextState, value]);

    return [value, setValue];
}