import { useContext, useEffect, useState } from 'react';
import { WeightContext, INITIAL_WEIGHT_PROFILE } from '../../contexts/WeightContext';
import { MenuContext } from '../../contexts/MenuContext';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Slide from '@mui/material/Slide';
import { deepPurple } from '@mui/material/colors';
import './MenuItem.css';

function getProfileFromLocalStorage(menuItem) {
    const storage = localStorage.getItem(menuItem);
    if (storage) {
        const weightProfile = JSON.parse(storage);
        return weightProfile;
    }
    else {
        return INITIAL_WEIGHT_PROFILE;
    }
}

export default function MenuItem(props) {

    // Menu Item Key
    const MENU_ITEM = `profile${props.profileNumber}`

    // Menu State Context
    const { menusValue } = useContext(MenuContext);
    const [menus, setMenus] = menusValue;

    // Menu State from LocalStorage
    const [menuTitle, setMenuTitle] = useState(getProfileFromLocalStorage(MENU_ITEM).profileTitle);
    const [menuWeight, setMenuWeight] = useState(getProfileFromLocalStorage(MENU_ITEM).totalWeight);
    const [menuBarWeight, setMenuBarWeight] = useState(getProfileFromLocalStorage(MENU_ITEM).barWeight);
    const [menuPlateWeight, setMenuPlateWeight] = useState(menuWeight - menuBarWeight);


    // Weight State Context
    const { importedProfileValue, totalWeightValue } = useContext(WeightContext);
    const [importedProfile, setImportedProfile] = importedProfileValue;

    // Update the selected menu item upon click
    const menuItemClickHandler = () => {

        if (MENU_ITEM !== importedProfile) {
            // Update the Weight Context so that all edits go to the newly selected menu item
            setImportedProfile(MENU_ITEM);
        }


        // Update menu based on localStorage values
        const menuProfileTitle = getProfileFromLocalStorage(MENU_ITEM).profileTitle;
        const menuTotalWeight = getProfileFromLocalStorage(MENU_ITEM).totalWeight;
        const menuBarWeight = getProfileFromLocalStorage(MENU_ITEM).barWeight;
        const menuPlateweight = menuTotalWeight - menuBarWeight;
        // Update the title based on local storage value
        setMenuTitle(menuProfileTitle);
        // Update the total weight based on the local storage value
        setMenuWeight(menuTotalWeight);
        // Update the bar weight based on the local storage value
        setMenuBarWeight(menuBarWeight);
        // Update the plate weight based on the local storage value
        setMenuPlateWeight(menuPlateweight);
    }

    const deleteHandler = () => {

        // Remove from context
        let updatedMenu = { ...menus }
        for (let i = 0; i < updatedMenu.menuItems.length; i++) {
            if (updatedMenu.menuItems[i].key.slice(7) === props.profileNumber) {
                updatedMenu.menuItems.splice(i, 1);
                setMenus(updatedMenu);
            }
        }

        // Remove from localStorage
        localStorage.removeItem(`profile${props.profileNumber}`);
    }

    return (
        <div className='menu--item-row'>

            {/* Delete Menu Item icons */}
            {props.showDelete ?
                <div className='menu--item-icons delete-icon'>
                    <Slide direction="right" in={props.showDelete} mountOnEnter unmountOnExit>
                        <IconButton
                            onClick={deleteHandler}
                            color='error'
                            disabled={MENU_ITEM === importedProfile}
                            aria-label={`Delete profile ${props.profileNumber}`}
                            size='small'
                        >
                            <Tooltip arrow title={'Delete'}>
                                <RemoveCircleOutlineIcon />
                            </Tooltip>
                        </IconButton>
                    </Slide>
                </div>
                : null
            }

            <div className='menu--item'
                onClick={menuItemClickHandler}
                onMouseUp={MENU_ITEM !== importedProfile ? props.toggleDrawer("bottom", false) : null}>

                <div className='menu--item-info'>

                    <Avatar
                        alt='Weight Profile Total Weight'
                        sx={{ width: 60, height: 60, bgcolor: 'black' }}>
                        {menuWeight}lb
                    </Avatar>

                    <div className='menu--item-text'>
                        <Typography variant='h6'>{menuTitle}</Typography>
                        <div className='menu--item-subtitle'>
                            {/* <Typography variant='body2'>Profile {props.profileNumber}</Typography> */}
                            <Typography variant='subtitle2'>Plates: {menuPlateWeight}lb • Barbell: {menuBarWeight}lb</Typography>
                        </div>
                    </div>

                </div>

                {/* Menu UI automatically updates to show the currently selected menu item */}
                <div className='menu--item-icons'>
                    {
                        MENU_ITEM === importedProfile ?
                            <CheckIcon color='primary' />
                            : null
                    }
                </div>
            </div>
        </div>

    );
}