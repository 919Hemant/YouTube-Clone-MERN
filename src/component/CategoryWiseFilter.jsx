import React, { useState, useEffect } from 'react';
import './CategoryWiseFilter.css';



const genres = [
  'All',
  'Music',
  'Gaming',
  'Coding',
  'Education',
  'Podcasts',
  'Live',
  'Sports',
  'News',
  'Entertainment',
  'Technology'
];

const CategoryWiseFilter = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };
  
  return (
    <div className="category-filter">
      <div className="filter-container">
        {genres.map((category, index) => (
          <button
            key={index}
            className={`filter-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryWiseFilter; 