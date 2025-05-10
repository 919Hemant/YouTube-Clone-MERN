import React from 'react';
import './ShimmerViewVideo.css';

const ShimmerViewVideo = () => {
  return (
    <div className="shimmer-view-container">
      <div className="shimmer-player-section">
        <div className="shimmer-player-wrapper"></div>
        
        <div className="shimmer-info-section">
          <div className="shimmer-video-title"></div>
          
          <div className="shimmer-video-stats">
            <div className="shimmer-views-date"></div>
            <div className="shimmer-actions"></div>
          </div>
          
          <div className="shimmer-channel-info">
            <div className="shimmer-channel-header">
              <div className="shimmer-channel-avatar"></div>
              <div className="shimmer-channel-details">
                <div className="shimmer-channel-name"></div>
                <div className="shimmer-subscribers"></div>
              </div>
              <div className="shimmer-subscribe-button"></div>
            </div>
            
            <div className="shimmer-video-description"></div>
          </div>
        </div>
        
        <div className="shimmer-comments">
          <div className="shimmer-comments-header"></div>
          <div className="shimmer-comment-form"></div>
          
          {Array(3).fill(null).map((_, index) => (
            <div key={index} className="shimmer-comment">
              <div className="shimmer-comment-avatar"></div>
              <div className="shimmer-comment-content">
                <div className="shimmer-comment-header"></div>
                <div className="shimmer-comment-text"></div>
                <div className="shimmer-comment-actions"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="shimmer-suggested">
        <div className="shimmer-suggested-title"></div>
        
        {Array(4).fill(null).map((_, index) => (
          <div key={index} className="shimmer-suggested-video">
            <div className="shimmer-suggestion-thumbnail"></div>
            <div className="shimmer-suggestion-info">
              <div className="shimmer-suggestion-title"></div>
              <div className="shimmer-suggestion-channel"></div>
              <div className="shimmer-suggestion-metadata"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerViewVideo; 