import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import './SignIn.css';
import YoutubeIcon from '../assets/Youtube_Icon.png';

function SignUp() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [msg, setMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');

  function handleNameChange(e) {
    setUserDetails({...userDetails, name: e.target.value});
    setErrMsg('');
  }
  
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

    // Validate inputs
    if (!userDetails.name || !userDetails.email || !userDetails.password) {
      setErrMsg("All fields are required!");
      return;
    }

    // Email validation (simple check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userDetails.email)) {
      setErrMsg("Please enter a valid email address!");
      return;
    }

    // Password validation (simple check for minimum length)
    if (userDetails.password.length < 6) {
      setErrMsg("Password must be at least 6 characters long!");
      return;
    }

    // Simulated registration success
    setMsg('Registration is Successful');
    setErrMsg(''); // Clear any error message

    // Redirect to SignIn page after successful registration
    setTimeout(() => {
      navigate('/SignIn');
    }, 1000);

    // Clear the input fields after submission
    setUserDetails({
      name: '',
      email: '',
      password: ''
    });
  }

  return (
    <>
      <div id='outer-div' className="flex h-[80vh] w-[85%] mx-auto my-5 mt-[4rem] justify-center items-center text-white flex-col">
        <div id='inner-div' className="bg-[#212121] w-[60%] rounded-[0.8rem] flex flex-col items-center">
          <div className="flex items-center">
            <img src={YoutubeIcon} width='60px' height='100px' alt="" />
            <h1 className="font-bold">YouTube Sign Up</h1> 
            <Link to='/'><span className="mx-5 text-[#ff0000]"><HomeIcon/></span></Link>
          </div>
          
          <form onSubmit={(e) => {handleSubmit(e)}} action="" className="w-[100%] flex flex-col items-center">
            {errMsg && <div className="text-[#ff0000]">{errMsg}</div>}
            {msg && <div className="text-green-600">Registration Successful</div>}
            
            <div className="my-4 input-box w-[60%]">
              <input 
                className="placeholder-[#212121] font-bold placeholder:font-semibold border-[#ff000000] text-black outline-none focus:outline-1 focus:outline-[#ff0000] w-[100%] py-[0.4rem] px-4" 
                type="text" 
                value={userDetails.name} 
                id="name" 
                placeholder="Enter Name" 
                onChange={(e) => {handleNameChange(e)}} 
              />
            </div>
            
            <div className="my-4 input-box w-[60%]">
              <input 
                className="placeholder-[#212121] font-bold placeholder:font-semibold border-[#ff000000] text-black outline-none focus:outline-1 focus:outline-[#ff0000] w-[100%] py-[0.4rem] px-4" 
                type="email" 
                value={userDetails.email} 
                id="email" 
                placeholder="Enter Mail" 
                onChange={(e) => {handleEmailChange(e)}} 
              />
            </div>
            
            <div className="my-4 input-box w-[60%]">
              <input 
                className="placeholder-[#212121] font-bold placeholder:font-semibold border-[#ff000000] text-black outline-none focus:outline-1 focus:outline-[#ff0000] w-[100%] py-[0.4rem] px-4" 
                value={userDetails.password} 
                type="password" 
                id="password" 
                placeholder="Enter Password" 
                onChange={(e) => {handlePassChange(e)}} 
              />
            </div>
            
            <div className="my-4 input-box w-[60%] bg-[#ff0000] text-center">
              <button className="w-[100%] py-[0.4rem] hover:font-bold px-4 hover:bg-[#ef3333]">Submit</button>
            </div>
          </form>
          
          <div id='text' className="mb-8">
            <span>Already have an account?</span> <Link to='/SignIn'><button className="hover:text-[#ef3333] hover:underline text-[#ff0000] font-bold">SignIn/LogIn here</button></Link> 
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp; 