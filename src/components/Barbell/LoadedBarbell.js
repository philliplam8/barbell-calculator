import { useContext } from 'react';
import { WeightContext } from '../../contexts/WeightContext';
import Plate from '../Plates/Plate';
import Barbell from './Barbell';
import './LoadedBarbell.css';

function DisplayPlateGroup(props) {
    const PLATE_SLEEVE_THRESHOLD = 5;
    const { totalPlatesValue } = useContext(WeightContext);
    const [totalPlates, setTotalPlates] = totalPlatesValue;

    const amountOneSide = props.amount / 2;
    let samePlateGroup = [];

    // Create an array that contains all instances of the same weight type
    for (let i = 0; i < amountOneSide; i++) {
        samePlateGroup[i] = {
            key: i,
            weight: props.weight
        }
    }

    // Collapse into group once there are more than 5 plates on either barbell sleeve
    if (totalPlates / 2 > PLATE_SLEEVE_THRESHOLD) {
        return (
            <Plate
                id={`${props.key}-${props.weight}`}
                key={`${props.key}-${props.weight}`}
                weight={props.weight}
                amount={`x${props.amount / 2}`}
                plateClass={props.plateClass}
                plateDisplay={props.plateDisplay}
            />
        )
    }

    else {
        // Render all instances of the same weight plate type
        return samePlateGroup.map((plateInstance) => (
            <Plate
                id={`${props.key}-${props.weight}`}
                key={`${props.key}-${props.weight}-${plateInstance.key}`}
                weight={props.weight}
                plateClass={props.plateClass}
                plateDisplay={props.plateDisplay}
            />
        ));
    }

}

export default function LoadedBarbell() {
    const { currentTabValue, barWeightValue, plateAmountValue } = useContext(WeightContext);
    const [tab, setTab] = currentTabValue;
    const [barWeight, setBarWeight] = barWeightValue;
    const [plateAmount, setPlateAmount] = plateAmountValue;

    const unit = "lb";

    // Switch to the Plate Tab if the user clicks on the Display Plates
    const plateTabHandler = () => {
        setTab(0);
    }

    // Switch to the Barbell Tab if the user clicks on the Display Barbell
    const barbellTabHandler = () => {
        setTab(1);
    }

    return (
        <div className='card--barbell'>
            <div className='barbell--plate-holder barbell--plate-holder-left' onClick={plateTabHandler}>
                {plateAmount.plates.map(DisplayPlateGroup)}
            </div>

            <div className='barbell--bar-container' onClick={barbellTabHandler}>
                <div className='barbell--sleeve barbell--sleeve-left'></div>
                <Barbell weight={barWeight} unit={unit} />
                <div className='barbell--sleeve barbell--sleeve-right'></div>
            </div>
            <div className='barbell--plate-holder' onClick={plateTabHandler}>
                {[...plateAmount.plates].reverse().map(DisplayPlateGroup)}
            </div>
        </div>
    )
}
