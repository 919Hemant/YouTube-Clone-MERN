import React, { useState } from 'react';
import './CategoryWiseFilter.css';

// Genre collection matching the categories in VideoCard component
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

function CategoryWiseFilter({ SetDetails }) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Import this from the VideoCard component - just for demonstration
  const videos = [
    {
      id: '1',
      title: 'Building a YouTube Clone with React',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      channelName: 'Web Developer',
      channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj',
      views: '1.2M',
      timestamp: '2 weeks ago',
      duration: '10:15',
      category: 'Coding'
    },
    // ... more videos
  ];

  function handleClick(e) {
    const selectedGenre = e.target.innerText;
    setActiveCategory(selectedGenre);
    
    if (selectedGenre.toLowerCase() === 'all') {
      SetDetails(videos);
      return;
    }
    
    // Filter videos by selected category
    const filteredVideos = videos.filter((video) => {
      return video.category.toLowerCase() === selectedGenre.toLowerCase();
    });
    
    if (filteredVideos.length > 0) {
      SetDetails(filteredVideos);
    }
  }

  return (
    <>
      {genres.map((genre, index) => (
        <button 
          key={index} 
          onClick={(e) => handleClick(e)}
          className={`text-white py-1 px-5 text-[0.9rem] font-semibold hover:bg-[#464644] rounded-md mr-3 ${activeCategory === genre ? 'bg-white text-black' : 'bg-[#212121]'}`}
        >
          {genre}
        </button>
      ))}
    </>
  );
}

export default CategoryWiseFilter; 