import { useContext } from 'react';
import { WeightContext } from '../../WeightContext';
import Plate from '../Plates/Plate';
import './LoadedBarbell.css';

export default function LoadedBarbell() {
    const { totalWeightValue, plateAmountValue } = useContext(WeightContext);
    const [totalWeight, setTotalWeight] = totalWeightValue;
    const [plateAmount, setPlateAmount] = plateAmountValue;

    return (
        <div className='card--barbell'>
            <div className='barbell--plate-holder barbell--plate-holder-left'>
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
            <div className='barbell--bar-container'>
                <div className='barbell--bar'>
                    <div className='barbell--bar-text'>
                        <p>45lb</p>
                    </div>
                </div>
            </div>
            <div className='barbell--plate-holder'>
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