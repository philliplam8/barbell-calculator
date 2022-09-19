import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import './MenuItem.css';

export default function MenuItem(props) {
    return (
        <div className='menu--profile'>
            <div className='menu--profile-info'>
                <Avatar>{props.totalWeight}</Avatar>
                <div className='menu--profile-text'>
                    <Typography variant='h5'>{props.title}</Typography>
                    <Typography variant='body2'>Subtitle?</Typography>
                </div>
            </div>
            <div className='menu--profile-status'>
                <CheckIcon />
            </div>
        </div>
    );
}