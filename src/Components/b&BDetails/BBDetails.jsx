
import { useEffect, useState } from 'react';

import BBDetailsStor from '../../stores/BBDetailsStor'

import { observer } from "mobx-react"
import '../b&BDetails/BBDetails.css';


import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import PlaceIcon from '@mui/icons-material/Place';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Enrolling from '../enrolling/Enrolling'
import MoneyIcon from '@mui/icons-material/Money';
import HourglassTopSharpIcon from '@mui/icons-material/HourglassTopSharp';

const BBDetails = (observer(() => {
  
    const theme = useTheme();
    useEffect(() => {
        BBDetailsStor.initialServices()
       
    }, [])
    return (
        <>
            {BBDetailsStor.BBDetails.map((details, index) => {
                return (
                    <div key={index}>
                        <Card id="card" sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>

                                    <Typography component="div" variant="h5" id='title'>
                                        {details.name}
                                    </Typography>
                                    <div id='orderDetails'>
                                        <Typography sx={{ display: 'column' }} variant="subtitle1" color="text.secondary" component="div">

                                            {details.address}
                                            <PlaceIcon />
                                        </Typography>

                                        <Typography sx={{ display: 'column' }} variant="subtitle1" color="text.secondary" component="div">

                                            {details.numberOfPersons}
                                            <Diversity3Icon />
                                        </Typography>
                                        <Typography sx={{ display: 'column' }} variant="subtitle1" color="text.secondary" component="div">

                                            {details.numberOfRooms}
                                            <MeetingRoomIcon />
                                        </Typography>
                                        <Typography sx={{ display: 'column' }} variant="subtitle1" color="text.secondary" component="div">

                                            {details.price}
                                            <MoneyIcon />
                                        </Typography>
                                        <Typography sx={{ display: 'column' }} variant="subtitle1" color="text.secondary" component="div">

                                            {(details.duration)/60/24}: מספר ימים
                                            <HourglassTopSharpIcon />
                                        </Typography>
                                    </div>
                                    {!BBDetailsStor.isLogin ?
                                        <Enrolling id={details.id} /> : <></>}
                                </CardContent>
                                <CardMedia id='image'
                                    component="img"

                                    sx={{ width: 151 }}
                                    image={details.picture}
                                    alt="Live from space album cover"

                                />

                            </Box>

                        </Card>
                    </div >
                )
            }
            )}

        </>
    )
}))
export default BBDetails