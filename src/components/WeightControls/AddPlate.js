import { useContext, useState } from 'react';
import { WeightContext } from '../../contexts/WeightContext';
// import cloneDeep from 'lodash';
import _ from 'lodash';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import PlateSelector from './PlateSelector'
import './AddPlate.css';

const ERROR_EMPTY_CANNOT_ADD = 'No plate selected to add.';
const ERROR_EMPTY_CANNOT_SUBTRACT = 'No plate selected to substract.';
const ERROR_CANNOT_SUBTRACT = 'Cannot subtract any more from this plate type.';

export default function AddPlate() {

    const { plateAmountValue } = useContext(WeightContext);
    const [plateAmount, setPlateAmount] = plateAmountValue;

    const getSelectedPlate = () => {

        let selectedPlateKey = false;

        for (const plate in plateAmount.plates) {
            if (plateAmount.plates[plate].currentlySelected === true) {
                selectedPlateKey = plate;
            }
        }
        return selectedPlateKey;
    }

    const increment = () => {
        const selectedPlate = getSelectedPlate();

        // Increment if there is an actively selected plate
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

        // If there is no actively selected plate, display error validation
        else {
            handleSnackbarOpen(ERROR_EMPTY_CANNOT_ADD);
        }
    }

    const decrement = () => {
        const selectedPlate = getSelectedPlate();

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
            // If there are 0 plates, display error validation
            else {
                handleSnackbarOpen(ERROR_CANNOT_SUBTRACT);
            }
        }

        // If there is no actively selected plate, display error validation
        else {
            handleSnackbarOpen(ERROR_EMPTY_CANNOT_SUBTRACT);
        }

    }

    // Snackbar
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSnackbarOpen = (message) => {
        setSnackbarMessage(message);
        setOpenSnackbar(true);
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <div className='plate-selection--controls'>
            <div className='plate-selection--choices'>
                <PlateSelector
                    id='0'
                    weight='2.5'
                    plateClass='plate2point5 plate--width-large'
                    increment={increment}
                />
                <PlateSelector
                    id='1'
                    weight='5'
                    plateClass='plate5 plate--width-large'
                    increment={increment} />
                <PlateSelector
                    id='2'
                    weight='10'
                    plateClass='plate10 plate--width-large'
                    increment={increment} />
                <PlateSelector
                    id='3'
                    weight='25'
                    plateClass='plate25 plate--width-large'
                    increment={increment} />
                <PlateSelector
                    id='4'
                    weight='35'
                    plateClass='plate35 plate--width-large'
                    increment={increment} />
                <PlateSelector
                    id='5'
                    weight='45'
                    plateClass='plate45 plate--width-large'
                    increment={increment} />
                <PlateSelector
                    id='6'
                    weight='55'
                    plateClass='plate55 plate--width-large'
                    increment={increment} />
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

            <Snackbar
                open={openSnackbar}
                message={snackbarMessage}
                onClose={handleSnackbarClose}
                autoHideDuration={6000}
                action={action}
            >
            </Snackbar>

        </div>
    );
};