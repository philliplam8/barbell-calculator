import _ from 'lodash';
import { useContext } from 'react';
import { WeightContext } from '../../contexts/WeightContext';
import './Plate.css';

export default function Plate(props) {

    const { plateAmountValue } = useContext(WeightContext);
    const [plateAmount, setPlateAmount] = plateAmountValue;

    const plateClickHandler = (e) => {
        const clickedPlateKey = e.currentTarget.id[0];

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
        <div id={props.id} className={`plate ${props.plateClass} ${props.plateDisplay}`} onClick={plateClickHandler}>
            <div className='plate--text'>{props.weight}</div>
            <div className='plate--text plate--amount'>{props.amount}</div>
        </div>
    )
}