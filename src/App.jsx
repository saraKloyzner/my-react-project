import React, { useEffect } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './App.css'
// import BBForRent from './Components/B&BsForRent/B&BsForRent'
import BBDetails from './Components/b&BDetails/BBDetails';
import { observer } from 'mobx-react';
import BusinessDetails from './Components/businessDetails/BusinessDetails';


const App = (observer(() => {


  return (
    <>
      <BusinessDetails />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BBDetails />
      </LocalizationProvider>
    </>
  )
}))

export default App


