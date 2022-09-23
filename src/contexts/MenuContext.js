import React, { useState, createContext, useEffect } from 'react';

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
                    profileTitle: 'BenchPress',
                    weight: 225,
                },
                {
                    key: 1,
                    profileTitle: 'Deadlift',
                    weight: 225,
                },
                {
                    key: 2,
                    profileTitle: 'Squats',
                    weight: 190,
                }
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