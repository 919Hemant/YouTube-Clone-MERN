import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ViewVideo.css';
import SideBar from './SideBar';
import CommentSection from './CommentSection';
import SuggestedVideo from './SuggestedVideo';
import ShimmerViewVideo from './ShimmerViewVideo';

const videos = [
  {
    id: '1',
    title: 'Building a YouTube Clone with React',
    description: 'Learn how to build a YouTube clone using React, React Router, and more modern web technologies. This tutorial will guide you through each step of the process.',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    channelName: 'Web Developer',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj',
    subscribers: '1.2M',
    views: '1.2M',
    likes: '45K',
    timestamp: '2 weeks ago',
  },
  {
    id: '2',
    title: 'Learn JavaScript in 1 Hour',
    description: 'This tutorial will cover all the basics of JavaScript you need to know to get started with web development.',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
    channelName: 'Programming with John',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZkw-0AtCp3jlvHfvFzGGcBTOOay6dP5KeXnFGE=s48-c-k-c0x00ffffff-no-rj',
    subscribers: '5.7M',
    views: '5.7M',
    likes: '120K',
    timestamp: '1 year ago',
  },
  {
    id: '3',
    title: 'MERN Stack Tutorial | Building a Social Media App',
    description: 'In this complete MERN stack tutorial, we will build a social media application from scratch using MongoDB, Express, React, and Node.js.',
    thumbnail: 'https://i.ytimg.com/vi/VsUzmlZfYNg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/VsUzmlZfYNg',
    channelName: 'Code with Maya',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKYGoyCL0me2fNLpABbmCQOnXsPu-F9NxFJ1Yf2l=s48-c-k-c0x00ffffff-no-rj',
    subscribers: '820K',
    views: '820K',
    likes: '32K',
    timestamp: '3 months ago',
  },
  {
    id: '4',
    title: 'React Hooks Crash Course',
    description: 'A comprehensive guide to React Hooks. Learn useState, useEffect, useContext, and custom hooks to level up your React skills.',
    thumbnail: 'https://i.ytimg.com/vi/TNhaISOUy6Q/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/TNhaISOUy6Q',
    channelName: 'React Mastery',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKYb3JgDTUH9uBf_4_VHYucfBgjWDYbsUxnC2yZ5=s48-c-k-c0x00ffffff-no-rj',
    subscribers: '2.3M',
    views: '2.3M',
    likes: '78K',
    timestamp: '7 months ago',
  },
  {
    id: '5',
    title: 'How to Build a Website with HTML & CSS',
    description: 'Learn the fundamentals of HTML and CSS to create stunning responsive websites from scratch. Perfect for beginners!',
    thumbnail: 'https://i.ytimg.com/vi/G3e-cpL7ofc/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/G3e-cpL7ofc',
    channelName: 'Web Simplified',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZ96U-qlb_FBGf9ayy94mAzCPa8Y4EPiqCbRvJcQg=s48-c-k-c0x00ffffff-no-rj',
    subscribers: '3.8M',
    views: '3.8M',
    likes: '91K',
    timestamp: '5 months ago',
  },
  {
    id: '6',
    title: 'Node.js Express MongoDB | REST API Tutorial',
    description: 'Build a complete REST API with Node.js, Express, and MongoDB. Learn how to structure your backend, handle requests, and connect to a database.',
    thumbnail: 'https://i.ytimg.com/vi/fgTGADljAeg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/fgTGADljAeg',
    channelName: 'Backend Developers',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKbdBeqCLdWZotZh9gVYjIbpqN8iQHzTmWU6IJGz=s48-c-k-c0x00ffffff-no-rj',
    subscribers: '1.5M',
    views: '1.5M',
    likes: '50K',
    timestamp: '4 months ago',
  },
];


const suggestedVideos = videos.slice(0, 4);

const ViewVideo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const foundVideo = videos.find(v => v.id === id) || videos[0];
      setVideo(foundVideo);
      setLoading(false);
    }, 1000);
  }, [id]);
  
  if (loading) {
    return <ShimmerViewVideo />;
  }
  
  return (
    <div className="view-video-container">
      <div className="video-player-section">
        <div className="video-player-wrapper">
          <iframe 
            className="video-player"
            src={video.videoUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="video-info-section">
          <h1 className="video-title">{video.title}</h1>
          
          <div className="video-stats">
            <div className="views-date">
              <span>{video.views} views</span>
              <span>•</span>
              <span>{video.timestamp}</span>
            </div>
            
            <div className="video-actions">
              <button className="action-button">
                <i className="fa-solid fa-thumbs-up"></i>
                <span>{video.likes}</span>
              </button>
              <button className="action-button">
                <i className="fa-solid fa-thumbs-down"></i>
              </button>
              <button className="action-button">
                <i className="fa-solid fa-share"></i>
                <span>Share</span>
              </button>
              <button className="action-button">
                <i className="fa-solid fa-download"></i>
                <span>Download</span>
              </button>
              <button className="action-button">
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
          
          <div className="channel-info">
            <div className="channel-header">
              <Link to="/channelDetails" className="channel-avatar">
                <img 
                  src={video.channelAvatar} 
                  alt={video.channelName}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';
                  }}
                />
              </Link>
              
              <div className="channel-details">
                <Link to="/channelDetails" className="channel-name">{video.channelName}</Link>
                <div className="subscribers">{video.subscribers} subscribers</div>
              </div>
              
              <button className="subscribe-button">Subscribe</button>
            </div>
            
            <div className="video-description">
              <p>{video.description}</p>
              <button className="show-more">Show more</button>
            </div>
          </div>
        </div>
        
        <CommentSection />
      </div>
      
      <SuggestedVideo currentVideoId={id} />
    </div>
  );
};

export default ViewVideo; 