import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-sections">
          {/* Main Section */}
          <li className="sidebar-section">
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="sidebar-text">Home</span>
            </Link>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-fire"></i>
              </span>
              <span className="sidebar-text">Trending</span>
            </Link>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-play-circle"></i>
              </span>
              <span className="sidebar-text">Subscriptions</span>
            </Link>
          </li>

          {/* Library Section */}
          <li className="sidebar-section">
            <div className="sidebar-heading">LIBRARY</div>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-photo-video"></i>
              </span>
              <span className="sidebar-text">Library</span>
            </Link>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-history"></i>
              </span>
              <span className="sidebar-text">History</span>
            </Link>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-video"></i>
              </span>
              <span className="sidebar-text">Your Videos</span>
            </Link>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-clock"></i>
              </span>
              <span className="sidebar-text">Watch Later</span>
            </Link>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-thumbs-up"></i>
              </span>
              <span className="sidebar-text">Liked Videos</span>
            </Link>
          </li>

          {/* Explore Section */}
          <li className="sidebar-section">
            <div className="sidebar-heading">EXPLORE</div>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-music"></i>
              </span>
              <span className="sidebar-text">Music</span>
            </Link>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-gamepad"></i>
              </span>
              <span className="sidebar-text">Gaming</span>
            </Link>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-futbol"></i>
              </span>
              <span className="sidebar-text">Sports</span>
            </Link>
            <Link to="/" className="sidebar-item">
              <span className="sidebar-icon">
                <i className="fas fa-graduation-cap"></i>
              </span>
              <span className="sidebar-text">Learning</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-footer-links">
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Press</a>
          <a href="#" className="footer-link">Copyright</a>
        </div>
        <div className="sidebar-footer-links">
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Privacy</a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar; 