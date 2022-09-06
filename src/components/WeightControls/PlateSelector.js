import { useContext, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
import _ from 'lodash';
import './PlateSelector.css';

export default function PlateSelector(props) {

    const { totalWeightValue, plateAmountValue } = useContext(WeightContext);
    const [totalWeight, setTotalWeight] = totalWeightValue;
    const [plateAmount, setPlateAmount] = plateAmountValue;

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

    return (
        <button id={`${props.id}`} className={`plate plate--button ${props.plateClass}`} onClick={plateClickHandler}>
            {props.weight}
        </button>
    )
}