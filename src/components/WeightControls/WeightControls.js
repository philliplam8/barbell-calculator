import { useContext, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
import ControlTabs from './ControlTabs';
import './WeightControls.css';

export default function WeightControls() {

    const { totalWeightValue, barWeightValue, plateAmountValue } = useContext(WeightContext);
    const [totalWeight, setTotalWeight] = totalWeightValue;
    const [barWeight, setBarWeight] = barWeightValue;
    const [plateAmount, setPlateAmount] = plateAmountValue;

    const unit = 'lb';

    const calculateTotalWeight = () => {

        // Get total plate weight
        let plateTotal = 0;
        for (const plate in plateAmount.plates) {
            plateTotal += plateAmount.plates[plate].weight * plateAmount.plates[plate].amount;
        }

        // Combine total plate weight and barbell weight
        let updatedTotalWeight = barWeight + plateTotal;

        // Update total weight displayed
        setTotalWeight(updatedTotalWeight);
    }

    // Update the Total Weight Displayed
    useEffect(() => {
        calculateTotalWeight();
        document.title = `Barbell Calculator - ${totalWeight}${unit}`
    });

    return (
        <div className='weight-controls'>
            <div className='weight--controls-card'>
                <ControlTabs />
            </div>
        </div>
    )
}