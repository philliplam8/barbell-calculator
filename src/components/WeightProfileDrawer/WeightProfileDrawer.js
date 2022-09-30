import * as React from 'react';
import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import WeightProfileMenu from './WeightProfileMenu';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function WeightProfileDrawer() {

    const [state, setState] = useState({
        bottom: false,
    });

    const DRAWER_DIRECTION = "bottom";
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            <Tooltip title={'Switch Weight Profile'} enterTouchDelay={0} onClick={toggleDrawer(DRAWER_DIRECTION, true)}>
                <IconButton aria-label="menu" size="large">
                    <ExpandMoreIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>

            <SwipeableDrawer
                PaperProps={{ elevation: 0, style: { backgroundColor: "transparent" } }}
                anchor={DRAWER_DIRECTION}
                open={state[DRAWER_DIRECTION]}
                onClose={toggleDrawer(DRAWER_DIRECTION, false)}
                onOpen={toggleDrawer(DRAWER_DIRECTION, true)}
            >
                <WeightProfileMenu toggleDrawer={toggleDrawer} />
            </SwipeableDrawer>
        </div>
    );
}