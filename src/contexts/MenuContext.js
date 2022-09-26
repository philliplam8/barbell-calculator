import React, { useState, createContext, useEffect } from 'react';
import { INITIAL_WEIGHT_PROFILE, INITIAL_TOTAL_WEIGHT } from './WeightContext';
import getEmoji from '../helper/emojiRandomizer';

const INITIAL_MENU_ITEMS = {
    menuItems:
        [
            {
                key: 0,
                profileTitle: getEmoji() + INITIAL_WEIGHT_PROFILE.profileTitle,
                weight: INITIAL_TOTAL_WEIGHT,
            },
        ]
}

export const MenuContext = createContext();

export const MenuProvider = props => {

    const [profiles, setProfiles] = useState();
    useEffect(() => {
        const storage = { ...localStorage };
        setProfiles(storage);
    }, [setProfiles])

    // States
    const [menus, setMenus] = useState(() => {
        const storage = localStorage.getItem('profile1');
        if (storage) {
            let menuItems = [];
            let updatedMenu = { menuItems };

            // parse each key value
            for (let i = 0; i < localStorage.length; i++) {
                const profileKey = localStorage.key(i);
                const localStorageProfile = JSON.parse(localStorage.getItem(profileKey));

                // extract key, profileTitle, and totalWeight from key value
                menuItems[i] = {
                    key: i,
                    profileTitle: localStorageProfile.profileTitle,
                    weight: localStorageProfile.totalWeight
                }
            }

            return updatedMenu;
        }
        else {
            return INITIAL_MENU_ITEMS;
        }
    });

    return (
        <MenuContext.Provider
            value={{
                menusValue: [menus, setMenus]
            }}
        >
            {props.children}
        </MenuContext.Provider>
    );
}