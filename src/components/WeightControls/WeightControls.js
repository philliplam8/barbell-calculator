import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ControlTabs from './ControlTabs';
// import SwipeableViews from 'react-swipeable-views';
import './WeightControls.css';

export default function WeightControls() {

    return (
        <div className='weight-controls'>
            <div className='weight--controls-card'>
                {/* <Tabs variant="fullWidth">
                    <Tab label="Barbell" />
                    <Tab label="Plates" />
                </Tabs> */}
                <ControlTabs />
            </div>
        </div>
    )
}