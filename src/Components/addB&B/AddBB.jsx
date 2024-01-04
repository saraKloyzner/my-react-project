
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import BBDetailsStor from '../../stores/BBDetailsStor';
import '../addB&B/AddBB.css'
import Swal from 'sweetalert2'

function AddBB() {
    const [post, setPost] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [numberOfPersons, setNumberOfPersons] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState('');
    const [picture, setPicture] = useState('');


    const handleAddBB = () => {
        BBDetailsStor.postBBDetails({
            id: id, name: name, price: price, duration: duration, picture: picture,
            address: address, numberOfPersons: numberOfPersons, numberOfRooms: numberOfRooms
        });
        // if (BBDetailsStor.isBussinesDetailsPost === true)
        //     setPost(true);
        // BBDetailsStor.isBussinesDetailsPost === false;
       
    }
    return (
        <>
            <Box id='box'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                        <div id='form'>
                <TextField className='textField' id="filled-basic" value={id} label="קוד שירות" variant="filled" type='text' onChange={(e) => setId(e.target.value)} />

                <TextField className='textField' id="filled-basic" value={name} label="שם" variant="filled" type='text' onChange={(e) => setName(e.target.value)} />

                <TextField className='textField' id="filled-basic" value={address} label="כתובת" variant="filled" type='text' onChange={(e) => setAddress(e.target.value)} />
                <TextField className='textField' id="filled-basic" value={price} label="מחיר" variant="filled" type='nunber' onChange={(e) => setPrice(e.target.value)} />
                <TextField className='textField' id="filled-basic" value={duration} label="משך זמן" variant="filled" type='nunber' onChange={(e) => setDuration(e.target.value)} />

                <TextField className='textField' id="filled-basic" value={numberOfPersons} label="כמות נפשות" variant="filled" type='text' onChange={(e) => setNumberOfPersons(e.target.value)} />

                <TextField className='textField' id="filled-basic" value={numberOfRooms} label="כמות חדרים" variant="filled" type='text' onChange={(e) => setNumberOfRooms(e.target.value)} />

                <TextField className='textField' id="filled-basic" value={picture} label="תמונה" variant="filled" type='text' onChange={(e) => setPicture(e.target.value)} />

                {/* <TextField id="filled-basic" value={invitingDate} label="תאריך הגעה" variant="filled" type='date' onChange={(e)=>setInvitingDate(e.target.value)}/> */}

                <Button onClick={handleAddBB} variant="contained">לצימר ברמה</Button>
                </div>
            </Box>
            
            {post ? Swal.fire({
                icon: "success",
                title: "הצימר נוסף בהצלחה",
                text: "קוד אישור 1458796",

            }) : <></>}
        </>
    )
}
export default AddBB