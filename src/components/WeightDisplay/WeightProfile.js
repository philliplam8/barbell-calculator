import { useContext, useState, useEffect } from 'react';
import { WeightContext } from '../../WeightContext';
import _ from 'lodash';
import WeightProfileTitle from './WeightProfileTitle';
import LoadedBarbell from '../Barbell/LoadedBarbell';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import EditIcon from '@mui/icons-material/Edit';
import { motion, useAnimationControls } from "framer-motion"
import './WeightProfile.css';

export default function WeightProfile() {
    const { totalWeightValue, barWeightValue, plateAmountValue } = useContext(WeightContext);
    const [barWeight, setBarWeight] = barWeightValue;
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
    const unit = 'lb';
    const toolTipText = `( Plate Weight: ${totalWeight - barWeight}${unit} ) + ( Bar Weight: ${barWeight}${unit} )`;

    // Animation
    const controls = useAnimationControls()
    useEffect(() => {
        controls.start({
            scale: [1, 1.2, 1],
            translateY: ['0px', '-5px', '5px'],
            color: ["#000000", "#67a074", "#000000"]
        });
    }, [controls, totalWeight]);

    return (
        <div className='weight-profile'>
            <div className='card'>
                <div className='card--header'>
                    <div className='card--header-icon card--header-icon-reset'>
                        <Tooltip title="Reset Plates" enterTouchDelay={0}>
                            <IconButton aria-label="reset" size="large" onClick={handleReset}>
                                <RestartAltIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                    </div>

                    <div>
                        <motion.div
                            animate={controls}
                            transition={{ times: [0, 0.05, 0.95] }}
                        >
                            <Tooltip title={toolTipText} enterTouchDelay={0} arrow>
                                <h1 className='card--header-total'>{totalWeight} lb</h1>
                            </Tooltip>
                        </motion.div>
                    </div>

                    <div className='card--header-icon card--header-icon-edit'>
                        <Tooltip
                            title={toolTipText}
                            placement='bottom-start'
                            enterTouchDelay={0} >
                            <IconButton aria-label="edit" size="large">
                                <InfoOutlinedIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <LoadedBarbell />
            </div>
            <WeightProfileTitle />
        </div>
    )
}