import { useContext } from 'react';
import { WeightContext } from '../../contexts/WeightContext';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AnimationIcon from '@mui/icons-material/Animation';
import AddPlate from './AddPlate';
import AddBarbell from './AddBarbell';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'} variant={'body2'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function ControlTabs() {
    const { currentTabValue } = useContext(WeightContext);
    const [value, setValue] = currentTabValue;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} variant='fullWidth'>
                    <Tab icon={<AnimationIcon />} label="Plates" />
                    <Tab icon={<FitnessCenterIcon />} label="Barbell" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <AddPlate />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AddBarbell />
            </TabPanel>
        </Box>
    );
}
