import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import './SignIn.css';
import YoutubeIcon from '../assets/Youtube_Icon.png';

function SignIn() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  });
  const [msg, setMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  
  function handleEmailChange(e) {
    setUserDetails({...userDetails, email: e.target.value});
    setErrMsg('');
  }
  
  function handlePassChange(e) {
    setUserDetails({...userDetails, password: e.target.value});
    setErrMsg('');
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    if (!userDetails.email || !userDetails.password) {
      setErrMsg("All fields are required!");
      return;
    }

    // Simulated login - in a real app this would be an API call
    if (userDetails.email === 'user@example.com' && userDetails.password === 'password') {
      // Successful login
      localStorage.setItem('token', 'sample-token-12345');
      localStorage.setItem('Name', 'Demo User');
      localStorage.setItem('Email', userDetails.email);
      
      setMsg('Logged In Successfully');
      setErrMsg(''); // Clear any error message
      
      setTimeout(() => {
        navigate('/');  // Redirect to the homepage
      }, 900);
    } else {
      // Failed login
      setErrMsg("Invalid email or password");
      setMsg('');
    }

    // Reset form fields
    setUserDetails({
      email: '',
      password: ''
    });
  }
  
  return (
    <>
      <div id='outer-div' className="flex h-[80vh] w-[85%] mx-auto my-5 mt-[4rem] justify-center items-center text-white flex-col">
        <div id='inner-div' className="bg-[#212121] w-[50%] rounded-lg flex flex-col items-center">
          <div className="flex mt-1 items-center">
            <img src={YoutubeIcon} width='60px' height='100px' alt="" />
            <h1 className="font-bold">YouTube Login</h1>
            <Link to='/'><span className="mx-5 text-[#ff0000]"><HomeIcon/></span></Link>
          </div>
          
          <form action="" onSubmit={(e) => {handleSubmit(e)}} className="w-[100%] flex flex-col items-center">
            {errMsg && <div className="text-[#ff0000]">{errMsg}</div>}
            {msg && <div className="text-green-600">{msg}</div>}
            
            <div className="my-4 input-box w-[65%]">
              <input 
                className="font-bold border-[#ff000000] text-black outline-none focus:outline-1 focus:outline-[#ff0000] w-[100%] py-[0.4rem] px-4 placeholder-[#212121] placeholder:font-semibold" 
                type="email" 
                id="mail-box" 
                placeholder="Enter Mail" 
                value={userDetails.email} 
                onChange={(e) => {handleEmailChange(e)}} 
              />
            </div>
            
            <div className="my-4 input-box w-[65%]">
              <input 
                className="font-bold placeholder-[#212121] placeholder:font-semibold border-[#ff000000] text-black outline-none focus:outline-1 focus:outline-[#ff0000] w-[100%] py-[0.4rem] px-4"
                type="password" 
                id="password-box" 
                placeholder="Enter Password" 
                value={userDetails.password} 
                onChange={(e) => {handlePassChange(e)}} 
              />
            </div>
            
            <div className="my-4 input-box w-[65%] bg-[#ff0000] text-center">
              <button className="w-[100%] py-[0.4rem] hover:font-bold px-4 hover:bg-[#ef3333]">Submit</button>
            </div>
          </form>
          
          <div id='text' className='mb-11'>
            <span>Don't have an account?</span> <Link to='/SignUp'><button className="hover:text-[#ef3333] hover:underline text-[#ff0000] font-bold">Sign Up here</button></Link> 
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn; 