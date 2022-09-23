import { useContext } from 'react';
import { WeightContext } from '../../contexts/WeightContext';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import './MenuItem.css';

export default function MenuItem(props) {

    const { importedProfileValue } = useContext(WeightContext);
    const [importedProfile, setImportedProfile] = importedProfileValue;

    const clickedMenuItem = `profile${props.profileNumber}`

    // Update the selected menu item upon click
    const menuItemClickHandler = () => {

        if (clickedMenuItem !== importedProfile) {
            // Update the Weight Context so that all edits go to the newly selected menu item
            setImportedProfile(clickedMenuItem);
            
        }
    }

    return (
        <div className='menu--item'
            onClick={menuItemClickHandler}
            onMouseUp={clickedMenuItem !== importedProfile ? props.toggleDrawer("bottom", false) : null}>
            <div className='menu--item-info'>
                <Avatar
                    alt='Weight Profile Total Weight'
                    sx={{ width: 60, height: 60 }}>{props.totalWeight}lb</Avatar>
                <div className='menu--item-text'>
                    <Typography variant='h6'>{props.title}</Typography>
                    <Typography variant='body2'>Profile {props.profileNumber}</Typography>
                </div>
            </div>
            {/* Menu UI automatically updates to show the currently selected menu item */}
            {
                clickedMenuItem === importedProfile ?
                    <div className='menu--item-status'>
                        <CheckIcon color='primary' />
                    </div>
                    : null
            }
        </div>
    );
}