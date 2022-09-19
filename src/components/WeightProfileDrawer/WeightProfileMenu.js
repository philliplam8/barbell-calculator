import { useContext, useState } from 'react';
import { WeightContext } from '../../contexts/WeightContext';
import MenuItem from './MenuItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './WeightProfileMenu.css';


export default function WeightProfileMenu() {

    const { totalWeightValue, profileTitleValue } = useContext(WeightContext);
    const [title, setTitle] = profileTitleValue;
    const [totalWeight, setTotalWeight] = totalWeightValue;

    return (
        <div className='menu'>
            <div className='menu--header'>
                <h2>Weight Profiles</h2>
                <div className='menu--close'>
                    <IconButton aria-label='edit-title' size='small'>
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                </div>
            </div>
            <div className='menu--body'>
                <div className='menu--body-items'>
                    <MenuItem totalWeight={totalWeight} title={title} />
                    <MenuItem totalWeight={totalWeight} title={title} />
                    <MenuItem totalWeight={totalWeight} title={title} />
                </div>

                <div className='menu--add-profile'>
                    <button>Add Profile</button>
                    <button>Delete A Profile</button>
                </div>
            </div>


        </div>
    );
}