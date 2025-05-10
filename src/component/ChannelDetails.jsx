import React from 'react';
import { Link } from 'react-router-dom';
import './ChannelDetails.css';


const channelData = {
  name: 'Web Developer',
  banner: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  avatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s176-c-k-c0x00ffffff-no-rj',
  subscribers: '1.2M',
  totalVideos: '187',
  description: 'Welcome to my channel! I create tutorials about web development, JavaScript, React, and more. Subscribe for weekly content about programming and modern web technologies.',
  joined: 'Jan 15, 2018',
  totalViews: '12M',
  location: 'San Francisco, CA',
  links: [
    { name: 'Website', url: 'https://webdeveloper.com' },
    { name: 'Twitter', url: 'https://twitter.com/webdev' },
    { name: 'GitHub', url: 'https://github.com/webdev' }
  ]
};


const videos = [
  {
    id: '1',
    title: 'Building a YouTube Clone with React',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    views: '1.2M',
    timestamp: '2 weeks ago',
    duration: '10:15',
  },
  {
    id: '2',
    title: 'Learn JavaScript in 1 Hour',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
    views: '5.7M',
    timestamp: '1 year ago',
    duration: '1:01:25',
  },
  {
    id: '3',
    title: 'MERN Stack Tutorial | Building a Social Media App',
    thumbnail: 'https://i.ytimg.com/vi/VsUzmlZfYNg/maxresdefault.jpg',
    views: '820K',
    timestamp: '3 months ago',
    duration: '45:12',
  },
  {
    id: '4',
    title: 'React Hooks Crash Course',
    thumbnail: 'https://i.ytimg.com/vi/TNhaISOUy6Q/maxresdefault.jpg',
    views: '2.3M',
    timestamp: '7 months ago',
    duration: '22:45',
  },
  {
    id: '5',
    title: 'How to Build a Website with HTML & CSS',
    thumbnail: 'https://i.ytimg.com/vi/G3e-cpL7ofc/maxresdefault.jpg',
    views: '3.8M',
    timestamp: '5 months ago',
    duration: '31:08',
  },
  {
    id: '6',
    title: 'Node.js Express MongoDB | REST API Tutorial',
    thumbnail: 'https://i.ytimg.com/vi/fgTGADljAeg/maxresdefault.jpg',
    views: '1.5M',
    timestamp: '4 months ago',
    duration: '52:35',
  },
];

const ChannelDetails = () => {
  return (
    <div className="channel-details-container">
      <div className="channel-banner">
        <img 
          src={channelData.banner} 
          alt={`${channelData.name} banner`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';
          }}
        />
      </div>
      
      <div className="channel-info-section">
        <div className="channel-header">
          <div className="channel-avatar">
            <img 
              src={channelData.avatar} 
              alt={channelData.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';
              }}
            />
          </div>
          
          <div className="channel-metadata">
            <h1>{channelData.name}</h1>
            <div className="channel-stats">
              <span>{channelData.subscribers} subscribers</span>
              <span>{channelData.totalVideos} videos</span>
            </div>
            <div className="channel-description">
              <p>{channelData.description}</p>
              <button className="show-more">Show more</button>
            </div>
          </div>
          
          <button className="subscribe-button">Subscribe</button>
        </div>
        
        <div className="channel-tabs">
          <button className="tab-button active">Videos</button>
          <button className="tab-button">Playlists</button>
          <button className="tab-button">Community</button>
          <button className="tab-button">About</button>
        </div>
      </div>
      
      <div className="channel-content">
        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="channel-video-card">
              <Link to={`/viewing_video/${video.id}`} className="thumbnail-container">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="video-thumbnail" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';
                  }}
                />
                <span className="video-duration">{video.duration}</span>
              </Link>
              
              <div className="video-details">
                <Link to={`/viewing_video/${video.id}`} className="video-title">{video.title}</Link>
                <div className="video-metadata">
                  <span>{video.views} views</span>
                  <span>•</span>
                  <span>{video.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelDetails; 