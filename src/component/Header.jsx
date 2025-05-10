import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'


export const SearchContext = React.createContext({
  searchQuery: '',
  setSearchQuery: () => {},
  isSearching: false,
  setIsSearching: () => {}
});

const Header = () => {
  const [inputQuery, setInputQuery] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false) 
  const navigate = useNavigate()
  const { setSearchQuery, setIsSearching } = useContext(SearchContext)

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchQuery(inputQuery) 
    setIsSearching(true) 
    
    // Navigate to home 
    if (window.location.pathname !== '/') {
      navigate('/')
    }
  }

  return (
    <header className="header">
      <div className="header-left">
        <div className="menu-icon">
          <i className="fa-solid fa-bars"></i>
        </div>
        <Link to="/" className="logo">
          <img 
            src="https://www.youtube.com/img/desktop/yt_1200.png" 
            alt="YouTube" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png';
            }}
          />
        </Link>
      </div>

      <div className="header-center">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <i className="fa-solid fa-search"></i>
          </button>
        </form>
        <div className="mic-icon">
          <i className="fa-solid fa-microphone"></i>
        </div>
      </div>

      <div className="header-right">
        <div className="header-icon">
          <i className="fa-solid fa-video"></i>
        </div>
        <div className="header-icon">
          <i className="fa-solid fa-bell"></i>
        </div>
        {isLoggedIn ? (
          <div className="user-profile">
            <img 
              src="https://randomuser.me/api/portraits/lego/1.jpg" 
              alt="User" 
              className="profile-image"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'
              }}
            />
          </div>
        ) : (
          <Link to="/SignIn" className="sign-in">
            Sign In
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header 