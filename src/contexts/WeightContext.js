import React, { useState, createContext, useEffect } from 'react';

// Initial Values
const TITLE_DEFAULT = 'PROFILE #2: BENCH PRESS SET';
const INTIIAL_BAR_WEIGHT = 45; // Most common barbell weight
const INITIAL_TOTAL_WEIGHT = INTIIAL_BAR_WEIGHT;
const INITIAL_PLATE_AMOUNT = 0;

export const INITIAL_WEIGHT_PROFILE = {
    profileTitle: TITLE_DEFAULT,
    barWeight: INTIIAL_BAR_WEIGHT,
    plate2point5: INITIAL_PLATE_AMOUNT,
    plate5: INITIAL_PLATE_AMOUNT,
    plate10: INITIAL_PLATE_AMOUNT,
    plate25: INITIAL_PLATE_AMOUNT,
    plate35: INITIAL_PLATE_AMOUNT,
    plate45: INITIAL_PLATE_AMOUNT,
    plate55: INITIAL_PLATE_AMOUNT
}

export const WeightContext = createContext();

export const WeightProvider = props => {

    // States
    const [title, setTitle] = useState(TITLE_DEFAULT);
    const [tab, setTab] = useState(0);
    const [totalPlates, setTotalPlates] = useState(0);
    const [totalWeight, setTotalWeight] = useState(INITIAL_TOTAL_WEIGHT);
    const [barWeight, setBarWeight] = useState(
        JSON.parse(localStorage.getItem("barWeight")) || INTIIAL_BAR_WEIGHT);

    const [plateAmount, setPlateAmount] = useState(
        JSON.parse(localStorage.getItem("plateAmount")) ||
        {
            plates:
                [
                    {
                        key: 0,
                        plateName: '2.5',
                        weight: 2.5,
                        amount: INITIAL_PLATE_AMOUNT,
                        plateClass: 'plate2point5 plate--width-small',
                        plateDisplay: 'plate--off',
                        currentlySelected: false
                    },
                    {
                        key: 1,
                        plateName: '5',
                        weight: 5,
                        amount: INITIAL_PLATE_AMOUNT,
                        plateClass: 'plate5 plate--width-small',
                        plateDisplay: 'plate--off',
                        currentlySelected: false
                    },
                    {
                        key: 2,
                        plateName: '10',
                        weight: 10,
                        amount: INITIAL_PLATE_AMOUNT,
                        plateClass: 'plate10 plate--width-small',
                        plateDisplay: 'plate--off',
                        currentlySelected: false
                    },
                    {
                        key: 3,
                        plateName: '25',
                        weight: 25,
                        amount: INITIAL_PLATE_AMOUNT,
                        plateClass: 'plate25 plate--width-small',
                        plateDisplay: 'plate--off',
                        currentlySelected: false
                    },
                    {
                        key: 4,
                        plateName: '35',
                        weight: 35,
                        amount: INITIAL_PLATE_AMOUNT,
                        plateClass: 'plate35 plate--width-small',
                        plateDisplay: 'plate--off',
                        currentlySelected: false
                    },
                    {
                        key: 5,
                        plateName: '45',
                        weight: 45,
                        amount: INITIAL_PLATE_AMOUNT,
                        plateClass: 'plate45 plate--width-medium',
                        plateDisplay: 'plate--off',
                        currentlySelected: false
                    },
                    {
                        key: 6,
                        plateName: '55',
                        weight: 55,
                        amount: INITIAL_PLATE_AMOUNT,
                        plateClass: 'plate55 plate--width-large',
                        plateDisplay: 'plate--off',
                        currentlySelected: false
                    },
                ]
        });

    useEffect(() => {
        localStorage.setItem("barWeight", barWeight);
        localStorage.setItem("plateAmount", JSON.stringify(plateAmount));
    }, [barWeight, plateAmount]);


    return (
        <WeightContext.Provider
            value={{
                profileTitleValue: [title, setTitle],
                currentTabValue: [tab, setTab],
                totalPlatesValue: [totalPlates, setTotalPlates],
                totalWeightValue: [totalWeight, setTotalWeight],
                barWeightValue: [barWeight, setBarWeight],
                plateAmountValue: [plateAmount, setPlateAmount]
            }}>
            {props.children}
        </WeightContext.Provider>
    )
}