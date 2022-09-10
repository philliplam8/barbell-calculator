import { useContext, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
import ControlTabs from './ControlTabs';
import './WeightControls.css';

export default function WeightControls() {

    const { totalPlatesValue, totalWeightValue, barWeightValue, plateAmountValue } = useContext(WeightContext);
    const [totalPlates, setTotalPlates] = totalPlatesValue;
    const [totalWeight, setTotalWeight] = totalWeightValue;
    const [barWeight, setBarWeight] = barWeightValue;
    const [plateAmount, setPlateAmount] = plateAmountValue;

    const unit = 'lb';

    const calculateTotalWeight = () => {

        // Get total plate weight and total plates
        let newTotalWeight = 0;
        let newTotalPlates = 0;
        for (const plate in plateAmount.plates) {
            newTotalWeight += plateAmount.plates[plate].weight * plateAmount.plates[plate].amount;
            newTotalPlates += plateAmount.plates[plate].amount;
        }

        // Combine total plate weight and barbell weight
        let updatedTotalWeight = barWeight + newTotalWeight;

        // Update total weight displayed
        setTotalWeight(updatedTotalWeight);

        // Update total number of plates
        setTotalPlates(newTotalPlates);
    }

    // Update the Total Weight Displayed
    useEffect(() => {
        // Update Header Total
        calculateTotalWeight();
        // Update Page Title
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