import React from 'react';
import { Link } from 'react-router-dom';
import './SuggestedVideo.css';


const suggestedVideos = [
  {
    id: '1',
    title: 'Building a YouTube Clone with React',
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    channelName: 'Web Developer',
    views: '1.2M',
    timestamp: '2 weeks ago',
  },
  {
    id: '2',
    title: 'Learn JavaScript in 1 Hour',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
    channelName: 'Programming with John',
    views: '5.7M',
    timestamp: '1 year ago',
  },
  {
    id: '3',
    title: 'MERN Stack Tutorial | Building a Social Media App',
    thumbnail: 'https://i.ytimg.com/vi/VsUzmlZfYNg/maxresdefault.jpg',
    channelName: 'Code with Maya',
    views: '820K',
    timestamp: '3 months ago',
  },
  {
    id: '4',
    title: 'React Hooks Crash Course',
    thumbnail: 'https://i.ytimg.com/vi/TNhaISOUy6Q/maxresdefault.jpg',
    channelName: 'React Mastery',
    views: '2.3M',
    timestamp: '7 months ago',
  }
];

const SuggestedVideo = ({ currentVideoId }) => {
  const filteredVideos = currentVideoId 
    ? suggestedVideos.filter(video => video.id !== currentVideoId)
    : suggestedVideos;
  
  return (
    <div className="suggested-videos">
      <h3 className="suggested-title">Suggested videos</h3>
      
      <div className="suggestions-list">
        {filteredVideos.map((video) => (
          <Link 
            to={`/viewing_video/${video.id}`} 
            key={video.id}
            className="suggested-video"
          >
            <div className="suggestion-thumbnail">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';
                }}
              />
            </div>
            
            <div className="suggestion-info">
              <h4 className="suggestion-title">{video.title}</h4>
              <p className="suggestion-channel">{video.channelName}</p>
              <div className="suggestion-metadata">
                <span>{video.views} views</span>
                <span>•</span>
                <span>{video.timestamp}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedVideo; 