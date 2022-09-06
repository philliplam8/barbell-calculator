import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import './WeightProfileTitle.css';

export default function WeightProfileTitle(props) {

    return (
        <div className='profile'>
            <h3 className='profile--name'>Profile #2: Bench Press Set</h3>
            <div className='profile--edit'>
                <IconButton aria-label="edit-title" size="small">
                    <EditIcon fontSize='inherit' />
                </IconButton>

            </div>
        </div>
    )
}