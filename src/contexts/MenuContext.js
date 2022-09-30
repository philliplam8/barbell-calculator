import React, { useState, createContext, useEffect } from 'react';
import { INITIAL_WEIGHT_PROFILE, INITIAL_TOTAL_WEIGHT } from './WeightContext';
import getEmoji from '../helper/emojiRandomizer';

const INITIAL_MENU_ITEMS = {
    menuItems:
        [
            {
                key: 'profile0',
                profileTitle: getEmoji() + INITIAL_WEIGHT_PROFILE.profileTitle,
                weight: INITIAL_TOTAL_WEIGHT,
                barWeight: INITIAL_WEIGHT_PROFILE.barWeight,
                plateWeight: (INITIAL_TOTAL_WEIGHT - INITIAL_WEIGHT_PROFILE.barWeight)
            },
        ]
}

export const MenuContext = createContext();

export const MenuProvider = props => {

    // States
    const [menus, setMenus] = useState(() => {
        // const storage = localStorage.key(0);

        // // If there is existing menu items in localStorage, load them into context
        // if (storage) {
        //     let menuItems = [];
        //     let updatedMenu = { menuItems };

        //     // parse each key value
        //     for (let i = localStorage.length - 1; i >= 0; i--) {
        //         const localStorageKey = localStorage.key(i);
        //         console.log({ localStorageKey })
        //         const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));

        //         const plateWeight = localStorageValue.totalWeight - localStorageValue.barWeight;

        //         // extract key, profileTitle, and totalWeight from key value
        //         menuItems[localStorage.length - 1 - i] = {
        //             // menuItems[i] = {
        //             // TODO BC-46
        //             // menuItems[parseInt((localStorageKey).slice(7))] = {
        //             key: i + 1,
        //             // key: parseInt((localStorageKey).slice(7)),
        //             profileTitle: localStorageValue.profileTitle,
        //             weight: localStorageValue.totalWeight,
        //             barWeight: localStorageValue.barWeight,
        //             plateWeight: plateWeight
        //         }
        //     }
        //     return updatedMenu;
        const storage = localStorage.getItem('menu');
        if (storage) {
            const localStorageMenu = JSON.parse(storage);
            return localStorageMenu;
        }
        else {
            return INITIAL_MENU_ITEMS;
        }
    });

    // Update localStorage when updating the details for the menu items
    useEffect(() => {
        const newMenu = { ...menus };
        localStorage.setItem('menu', JSON.stringify(newMenu));
    }, [menus])

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