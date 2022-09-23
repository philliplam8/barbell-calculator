import { useContext, useState, useEffect } from 'react';
import { WeightContext, INITIAL_WEIGHT_PROFILE } from '../../contexts/WeightContext';
import { useLocalStorage } from '../../useLocalStorage';
import './Barbell.css';

export default function Barbell(props) {

    // const LOCAL_STORAGE_OBJECT_KEY = 'barWeight';

    const [selectedClass, setSelectedClass] = useState('');
    const { barWeightValue } = useContext(WeightContext);
    const [barWeightContext, setBarWeightContext] = barWeightValue;
    const [barWeight, setBarWeight] = barWeightValue;
    // const [barWeight, setBarWeight] = useLocalStorage(
    //     LOCAL_STORAGE_OBJECT_KEY,
    //     INITIAL_WEIGHT_PROFILE.barWeight,
    //     setBarWeightContext);

    const barbellButtonHandler = () => {
        // Update context state
        setBarWeight(props.weight);
    }

    // Highlight the barbell currently selected
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