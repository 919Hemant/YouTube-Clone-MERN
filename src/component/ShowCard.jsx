import React from 'react';
import { Link } from 'react-router-dom';
import './ShowCard.css';

const ShowCard = ({ video }) => {
  return (
    <div className="show-card">
      <Link to={`/viewing_video/${video.id}`} className="thumbnail-link">
        <div className="thumbnail-container">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="thumbnail-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg';
            }}
          />
          <span className="duration">{video.duration}</span>
          <div className="hover-overlay">
            <div className="play-button">
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="card-info">
        <Link to="/channelDetails" className="channel-avatar">
          <img 
            src={video.channelAvatar} 
            alt={video.channelName}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj';
            }}
          />
        </Link>
        
        <div className="video-details">
          <Link to={`/viewing_video/${video.id}`} className="video-title">{video.title}</Link>
          <Link to="/channelDetails" className="channel-name">{video.channelName}</Link>
          <div className="video-stats">
            <span>{video.views} views</span>
            <span className="dot">•</span>
            <span>{video.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard; 