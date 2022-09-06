import { useContext, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
import './Barbell.css';

export default function Barbell(props) {

    const { totalWeightValue, barWeightValue, plateAmountValue } = useContext(WeightContext);
    const [barWeight, setBarWeight] = barWeightValue;

    const barbellButtonHandler = () => {
        console.log(`clicked ${props.weight}`);
        setBarWeight(props.weight);
    }

    return (
        <div className='barbell--bar' onClick={barbellButtonHandler}>
            <div className='barbell--bar-text'>
                <p>{props.weight} {props.unit}</p>
            </div>
        </div>
    );
}