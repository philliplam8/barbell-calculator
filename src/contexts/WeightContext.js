import React, { useState, createContext, useEffect } from 'react';

// Initial Values
const TITLE_DEFAULT = 'New Workout Set';
const INTIIAL_BAR_WEIGHT = 45; // Most common barbell weight
const INITIAL_TOTAL_WEIGHT = INTIIAL_BAR_WEIGHT;
const INITIAL_PLATE_AMOUNT = 0;
const INITIAL_PROFILE_NAME = 'profile1';

export const INITIAL_WEIGHT_PROFILE = {
    key: INITIAL_PROFILE_NAME,
    profileTitle: TITLE_DEFAULT,
    barWeight: INTIIAL_BAR_WEIGHT,
    plateAmount: {
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
                }
            ]
    }
}

export const WeightContext = createContext();

export const WeightProvider = props => {

    // General UI States
    const [tab, setTab] = useState(0);

    // Selected profile to be imported from Menu/Local Storage
    const [importedProfile, setImportedProfile] = useState(INITIAL_PROFILE_NAME);

    // Weight Profile State
    const [title, setTitle] = useState(() => {
        const storage = localStorage.getItem(importedProfile);
        if (storage) {
            const weightProfile = JSON.parse(storage);
            return weightProfile.profileTitle;
        }
        else {
            return INITIAL_WEIGHT_PROFILE.profileTitle;
        }
    });

    // Barbell Weight State
    const [barWeight, setBarWeight] = useState(() => {
        const storage = localStorage.getItem(importedProfile);
        if (storage) {
            const weightProfile = JSON.parse(storage);
            return weightProfile.barWeight;
        } else {
            return INITIAL_WEIGHT_PROFILE.barWeight;
        }
    });

    // Plate State
    const [totalPlates, setTotalPlates] = useState(0);
    const [totalWeight, setTotalWeight] = useState(INITIAL_TOTAL_WEIGHT);
    const [plateAmount, setPlateAmount] = useState(() => {
        const storage = localStorage.getItem(importedProfile);
        if (storage) {
            const weightProfile = JSON.parse(storage);
            return weightProfile.plateAmount;
        } else {
            return INITIAL_WEIGHT_PROFILE.plateAmount;
        }
    });

    // Read localStorage/import profile data first if menu item has changed
    useEffect(() => {
        if (localStorage.getItem(importedProfile)) {
            // Extract data from importedProfile
            const profile = JSON.parse(localStorage.getItem(importedProfile));

            // Import title, barbell, plates from this profile into all state context 
            setTitle(profile.profileTitle);
            setBarWeight(profile.barWeight);
            setPlateAmount(profile.plateAmount);
        }
    }, [importedProfile]);

    // Update localStorage when updating details for the same menu item
    useEffect(() => {
        const newWeightProfile = {
            key: importedProfile,
            profileTitle: title,
            barWeight: barWeight,
            plateAmount: plateAmount
        }
        localStorage.setItem(importedProfile, JSON.stringify(newWeightProfile));
    }, [title, barWeight, plateAmount, importedProfile]);

    return (
        <WeightContext.Provider
            value={{
                importedProfileValue: [importedProfile, setImportedProfile],
                currentTabValue: [tab, setTab],
                profileTitleValue: [title, setTitle],
                totalPlatesValue: [totalPlates, setTotalPlates],
                totalWeightValue: [totalWeight, setTotalWeight],
                barWeightValue: [barWeight, setBarWeight],
                plateAmountValue: [plateAmount, setPlateAmount]
            }}>
            {props.children}
        </WeightContext.Provider>
    )
}