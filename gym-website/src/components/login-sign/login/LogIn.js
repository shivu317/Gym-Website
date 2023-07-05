import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SignUp from '../signUp/SignUp';

export default function LogIn(props) {
  const [account, setAccount] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn, setLogIn] = useState(true);

  const handleAccount = () => setAccount(!account);

  const handleLogIn = () => {
    const data = JSON.parse(localStorage.getItem('userData'));

    if (data && data.name === name && data.email === email && data.password === password) {
      // alert('Login Successfully');
      setLogIn(false);
     
    } else {
      alert('Invalid Details');
    }
  };

  return (
    <>
      {logIn ? (
        account ? (
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <h1>LogIn </h1>
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="text" onClick={handleAccount}>
              Don't Have Account
            </Button>
            <Button onClick={handleLogIn} variant="contained">
              Log In
            </Button>
            {/* <Button variant="text" onClick={props.close} >  
              Close
            </Button> */}
          </Box>
        ) : (
          <SignUp />
        )
      ) : (
        <> <h1 style={{color:'blue'}}>Login Successfully</h1>
        <Button variant="text" onClick={props.close} >  
        Close
      </Button></>
      )}
    </>
  );
}