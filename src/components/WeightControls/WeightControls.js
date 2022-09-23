import { useContext, useEffect } from 'react';
import { WeightContext } from '../../contexts/WeightContext';
import { MenuContext } from '../../contexts/MenuContext';
import ControlTabs from './ControlTabs';
import './WeightControls.css';

const unit = 'lb';

export default function WeightControls() {

    // Weight Display
    const { totalPlatesValue, totalWeightValue, barWeightValue, plateAmountValue, importedProfileValue } = useContext(WeightContext);
    const [totalPlates, setTotalPlates] = totalPlatesValue;
    const [totalWeight, setTotalWeight] = totalWeightValue;
    const [barWeight, setBarWeight] = barWeightValue;
    const [plateAmount, setPlateAmount] = plateAmountValue;
    const [importedProfile, setImportedProfile] = importedProfileValue;

    // Menu Drawer
    const { menusValue } = useContext(MenuContext);
    const [menus, setMenus] = menusValue;

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

        // Update total weight in menu
        // Create copy of menu
        let updatedMenu = { ...menus };
        // Update total weight within specific menu item

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