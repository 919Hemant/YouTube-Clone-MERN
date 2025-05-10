import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css'; // Reusing the same styles

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
 
    
    setError('');
    
    setTimeout(() => {
      console.log('User registered:', { fullName, email, password });
      
      navigate('/SignIn');
    }, 1000);
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-box">
        <div className="sign-in-header">
          <img 
            src="/youtube-logo.png" 
            alt="YouTube" 
            className="logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://www.youtube.com/img/desktop/yt_1200.png';
            }}
          />
          <h1>Create your Account</h1>
          <p>to continue to YouTube</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div className="form-group">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-actions" style={{ marginTop: '24px' }}>
            <Link to="/SignIn" className="create-account">
              Sign in instead
            </Link>
            
            <button type="submit" className="sign-in-button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp; 