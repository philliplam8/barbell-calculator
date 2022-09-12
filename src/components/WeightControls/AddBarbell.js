import { useContext } from 'react';
import { WeightContext } from '../../contexts/WeightContext';
import Barbell from '../Barbell/Barbell';
import TextField from '@mui/material/TextField';
import './AddBarbell.css';

export default function AddBarbell() {
    const { barWeightValue } = useContext(WeightContext);
    const [barWeight, setBarWeight] = barWeightValue;

    const unit = 'lb';

    const barbellCustomHandler = (e) => {
        let customBarbellWeight = parseFloat(e.target.value);

        if (customBarbellWeight >= 0) {
            setBarWeight(customBarbellWeight);
        }
    }

    // Unfocus the input field after the ENTER/RETURN key is pressed
    const inputKeyUpHandler = (e) => {
        // ENTER/RETURN keyCode is 13
        if (e.keyCode === 13) {
            e.preventDefault();
            e.target.blur();
        }
    }

    return (
        <div className='barbell--choices'>
            <Barbell weight={0} unit={unit} barbellClass={'barbell--choice'} />
            <Barbell weight={10} unit={unit} barbellClass={'barbell--choice'} />
            <Barbell weight={35} unit={unit} barbellClass={'barbell--choice'} />
            <Barbell weight={45} unit={unit} barbellClass={'barbell--choice'} />
            <Barbell weight={55} unit={unit} barbellClass={'barbell--choice'} />
            <TextField
                id="barbell-weight-custom"
                type="number"
                size="small"
                label="Custom Barbell Weight (lb)"
                variant="outlined"
                placeholder="E.g. 12.5"
                onClick={barbellCustomHandler}
                onChange={barbellCustomHandler}
                onKeyUp={inputKeyUpHandler}
            >
            </TextField>
        </div>
    );
}
