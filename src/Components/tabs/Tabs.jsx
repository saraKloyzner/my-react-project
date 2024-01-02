import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../tabs/Tab.css'
// import Icon from '../addingAGuestHouse/AddingAGuestHouse';

import { Outlet, Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import AddBB from '../addB&B/AddBB';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}` `margin`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id='editBussinesDetails'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="רשימת צימרים להשכרה"
              component={Link}
              to="./details"
              {...a11yProps(0)} />

            <Tab label="עריכת פרטי עסק"
              component={Link}
              to="./edit"
              {...a11yProps(1)} />

            <Tab label="רשימת ההשכרות"
              component={Link}
              to="./orderList"
              {...a11yProps(2)} />
              <Tab label="הוספת צימר"
              component={Link}
              to="./addBB"
              {...a11yProps(3)} />
          </Tabs>
        </Box>

        {/* <CustomTabPanel value={value} index={0}>


          <AddBB />
          <AddIcon />


        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>

        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>

        </CustomTabPanel> */}

        <Outlet />

      </Box>
    </div>
  );
}