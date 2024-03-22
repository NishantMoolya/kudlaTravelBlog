import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/reducers/userReducer'
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'
import '../styles/login.css'

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
    <motion.div className='login_frame' variants={route} initial="start" animate="end" exit="exit">
    {!auth &&
          <form className='login_form' method='POST' onSubmit={handleLogin}>
           <h4>Login</h4>
           <div className='login_input_frames'>
           <i className="fa-solid fa-envelope"></i>
           <input className='login_inputs' type='text' placeholder='Email' autoComplete="true" name='email' value={formData.email} onChange={handleUserInput} required />
           </div>
           <div className='login_input_frames'>
           <i className="fa-solid fa-key"></i>
           <input className='login_inputs' type={pass?'password':'text'} autoComplete="true" placeholder='Password' name='password' value={formData.password} onChange={handleUserInput} required />
           {pass?<i className="fa-solid fa-eye-slash" onClick={() => setPass(false)}></i>:<i className="fa-solid fa-eye" onClick={() => setPass(true)}></i>}
           </div>
           <button className='login_btn' type='submit' >Login</button>
           <p>Don't have an account?<NavLink className="login_signup_link" to='/signup'>Signup</NavLink></p>
         </form>}
  </motion.div>
  )
}

export default Login