import { useContext, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
// import cloneDeep from 'lodash';
import _ from 'lodash';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PlateSelector from './PlateSelector'
import './AddPlate.css';


export default function AddPlate() {

    const { totalWeightValue, plateAmountValue } = useContext(WeightContext);
    const [totalWeight, setTotalWeight] = totalWeightValue;
    const [plateAmount, setPlateAmount] = plateAmountValue;

    const calculateTotalWeight = () => {
        let total = 0;
        for (const plate in plateAmount.plates) {
            total += plateAmount.plates[plate].weight * plateAmount.plates[plate].amount;
        }
        setTotalWeight(total);
    }

    const getSelectedPlate = () => {

        let selectedPlateKey = false;

        for (const plate in plateAmount.plates) {
            if (plateAmount.plates[plate].currentlySelected === true) {
                selectedPlateKey = plate;
            }
        }
        return selectedPlateKey;
    }

    const updateSelectedPlate = (selectedPlate) => {

    }

    const increment = () => {
        const selectedPlate = getSelectedPlate();
        // console.log(`Adding selected plate... ${plateAmount.plates[selectedPlate].plateName}`);

        if (selectedPlate) {
            // Get deep copy of plate context
            let updatedPlateAmount = _.cloneDeep(plateAmount);

            // Increment amount of selected plate 
            updatedPlateAmount.plates[selectedPlate].amount += 2;

            // Display plate if it is not already
            if (updatedPlateAmount.plates[selectedPlate].plateDisplay === 'plate--off') {
                updatedPlateAmount.plates[selectedPlate].plateDisplay = 'plate--on';
            }

            // Update state context
            setPlateAmount(updatedPlateAmount);
        }
    }

    const decrement = () => {
        const selectedPlate = getSelectedPlate();
        // console.log(`Removing selected plate... ${plateAmount.plates[selectedPlate].plateName}`);

        if (selectedPlate) {
            // Get deep copy of plate context
            let updatedPlateAmount = _.cloneDeep(plateAmount);

            // Decrement amount of selected plate if it is non-zero
            if (updatedPlateAmount.plates[selectedPlate].amount !== 0) {
                updatedPlateAmount.plates[selectedPlate].amount -= 2;

                // If amount is now zero, hide display
                if (updatedPlateAmount.plates[selectedPlate].amount === 0) {
                    updatedPlateAmount.plates[selectedPlate].plateDisplay = 'plate--off';
                }

                // Update state context
                setPlateAmount(updatedPlateAmount);
            }
        }
    }

    // Update the Total Weight Displayed
    useEffect(() => {
        calculateTotalWeight();;
    });

    return (
        <div className='plate-selection--controls'>
            <div className='plate-selection--choices'>
                <PlateSelector
                    id='0'
                    weight='2.5'
                    plateClass='plate2point5 plate--width-large' />
                <PlateSelector
                    id='1'
                    weight='5'
                    plateClass='plate5 plate--width-large' />
                <PlateSelector
                    id='2'
                    weight='10'
                    plateClass='plate10 plate--width-large' />
                <PlateSelector
                    id='3'
                    weight='25'
                    plateClass='plate25 plate--width-large' />
                <PlateSelector
                    id='4'
                    weight='35'
                    plateClass='plate35 plate--width-large' />
                <PlateSelector
                    id='5'
                    weight='45'
                    plateClass='plate45 plate--width-large' />
                <PlateSelector
                    id='6'
                    weight='55'
                    plateClass='plate55 plate--width-large' />
            </div>
            <div className='plate-selection--change'>
                <div className='plate-selection--decrement change-button'>
                    <IconButton aria-label="delete" size="large" onClick={decrement}>
                        <RemoveIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <div className='plate-selection--increment change-button'>
                    <IconButton aria-label="delete" size="large" onClick={increment}>
                        <AddIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};