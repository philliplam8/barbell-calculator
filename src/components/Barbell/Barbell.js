import { useContext, useState, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
import './Barbell.css';

export default function Barbell(props) {

    const { barWeightValue } = useContext(WeightContext);
    const [barWeight, setBarWeight] = barWeightValue;

    const [selectedClass, setSelectedClass] = useState('');

    const barbellButtonHandler = () => {
        console.log(`clicked ${props.weight}`);
        setBarWeight(props.weight);
    }

    useEffect(() => {
        if (props.weight === barWeight) {
            setSelectedClass('barbell--bar-selected');
        } 
        else {
            setSelectedClass('');
        }
    }, [props.weight, barWeight, setSelectedClass]);

    return (
        <div className={`barbell--bar ${props.barbellClass} ${selectedClass}`} onClick={barbellButtonHandler}>
            <div className='barbell--bar-text'>
                <p>{props.weight} {props.unit}</p>
            </div>
        </div>
    );
}