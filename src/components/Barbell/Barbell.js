import { useContext, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
import './Barbell.css';

export default function Barbell(props) {

    const { barWeightValue } = useContext(WeightContext);
    const [barWeight, setBarWeight] = barWeightValue;

    const barbellButtonHandler = () => {
        console.log(`clicked ${props.weight}`);
        setBarWeight(props.weight);
    }

    return (
        <div className={`barbell--bar ${props.barbellClass}`} onClick={barbellButtonHandler}>
            <div className='barbell--bar-text'>
                <p>{props.weight} {props.unit}</p>
            </div>
        </div>
    );
}