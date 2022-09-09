import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function HelpToolTip(props) {
    return (
        <Tooltip title={props.title} placement='right' enterTouchDelay={0} arrow>
            <IconButton aria-label={props.ariaLabel}>
                <HelpOutlineIcon fontSize='inherit' />
            </IconButton>
        </Tooltip>
    );
}