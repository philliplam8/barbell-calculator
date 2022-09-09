import { useContext, useState, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
import Badge from '@mui/material/Badge';
import _ from 'lodash';
import './PlateSelector.css';

export default function PlateSelector(props) {

    const { plateAmountValue } = useContext(WeightContext);
    const [plateAmount, setPlateAmount] = plateAmountValue;
    const count = plateAmount.plates[props.id].amount;
    const [selectedClass, setSelectedClass] = useState('');

    const plateClickHandler = (e) => {
        console.log(`clicked ${e.currentTarget.id}`);
        const clickedPlateKey = e.currentTarget.id;

        // Create deep clone of plate state context
        let updatedPlateAmount = _.cloneDeep(plateAmount);

        // Remove selected indicator for all plates
        for (const plate in updatedPlateAmount.plates) {
            updatedPlateAmount.plates[plate].currentlySelected = false;
        }

        // Add selected indicator on the clicked plate
        updatedPlateAmount.plates[clickedPlateKey].currentlySelected = true;
        setPlateAmount(updatedPlateAmount);
    }

    // Update styling of selected plate
    useEffect(() => {
        if (plateAmount.plates[props.id].currentlySelected) {
            setSelectedClass('plate--button-selected');
        }
        else {
            setSelectedClass('');
        }
    }, [plateAmount.plates, props.id]);

    return (
        <Badge badgeContent={count} color="primary">
            <button
                id={`${props.id}`}
                className={`plate plate--button ${props.plateClass} ${selectedClass} ${selectedClass ? '' : 'plate--button-unselected'}`}
                onMouseDown={plateClickHandler}
                onClick={props.increment}>
                {props.weight}
            </button>
        </Badge>
    )
}