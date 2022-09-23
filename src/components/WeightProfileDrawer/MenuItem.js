import { useContext, useState } from 'react';
import { WeightContext, INITIAL_WEIGHT_PROFILE } from '../../contexts/WeightContext';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import './MenuItem.css';

function getTitleFromLocalStorage(menuItem) {
    const storage = localStorage.getItem(menuItem);
    if (storage) {
        const weightProfile = JSON.parse(storage);
        return weightProfile.profileTitle;
    }
    else {
        return INITIAL_WEIGHT_PROFILE.profileTitle;
    }
}

function getTotalWeightFromLocalStorage(menuItem) {
    const storage = localStorage.getItem(menuItem);
    if (storage) {
        const weightProfile = JSON.parse(storage);
        return weightProfile.totalWeight;
    }
    else {
        return INITIAL_WEIGHT_PROFILE.totalWeight;
    }
}

export default function MenuItem(props) {

    // Menu Item Key
    const MENU_ITEM = `profile${props.profileNumber}`

    // Weight State Context
    const { importedProfileValue, totalWeightValue } = useContext(WeightContext);
    const [importedProfile, setImportedProfile] = importedProfileValue;

    // Menu State
    const [menuTitle, setMenuTitle] = useState(getTitleFromLocalStorage(MENU_ITEM));
    const [menuWeight, setMenuWeight] = useState(getTotalWeightFromLocalStorage(MENU_ITEM));

    // Update the selected menu item upon click
    const menuItemClickHandler = () => {

        if (MENU_ITEM !== importedProfile) {
            // Update the Weight Context so that all edits go to the newly selected menu item
            setImportedProfile(MENU_ITEM);
        }

        // Update the title based on local storage value
        setMenuTitle(getTitleFromLocalStorage(MENU_ITEM));

        // Update the weight based on the local storage value
        setMenuWeight(getTotalWeightFromLocalStorage(MENU_ITEM));
    }

    return (
        <div className='menu--item'
            onClick={menuItemClickHandler}
            onMouseUp={MENU_ITEM !== importedProfile ? props.toggleDrawer("bottom", false) : null}>
            <div className='menu--item-info'>
                <Avatar
                    alt='Weight Profile Total Weight'
                    sx={{ width: 60, height: 60 }}>{menuWeight}lb</Avatar>
                <div className='menu--item-text'>
                    <Typography variant='h6'>{menuTitle}</Typography>
                    <Typography variant='body2'>Profile {props.profileNumber}</Typography>
                </div>
            </div>
            {/* Menu UI automatically updates to show the currently selected menu item */}
            {
                MENU_ITEM === importedProfile ?
                    <div className='menu--item-status'>
                        <CheckIcon color='primary' />
                    </div>
                    : null
            }
        </div>
    );
}