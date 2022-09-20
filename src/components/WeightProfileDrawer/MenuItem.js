import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import './MenuItem.css';

export default function MenuItem(props) {

    return (
        <div className='menu--item'>
            <div className='menu--item-info'>
                <Avatar
                    alt='Weight Profile Total Weight'
                    sx={{ width: 60, height: 60 }}>{props.totalWeight}lb</Avatar>
                <div className='menu--item-text'>
                    <Typography variant='h6'>{props.title}</Typography>
                    <Typography variant='body2'>Profile {props.profileNumber}</Typography>
                </div>
            </div>
            {props.current ?
                <div className='menu--item-status'>
                    <CheckIcon color='primary'/>
                </div>
                : null}
        </div>
    );
}