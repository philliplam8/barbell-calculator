import { useContext, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ControlTabs from './ControlTabs';
// import SwipeableViews from 'react-swipeable-views';
import './WeightControls.css';

export default function WeightControls() {

    const { totalWeightValue, barWeightValue, plateAmountValue } = useContext(WeightContext);
    const [totalWeight, setTotalWeight] = totalWeightValue;
    const [barWeight, setBarWeight] = barWeightValue;
    const [plateAmount, setPlateAmount] = plateAmountValue;

    const calculateTotalWeight = () => {
        let total = barWeight;
        for (const plate in plateAmount.plates) {
            total += plateAmount.plates[plate].weight * plateAmount.plates[plate].amount;
        }
        setTotalWeight(total);
    }

    // Update the Total Weight Displayed
    useEffect(() => {
        calculateTotalWeight();;
    });

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