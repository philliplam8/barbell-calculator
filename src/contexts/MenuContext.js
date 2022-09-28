import React, { useState, createContext, useEffect } from 'react';
import { INITIAL_WEIGHT_PROFILE, INITIAL_TOTAL_WEIGHT } from './WeightContext';
import getEmoji from '../helper/emojiRandomizer';

const INITIAL_MENU_ITEMS = {
    menuItems:
        [
            {
                key: 1,
                profileTitle: getEmoji() + INITIAL_WEIGHT_PROFILE.profileTitle,
                weight: INITIAL_TOTAL_WEIGHT,
            },
        ]
}

export const MenuContext = createContext();

export const MenuProvider = props => {

    // States
    const [menus, setMenus] = useState(() => {
        const storage = localStorage.key(0);

        // If there is existing menu items in localStorage, load them into context
        if (storage) {
            let menuItems = [];
            let updatedMenu = { menuItems };

            // parse each key value
            for (let i = 0; i < localStorage.length; i++) {
                const localStorageKey = localStorage.key(i);
                const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));

                // extract key, profileTitle, and totalWeight from key value
                menuItems[i] = {
                // menuItems[parseInt((localStorageKey).slice(7))] = {
                    key: i + 1,
                    // key: parseInt((localStorageKey).slice(7)),
                    profileTitle: localStorageValue.profileTitle,
                    weight: localStorageValue.totalWeight
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