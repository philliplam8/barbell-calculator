import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import './WeightProfileTitle.css';

const TITLE_DEFAULT = 'PROFILE #2: BENCH PRESS SET';
const TITLE_EMPTY = 'UNTITLED PROFILE';

export default function WeightProfileTitle(props) {

    const [isToggle, setIsToggle] = useState(false);
    const [title, setTitle] = useState(TITLE_DEFAULT);

    // When the user clicks on the title, select all the text within the input
    const titleClickHandler = () => {
        const inputTitleField = document.getElementsByClassName('profile--name')[0];
        setIsToggle(!isToggle);
        inputTitleField.focus();
        inputTitleField.select();
    }

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const titleBlurHandler = () => {
        if (title === '') {
            setTitle(TITLE_EMPTY);
        }
        setIsToggle(!isToggle);
    }

    const titleKeyUpHandler = (e) => {
        // ENTER/RETURN keyCode is 13
        if (e.keyCode === 13) {
            e.preventDefault();
            e.target.blur();
        }
    }

    const editButtonHandler = () => {
        setIsToggle(!isToggle);
        const inputTitleField = document.getElementsByClassName('profile--name')[0];
        inputTitleField.focus();
    }

    const doneButtonHandler = () => {
        setIsToggle(!isToggle);
    }

    useEffect(() => {
        const inputTitleField = document.getElementsByClassName('profile--name')[0];
        inputTitleField.style.width = `${title.length}ch`;
    })

    return (
        <div className='profile'>
            <input className='profile--name' type='text' value={title} onClick={titleClickHandler} onChange={titleChangeHandler} onBlur={titleBlurHandler} onKeyUp={titleKeyUpHandler}></input>
            <IconButton className='profile--icon' aria-label='edit-title' size='small' style={{ display: isToggle ? 'none' : 'block' }} onClick={editButtonHandler}>
                <EditIcon fontSize='inherit' />
            </IconButton>
            <IconButton className='profile--icon' aria-label='submit-title' size='small' style={{ display: isToggle ? 'block' : 'none' }} onClick={doneButtonHandler}>
                <DoneIcon fontSize='inherit' />
            </IconButton>
        </div>
    )
}