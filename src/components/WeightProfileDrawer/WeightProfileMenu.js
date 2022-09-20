import { useContext, useState } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
import MenuItem from './MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './WeightProfileMenu.css';


export default function WeightProfileMenu() {

    const [menus, setMenus] = useContext(MenuContext);

    const addMenuItemHandler = () => {
        console.log('Clicked Add Profile');
    }

    const deleteMenuItemHandler = () => {
        console.log('Clicked Delete A Profile');
    }

    return (
        <div className='menu'>

            <div className='menu--header'>
                <h2>Profiles</h2>
                <div className='menu--close'>
                    <IconButton aria-label='edit-title' size='small'>
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                </div>
            </div>

            <div className='menu--body'>
                <div className='menu--body-items'>
                    {menus.menuItems.map(item => (
                        <MenuItem key={item.key} totalWeight={item.weight} title={item.title} profileNumber={item.key + 1} current={item.current} />
                    ))}

                </div>

                <div className='menu--profile-actions'>
                    <Button variant='outlined' onClick={addMenuItemHandler}>Add Profile</Button>
                    <Button variant='outlined' onClick={deleteMenuItemHandler}>Delete A Profile</Button>
                </div>
            </div>

        </div>
    );
}