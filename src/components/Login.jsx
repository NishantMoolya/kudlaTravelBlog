import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/reducers/userReducer'

const Login = () => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.user.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(auth) return navigate('/');
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
  const baseURL = process.env.REACT_APP_BASE_URL;
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email,password } = formData;
      const data = await fetch(`${baseURL}/user/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify({ email:email.trim(),password:password.trim() })
      });
      const res = await data.json();
      if(data.status === 200){
        dispatch(login());
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
  document.title = "Login-Welcome Back to Kudla";
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