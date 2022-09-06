import { useContext, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
import _ from 'lodash';
import WeightProfileTitle from './WeightProfileTitle';
import LoadedBarbell from '../Barbell/LoadedBarbell';
import IconButton from '@mui/material/IconButton';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import EditIcon from '@mui/icons-material/Edit';
import './WeightProfile.css';

export default function WeightProfile() {
    const { totalWeightValue, plateAmountValue } = useContext(WeightContext);
    const [totalWeight, setTotalWeight] = totalWeightValue;
    const [plateAmount, setPlateAmount] = plateAmountValue;

    const handleReset = () => {
        console.log("Clicked Reset");
        let updatedPlateAmount = _.cloneDeep(plateAmount);
        for (const plate in updatedPlateAmount.plates) {
            updatedPlateAmount.plates[plate].amount = 0;
            updatedPlateAmount.plates[plate].plateDisplay = 'plate--off';
            updatedPlateAmount.plates[plate].currentlySelected = false;
        }
        setPlateAmount(updatedPlateAmount);
    }

    return (
        <div className='weight-profile'>
            <div className='card'>
                <div className='card--header'>
                    <div className='card--header-icon-reset'>
                        <IconButton aria-label="reset" size="large" onClick={handleReset}>
                            <RestartAltIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                    <h1 className='card--header-total'>{totalWeight} lb</h1>
                    <div className='card--header-icon-edit'>
                        <IconButton aria-label="reset" size="large">
                            <EditIcon fontSize="inherit" />
                        </IconButton></div>
                </div>
                <LoadedBarbell />
            </div>
            <WeightProfileTitle />
        </div>
    )
}