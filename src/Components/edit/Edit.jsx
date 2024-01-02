import * as React from 'react';
import { useState } from 'react';
import { observer } from "mobx-react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import BBDetailsStor from '../../stores/BBDetailsStor'
import logo2 from '../../../src/assets/images/logo2.png'
import logo3 from '../../../src/assets/images/logo3.png'
import logo4 from '../../../src/assets/images/logo4.png'
import logo5 from '../../../src/assets/images/logo5.png'
import logo6 from '../../../src/assets/images/logo6.png'
import logo1 from '../../../src/assets/images/topComplet.png'
import '../edit/Edit.css'
const Edit = (observer(() => {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [owner, setOwner] = useState('');
  const [logo, setLogo] = useState('');
  const [description, setDescription] = useState('');


  const hanlesChanges = () => {
    BBDetailsStor.postBusinessDetails(
      {
        id: id, name: name, owner: owner, logo: logo, description: description, mail: mail,
      }
    );
    BBDetailsStor.setIsBussinesDetailsPost(true);
    BBDetailsStor.showingBusinessDetails();
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
          <TextField required
            defaultValue="123" value={id} onChange={(e) => setId(e.target.value)} label="מספר סידורי" />
          <TextField required defaultValue="צימר ברמה" value={name} onChange={(e) => setName(e.target.value)} label="שם" />
          <TextField required defaultValue="Leha ner - שיווק והפצה" value={owner} onChange={(e) => setOwner(e.target.value)} label="שם משווק" />
          <TextField value={logo} onChange={(e) => setLogo(e.target.value)} label="לוגו" />
          <TextField required defaultValue=" zimerBerama@gmail.com - לרישום צימר" value={mail} onChange={(e) => setMail(e.target.value)} label="מייל" />
          <TextField required id="outlined-required" defaultValue="אתר הנופש החרדי הגדול" value={description} onChange={(e) => setDescription(e.target.value)} label="תיאור האתר" />
          <Button onClick={hanlesChanges}>לשמירת השינויים</Button>
        </div>
      </Box>

    </>
  )
}))
export default Edit