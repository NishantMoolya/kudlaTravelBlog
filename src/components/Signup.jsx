import React, { useEffect,useState } from 'react'
import { Box, Button, IconButton, InputAdornment, OutlinedInput, Paper, Stack, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'

const Signup = () => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.user.auth);
  useEffect(() => {
    if(auth) return navigate(-1);
  },[auth])

  const [pass, setPass] = useState(true);

  const baseURL = process.env.REACT_APP_BASE_URL;
  const handleSignup = async (e) => {
    const { name,email,password } = formData;
    try {
      e.preventDefault();
      const data = await fetch(`${baseURL}/user/signup`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name:name.trim(),email:email.trim(),password:password.trim()})   
      });
      const response = await data.json();
      //console.log(response);
      if(data.status === 200){
        alert("User already registered");
        return navigate('/login');
      }else if(data.status === 201){
        alert("User account created");
        return navigate('/login');
      }else{
        throw new Error("Server error");
      }
    } catch (err) {
      console.log(`En error occurred in registering user:${err}`);
      alert("An occurred in server");
    }
    setFormData(initialData);
  }

  let initialData = {
    name:"",
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
  document.title = "Signup-Join the blogging community";
  return (
  <motion.div variants={route} initial="start" animate="end" exit="exit">
    {!auth && <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
        <Paper sx={{p:2,maxWidth:"300px"}}>
          <form method='POST' onSubmit={handleSignup}>
        <Stack spacing={2}>
           <Typography variant='h6' textAlign={'center'}>Signup</Typography>
           <TextField variant='outlined'  autoComplete="true" placeholder='Username' value={formData.name} name='name' onChange={handleUserInput} required />
           <TextField variant='outlined' placeholder='Email' autoComplete="true" value={formData.email} name='email' onChange={handleUserInput} required />
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
            } placeholder='Password' value={formData.password} name='password' onChange={handleUserInput} required />
           <Button variant='contained' type='submit'>Signup</Button>
           <Typography variant='body2' textAlign={'center'}>Already have an account?<NavLink to='/login'>Login</NavLink></Typography>
         </Stack>
         </form>
         </Paper>
    </Box>}
  </motion.div>

  )
}

export default Signup