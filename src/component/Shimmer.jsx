import React from 'react';
import './Shimmer.css';

const Shimmer = () => {
 
  const shimmerCards = Array(12).fill(null);
  
  return (
    <div className="shimmer-container">
      {shimmerCards.map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-thumbnail"></div>
          <div className="shimmer-details">
            <div className="shimmer-avatar"></div>
            <div className="shimmer-info">
              <div className="shimmer-title"></div>
              <div className="shimmer-channel"></div>
              <div className="shimmer-metadata"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer; 