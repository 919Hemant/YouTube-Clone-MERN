import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    


    setError('');
    
    setTimeout(() => {
      console.log('User logged in:', { email, password, rememberMe });
      
      navigate('/');
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
          <h1>Sign In</h1>
          <p>to continue to YouTube</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="sign-in-form">
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
          
          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>
          
          <div className="form-actions">
            <Link to="/SignUp" className="create-account">
              Create account
            </Link>
            
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn; 