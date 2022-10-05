import { useContext, useEffect, useState } from 'react';
import { WeightContext, INITIAL_WEIGHT_PROFILE, INITIAL_TOTAL_WEIGHT } from '../../contexts/WeightContext';
import { MenuContext } from '../../contexts/MenuContext';
import MenuItem from './MenuItem';
import ModalDeleteAll from './ModalDeleteAll';
import getEmoji from '../../helper/emojiRandomizer';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import './WeightProfileMenu.css';

const TOOL_TIP_TEXT = 'Delete All Profiles';

export default function WeightProfileMenu(props) {
    const { menusValue } = useContext(MenuContext);
    const [menus, setMenus] = menusValue;
    const [deleteMode, setDeleteMode] = useState(false);

    // Weight State Context
    const { importedProfileValue } = useContext(WeightContext);
    const [importedProfile, setImportedProfile] = importedProfileValue;

    const addMenuItemHandler = () => {

        const menuLength = menus.menuItems.length;
        const newProfileNumber = parseInt(menus.menuItems[menuLength - 1].key.toString().slice(7)) + 1;

        // Add new default profile to localStorage
        let WEIGHT_PROFILE = { ...INITIAL_WEIGHT_PROFILE };
        WEIGHT_PROFILE.key = `profile${newProfileNumber}`;
        WEIGHT_PROFILE.profileTitle = `${getEmoji()} ${WEIGHT_PROFILE.profileTitle}`;
        localStorage.setItem(`profile${newProfileNumber}`, JSON.stringify(WEIGHT_PROFILE));

        // Add new default profile to menu state context
        let updatedMenu = { ...menus };
        updatedMenu.menuItems[menuLength] = {
            key: `profile${newProfileNumber}`,
            profileTitle: WEIGHT_PROFILE.profileTitle,
            weight: INITIAL_TOTAL_WEIGHT
        }

        setMenus(updatedMenu);
    }

    const deleteMenuItemHandler = () => {
        console.log('Clicked Delete A Profile');
        setDeleteMode(true);
    }

    const doneButtonHandler = () => {
        setDeleteMode(false);
    }

    const deleteAllHandler = () => {
        localStorage.clear();
        window.location.reload();
        return false;
    }

    return (
        <div className='menu'>
            <div className='menu--header'>
                <div className='menu-header-title'>
                    {/* <ModalDeleteAll /> */}
                    {deleteMode && (
                        <Slide direction="right" in={deleteMode} mountOnEnter unmountOnExit>
                            <Tooltip title={TOOL_TIP_TEXT} enterTouchDelay={0} arrow>
                                <IconButton aria-label='delete all profiles' onClick={deleteAllHandler}>
                                    <DeleteSweepIcon fontSize='inherit' />
                                </IconButton>
                            </Tooltip>
                        </Slide>
                    )}
                    <h2>
                        Profiles
                    </h2>
                </div>

                <div className='menu--close'>
                    <IconButton aria-label='close-drawer' size='small' onClick={props.toggleDrawer("bottom", false)}>
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                </div>

            </div>

            <div className='menu--body'>
                <div className='menu--body-items'>
                    {/* <TransitionGroup> */}
                    {menus.menuItems.map(item => (
                        <MenuItem
                            key={item.key}
                            menuItem={item.menuItem}
                            title={item.profileTitle}
                            totalWeight={item.weight}
                            barWeight={item.barWeight}
                            plateWeight={item.weight - item.barWeight}
                            profileNumber={item.key.slice(7)}
                            toggleDrawer={props.toggleDrawer}
                            showDelete={deleteMode}
                        />
                    ))}
                    {/* </TransitionGroup> */}
                </div>

                <div className='menu--profile-actions'>
                    <Button variant='outlined' disabled={deleteMode} onClick={addMenuItemHandler}>Add Profile</Button>
                    {
                        deleteMode ?
                            <div>
                                <Button variant='outlined' color='primary' onClick={doneButtonHandler}>Done</Button>
                            </div>
                            :
                            <Button variant='outlined' color='error' onClick={deleteMenuItemHandler}>Delete A Profile</Button>
                    }
                </div>
            </div>

        </div>
    );
}