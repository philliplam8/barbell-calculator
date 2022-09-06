import { useContext } from 'react';
import { WeightContext } from '../../WeightContext';
import Plate from '../Plates/Plate';
import Barbell from './Barbell';
import './LoadedBarbell.css';

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
                {plateAmount.plates.map(plate => (
                    <Plate
                        key={plate.key}
                        weight={plate.weight}
                        amount={plate.amount / 2}
                        plateClass={plate.plateClass}
                        plateDisplay={plate.plateDisplay}
                    />
                ))}
            </div>
            <div className='barbell--bar-container' onClick={barbellTabHandler}>
                <Barbell weight={barWeight} unit={unit} />
            </div>
            <div className='barbell--plate-holder' onClick={plateTabHandler}>
                {[...plateAmount.plates].reverse().map(plate => (
                    <Plate
                        key={plate.key}
                        weight={plate.weight}
                        amount={plate.amount / 2}
                        plateClass={plate.plateClass}
                        plateDisplay={plate.plateDisplay}
                    />
                ))}
            </div>
        </div>
    )
}