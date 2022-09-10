import React, { useState, createContext } from 'react';

export const WeightContext = createContext();

export const WeightProvider = props => {

    // Initial Values
    const TITLE_DEFAULT = 'PROFILE #2: BENCH PRESS SET';
    const INTIIAL_BAR_WEIGHT = 45; // Most common barbell weight
    const INITIAL_TOTAL_WEIGHT = INTIIAL_BAR_WEIGHT;

    // States
    const [title, setTitle] = useState(TITLE_DEFAULT);
    const [tab, setTab] = useState(0);
    const [totalPlates, setTotalPlates] = useState(0);
    const [totalWeight, setTotalWeight] = useState(INITIAL_TOTAL_WEIGHT);
    const [barWeight, setBarWeight] = useState(INTIIAL_BAR_WEIGHT);
    const [plateAmount, setPlateAmount] = useState({
        plates:
            [
                {
                    key: 0,
                    plateName: '2.5',
                    weight: 2.5,
                    amount: 0,
                    plateClass: 'plate2point5 plate--width-small',
                    plateDisplay: 'plate--off',
                    currentlySelected: false
                },
                {
                    key: 1,
                    plateName: '5',
                    weight: 5,
                    amount: 0,
                    plateClass: 'plate5 plate--width-small',
                    plateDisplay: 'plate--off',
                    currentlySelected: false
                },
                {
                    key: 2,
                    plateName: '10',
                    weight: 10,
                    amount: 0,
                    plateClass: 'plate10 plate--width-small',
                    plateDisplay: 'plate--off',
                    currentlySelected: false
                },
                {
                    key: 3,
                    plateName: '25',
                    weight: 25,
                    amount: 0,
                    plateClass: 'plate25 plate--width-small',
                    plateDisplay: 'plate--off',
                    currentlySelected: false
                },
                {
                    key: 4,
                    plateName: '35',
                    weight: 35,
                    amount: 0,
                    plateClass: 'plate35 plate--width-small',
                    plateDisplay: 'plate--off',
                    currentlySelected: false
                },
                {
                    key: 5,
                    plateName: '45',
                    weight: 45,
                    amount: 0,
                    plateClass: 'plate45 plate--width-medium',
                    plateDisplay: 'plate--off',
                    currentlySelected: false
                },
                {
                    key: 6,
                    plateName: '55',
                    weight: 55,
                    amount: 0,
                    plateClass: 'plate55 plate--width-large',
                    plateDisplay: 'plate--off',
                    currentlySelected: false
                },
            ]
    });

    return (
        <WeightContext.Provider
            value={{
                titleValue: [title, setTitle],
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