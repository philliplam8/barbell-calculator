import { useEffect, useState, useContext, useRef } from 'react';
import { WeightContext } from '../../WeightContext';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import './WeightProfileTitle.css';

export default function WeightProfileTitle() {
    const TITLE_EMPTY = 'UNTITLED PROFILE';
    const { titleValue } = useContext(WeightContext);
    const [title, setTitle] = titleValue;
    const [isToggle, setIsToggle] = useState(false);
    const inputRef = useRef(null);

    // When the user clicks on the title, select all the text within the input
    const titleClickHandler = (e) => {
        setIsToggle(!isToggle);

        const inputTitleField = e.target;
        inputTitleField.focus();
        inputTitleField.select();
    }

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    // If the user leaves the input field empty and leaves it, auto-input the TITLE_EMPTY title
    const titleBlurHandler = () => {
        if (title === '') {
            setTitle(TITLE_EMPTY);
        }
        setIsToggle(false);
    }

    // Unfocus the input field after the ENTER/RETURN key is pressed
    const titleKeyUpHandler = (e) => {
        // ENTER/RETURN keyCode is 13
        if (e.keyCode === 13) {
            e.preventDefault();
            e.target.blur();
        }
    }

    // When clicking the edit button, focus the input field and switch the button icon to the checkmark
    const editButtonHandler = () => {
        setIsToggle(!isToggle);
        inputRef.current.focus();
    }

    // When clicking the checkmark button, switch the button icon to the edit icon
    const doneButtonHandler = () => {
        setIsToggle(!isToggle);
    }

    // Dynamically update the input width based on the input text length
    useEffect(() => {
        inputRef.current.style.width = `${title.length}ch`;
    })

    return (
        <div className='profile'>
            <input ref={inputRef} className='profile--name' type='text' value={title} onClick={titleClickHandler} onChange={titleChangeHandler} onBlur={titleBlurHandler} onKeyUp={titleKeyUpHandler}></input>
            <IconButton className='profile--icon' aria-label='edit-title' size='small' style={{ display: isToggle ? 'none' : 'block' }} onClick={editButtonHandler}>
                <EditIcon fontSize='inherit' />
            </IconButton>
            <IconButton className='profile--icon' aria-label='submit-title' size='small' style={{ display: isToggle ? 'block' : 'none' }} onClick={doneButtonHandler}>
                <DoneIcon fontSize='inherit' />
            </IconButton>
        </div>
    )
}