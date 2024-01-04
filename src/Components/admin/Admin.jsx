
import * as React from 'react';
import {  useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import BBDetailsStor from '../../stores/BBDetailsStor'
import BusinessDetails from '../businessDetails/BusinessDetails'
import './Admin.css'
import { observer } from 'mobx-react';
import Swal from 'sweetalert2'

import BusinessOwnerScreen from '../businessOwnerScreen/BusinessOwnerScreen';
const Admin = (observer(() => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const [isLogin, setIsLogin] = useState(false);
  const [wasThereAnErrorLoggingIn, setWasThereAnErrorLoggingIn] = useState(false)


  const handleLogin = async () => {

    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      body: JSON.stringify({
        name, password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText)
    if (response.status === 200) {
      // setIsLogin(true)
      BBDetailsStor.isLogin = true;
     
      localStorage.setItem("isLog", "true")
    

    }
    if (response.status === 401) {
      setName('')
      setPassword('')
      setWasThereAnErrorLoggingIn(true);
      Swal.fire({
        icon: "error",
        title: "...אופס",
        text: "שם המשתמש/הסיסמה אינו/ם נכונים, נסה שנית",
       
      });
    }
  }
  return (

    <>
       {BBDetailsStor.isLogin === null ? <>
        <BusinessDetails />
        {/* {wasThereAnErrorLoggingIn ? <div>שם המשתמש/הסיסמה אינו/ם נכונים, נסה שנית</div> : <div></div>} */}

        <div id="loginForm">

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >

            <div>
              <TextField id="outlined-basic" label="userName" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <TextField id="outlined-basic passord" label="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Stack direction="row" spacing={2}>
              <Button id="buttonLogin" onClick={handleLogin} >Login</Button>
            </Stack>

          </Box>

        </div>

      </> : <>
        <BusinessOwnerScreen />
      </>}
    </>
  )
}))

export default Admin