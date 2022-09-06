import Barbell from '../Barbell/Barbell';
import TextField from '@mui/material/TextField';
import './AddBarbell.css';

export default function AddBarbell() {

    const unit = 'lb';

    return (
        <div className='barbell--choices'>
            <Barbell weight={0} unit={unit} />
            <Barbell weight={10} unit={unit} />
            <Barbell weight={35} unit={unit} />
            <Barbell weight={45} unit={unit} />
            <TextField id="barbell-weight-custom" type="number" label="Custom Barbell Weight" variant="outlined" />
        </div>
    );
}