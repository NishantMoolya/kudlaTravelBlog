import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = ({ setUserInfo,auth,userInfo }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(auth) return navigate(-1);
  },[auth])

  const [pass, setPass] = useState(true);

  let initialData = {
    email:"",
    password:""
  }

  const [formData, setFormData] = useState(initialData);

  const handleUserInput = (e) => {
    const { name,value } = e.target;
    setFormData({
      ...formData,[name]:value
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email,password } = formData;
      const data = await fetch('http://localhost:8000/v1/api/user/login',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify({ email:email.trim(),password:password.trim() })
      });
      const res = await data.json();
      console.log(res);
      if(data.status === 200){
        const { authenticate } = res;
        //setUserInfo(prev => ({...prev,auth:authenticate}));
        alert("Login successful");
        return navigate('/');
      }else if(data.status === 400){
        return alert("invalid credentials");
      }else if(data.status === 401){
        alert("Not a registered user");
        return navigate('/signup');
      }else{
        throw new Error("Server error");
      }
    } catch (err) {
      console.log(`An error occurred in login user:${err}`);
      alert("An occurred in server");
    }
    setFormData(initialData);
  }

  return (
    <>
    {!auth && <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <Paper sx={{p:2,maxWidth:"300px"}}>
          <form method='POST' onSubmit={handleLogin}>
        <Stack spacing={2}>
           <Typography variant='h6' textAlign={'center'}>Login</Typography>
           <TextField variant='outlined' placeholder='Email' autoComplete="true" name='email' value={formData.email} onChange={handleUserInput} required />
           <OutlinedInput variant='outlined' type={pass?'password':'text'} autoComplete="true"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setPass(!pass)}
                  edge="end"
                  >
                  {pass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            } placeholder='Password' name='password' value={formData.password} onChange={handleUserInput} required />
           <Button variant='contained' type='submit' >Login</Button>
           <Typography variant='body2' textAlign={'center'}>Don't have an account?<NavLink to='/signup'>Signup</NavLink></Typography>
         </Stack>
         </form>
         </Paper>
    </Box>}
  </>
  )
}

export default Login