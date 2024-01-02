import { useState } from 'react'

import '../businessOwnerScreen/BusinessOwnerScreen.css'
import Tabs from '../tabs/Tabs'
import BusinessDetails from '../businessDetails/BusinessDetails'
import { observer } from 'mobx-react';
const BusinessOwnerScreen=(observer(()=>{
  
    

    return (
        <>
       
            <BusinessDetails/>
           
            <Tabs/>



            

        </>
    )
}))

export default BusinessOwnerScreen