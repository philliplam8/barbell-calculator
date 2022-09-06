import { useContext } from 'react';
import { WeightContext } from '../../WeightContext';
import Plate from '../Plates/Plate';
import Barbell from './Barbell';
import './LoadedBarbell.css';

export default function LoadedBarbell() {
    const { totalWeightValue, barWeightValue, plateAmountValue } = useContext(WeightContext);
    const [totalWeight, setTotalWeight] = totalWeightValue;
    const [barWeight, setBarWeight] = barWeightValue;
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
                <Barbell weight={barWeight} />
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