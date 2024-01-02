import React from 'react'
import Enrolling from '../enrolling/Enrolling'
import { observer } from 'mobx-react';
import RentingStor from '../../stores/renting'
import BBDetails from '../b&BDetails/BBDetails';
import AddBB from '../addB&B/AddBB'
import BBDetailsStor from  '../../stores/BBDetailsStor'

const BBForRent = (observer
    (() => {

  return (
    <>
{BBDetailsStor.isLogin?
    <AddBB/>:<></>}
   <BBDetails/>
   <Enrolling onAddOrder={(name,phon,mail,date,numOfBeds)=>RentingStor.addOrder(name,phon,mail,date,numOfBeds)}/>
    </>
    )
}))

export default BBForRent
