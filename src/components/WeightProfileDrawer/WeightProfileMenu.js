import { useContext } from 'react';
import { INITIAL_WEIGHT_PROFILE, INITIAL_TOTAL_WEIGHT } from '../../contexts/WeightContext';
import { MenuContext } from '../../contexts/MenuContext';
import MenuItem from './MenuItem';
import getEmoji from '../../helper/emojiRandomizer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './WeightProfileMenu.css';

export default function WeightProfileMenu(props) {
    const { menusValue } = useContext(MenuContext);
    const [menus, setMenus] = menusValue;

    const addMenuItemHandler = () => {

        // Add new default profile to localStorage
        const localStorageLength = localStorage.length;
        let WEIGHT_PROFILE = { ...INITIAL_WEIGHT_PROFILE };
        WEIGHT_PROFILE.key = `profile${localStorageLength + 1}`;
        WEIGHT_PROFILE.profileTitle = `${getEmoji()} ${WEIGHT_PROFILE.profileTitle}`;
        localStorage.setItem(`profile${localStorageLength + 1}`, JSON.stringify(WEIGHT_PROFILE));

        // Add new default profile to state context
        let updatedMenu = { ...menus };
        updatedMenu.menuItems[localStorageLength] = {
            key: localStorageLength,
            profileTitle: WEIGHT_PROFILE.profileTitle,
            weight: INITIAL_TOTAL_WEIGHT
        }

        setMenus(updatedMenu);
    }

    const deleteMenuItemHandler = () => {
        console.log('Clicked Delete A Profile');
    }

    // For debugging/DEV
    const devDeleteAll = () => {
        localStorage.clear();
        window.location.reload();
        return false;
    }

    return (
        <div className='menu'>

            <div className='menu--header'>
                <h2>Profiles</h2>
                <div className='menu--close'>
                    <IconButton aria-label='edit-title' size='small' onClick={props.toggleDrawer("bottom", false)}>
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                </div>
            </div>

            <div className='menu--body'>
                <div className='menu--body-items'>

                    {menus.menuItems.map(item => (
                        <MenuItem
                            key={item.key}
                            menuItem={item.menuItem}
                            title={item.profileTitle}
                            totalWeight={item.weight}
                            profileNumber={item.key + 1}
                            toggleDrawer={props.toggleDrawer}
                        />
                    ))}

                </div>

                <div className='menu--profile-actions'>
                    <Button variant='outlined' onClick={addMenuItemHandler}>Add Profile</Button>
                    {/* <Button variant='outlined' onClick={deleteMenuItemHandler}>Delete A Profile</Button> */}
                    {/* for debugging/dev below*/}
                    <Button variant='outlined' onClick={devDeleteAll}>Delete All Profiles (Dev)</Button>
                </div>
            </div>

        </div>
    );
}