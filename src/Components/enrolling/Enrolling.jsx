import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import RentingStor from '../../stores/renting'
import { observer } from 'mobx-react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Enrolling=(observer(({ id })=> {

  const [invitingName, setInvitingName] = useState('');
  const [invitingPhone, setinvitingPhone] = useState('');
  const [invitingMail, setInvitingMail] = useState('');
  const [invitingDate, setInvitingDate] = useState('');
  const [open, setOpen] = React.useState(false);
  // const [post,setPost]=useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDateChange = (date) => {
    setInvitingDate(date.format('YYYY-MM-DD'));
    // 'YYYY-MM-DDTHH:mm:ss.000Z'
    console.log(invitingDate)
    console.log(invitingName)
    
  };


  const handleAddOrder = () => {
    RentingStor.postRenting({ serviceType: id, clientName: invitingName, clientPhone: invitingPhone, clientEmail: invitingMail, dateTime: invitingDate })
    setInvitingName('');
    setinvitingPhone('');
    setInvitingMail('');
    setInvitingDate('');
  }

  return (

    <div>
      <Button onClick={handleOpen}>להזמנת מקום</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '90%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              disabled
              id="outlined-disabled"
              label="קוד צימר"
              defaultValue={id}
            />
            <TextField id="filled-basic" value={invitingName} label="שם" type='text' onChange={(e) => setInvitingName(e.target.value)} />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  'DatePicker',
                  'MobileDatePicker',
                  'DesktopDatePicker',
                  'StaticDatePicker',
                ]} style={{ left: '12%' }}
              >
                <DemoItem style={{ left: '12%' }}>
                  <DatePicker value={invitingDate.DatePicker} onChange={handleDateChange}
                    disablePast
                    required />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>

            <TextField id="filled-basic" value={invitingPhone} label="טלפון" type='text' onChange={(e) => setinvitingPhone(e.target.value)} />
            <TextField id="filled-basic" value={invitingMail} label="מייל" type='mail' onChange={(e) => setInvitingMail(e.target.value)} />

            <Button onClick={handleAddOrder} variant="contained">לצימר ברמה</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}))

export default Enrolling
