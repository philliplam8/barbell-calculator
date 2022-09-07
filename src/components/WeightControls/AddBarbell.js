import { useContext } from 'react';
import { WeightContext } from '../../WeightContext';
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


    return (
        <div className='barbell--choices'>
            <Barbell weight={0} unit={unit} barbellClass={'barbell--choice'} />
            <Barbell weight={10} unit={unit} barbellClass={'barbell--choice'} />
            <Barbell weight={35} unit={unit} barbellClass={'barbell--choice'} />
            <Barbell weight={45} unit={unit} barbellClass={'barbell--choice'} />
            <TextField
                id="barbell-weight-custom"
                type="number"
                label="Custom Barbell Weight"
                variant="outlined"
                onChange={barbellCustomHandler}
            >
            </TextField>
        </div>
    );
}
