import { useEffect } from 'react'
import BBDetailsStor from '../../stores/BBDetailsStor'
import '../businessOwnerScreen/BusinessOwnerScreen.css'
import { observer } from "mobx-react"
import '../businessDetails/BusinessDeteils.css'

const BusinessDetails = (observer(() => {

    useEffect(() => {
        BBDetailsStor.showingBusinessDetails();
        
    }, [ ])

    return (
        <>
            <div id='businessDetails'>

                <img id='logo' src={BBDetailsStor.business.logo}alt="תמונת פרטי עסק"></img>
                <div id='details'>
                    <h3> {BBDetailsStor.business.name}</h3>
                    <h1>{BBDetailsStor.business.description}</h1>
                    <h4>{BBDetailsStor.business.mail}</h4>
                    <p>{BBDetailsStor.business.owner}</p>
                </div>
            </div>
        </>
    )
}))
export default BusinessDetails