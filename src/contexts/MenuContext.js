import React, { useState, createContext, useContext, useEffect } from 'react';
import { WeightContext } from './WeightContext';

export const MenuContext = createContext();

export const MenuProvider = props => {

    const { totalWeightValue, profileTitleValue } = useContext(WeightContext);
    const [title, setTitle] = profileTitleValue;
    const [totalWeight, setTotalWeight] = totalWeightValue;

    // States
    const [menus, setMenus] = useState({
        menuItems:
            [
                {
                    key: 0,
                    title: title,
                    weight: totalWeight,
                    current: true
                },
                {
                    key: 1,
                    title: 'Deadlift',
                    weight: 225,
                    current: false
                },
                {
                    key: 2,
                    title: 'Squats',
                    weight: 190,
                    current: false
                }
            ]
    });

    return (
        <MenuContext.Provider value={[menus, setMenus]}>
            {props.children}
        </MenuContext.Provider>
    );
}