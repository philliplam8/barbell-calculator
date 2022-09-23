import React, { useState, createContext, useEffect } from 'react';
import { INITIAL_WEIGHT_PROFILE, INITIAL_TOTAL_WEIGHT } from './WeightContext';
import getEmoji from '../helper/emojiRandomizer';

export const MenuContext = createContext();

export const MenuProvider = props => {

    const [profiles, setProfiles] = useState();
    useEffect(() => {
        const storage = { ...localStorage };
        setProfiles(storage);
    }, [setProfiles])

    // States
    const [menus, setMenus] = useState({
        menuItems:
            [
                {
                    key: 0,
                    profileTitle: getEmoji() + INITIAL_WEIGHT_PROFILE.profileTitle,
                    weight: INITIAL_TOTAL_WEIGHT,
                },
            ]
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