import React, { useEffect,useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { route } from '../animations/routeAnim'
import '../styles/login.css'

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
      alert("An error occurred in server");
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
  <motion.div className='login_frame' variants={route} initial="start" animate="end" exit="exit">
    {!auth &&
          <form className='login_form' method='POST' onSubmit={handleSignup}>
           <h4>Signup</h4>
           <div className='login_input_frames'>
           <i class="fa-solid fa-user"></i>
           <input className='login_inputs' autoComplete="true" placeholder='Username' value={formData.name} name='name' onChange={handleUserInput} required />
           </div>
           <div className='login_input_frames'>
           <i className="fa-solid fa-envelope"></i>
           <input className='login_inputs' placeholder='Email' autoComplete="true" value={formData.email} name='email' onChange={handleUserInput} required />
           </div>
           <div className='login_input_frames'>
           <i className="fa-solid fa-key"></i>
           <input className='login_inputs' type={pass?'password':'text'} autoComplete="true" placeholder='Password' value={formData.password} name='password' onChange={handleUserInput} required />
           {pass?<i className="fa-solid fa-eye-slash" onClick={() => setPass(false)}></i>:<i className="fa-solid fa-eye" onClick={() => setPass(true)}></i>}
           </div>
           <button className='login_btn' type='submit'>Signup</button>
           <p>Already have an account?<NavLink className="login_signup_link" to='/login'>Login</NavLink></p>
         </form>
         }
  </motion.div>

  )
}

export default Signup