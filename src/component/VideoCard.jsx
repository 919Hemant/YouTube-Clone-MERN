import React, { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import ShowCard from "./ShowCard";
import './VideoCard.css';
import CategoryWiseFilter from "./CategoryWiseFilter";
import Shimmer from './Shimmer.jsx';

// This is a placeholder for dummy data. Later you can replace with API calls.
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
  {
    id: '2',
    title: 'Learn JavaScript in 1 Hour',
    thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
    channelName: 'Programming with John',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZkw-0AtCp3jlvHfvFzGGcBTOOay6dP5KeXnFGE=s48-c-k-c0x00ffffff-no-rj',
    views: '5.7M',
    timestamp: '1 year ago',
    duration: '1:01:25',
    category: 'Education'
  },
  {
    id: '3',
    title: 'MERN Stack Tutorial | Building a Social Media App',
    thumbnail: 'https://i.ytimg.com/vi/VsUzmlZfYNg/maxresdefault.jpg',
    channelName: 'Code with Maya',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKYGoyCL0me2fNLpABbmCQOnXsPu-F9NxFJ1Yf2l=s48-c-k-c0x00ffffff-no-rj',
    views: '820K',
    timestamp: '3 months ago',
    duration: '45:12',
    category: 'Coding'
  },
  {
    id: '4',
    title: 'React Hooks Crash Course',
    thumbnail: 'https://i.ytimg.com/vi/TNhaISOUy6Q/maxresdefault.jpg',
    channelName: 'React Mastery',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKYb3JgDTUH9uBf_4_VHYucfBgjWDYbsUxnC2yZ5=s48-c-k-c0x00ffffff-no-rj',
    views: '2.3M',
    timestamp: '7 months ago',
    duration: '22:45',
    category: 'Technology'
  },
  {
    id: '5',
    title: 'How to Build a Website with HTML & CSS',
    thumbnail: 'https://i.ytimg.com/vi/G3e-cpL7ofc/maxresdefault.jpg',
    channelName: 'Web Simplified',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZ96U-qlb_FBGf9ayy94mAzCPa8Y4EPiqCbRvJcQg=s48-c-k-c0x00ffffff-no-rj',
    views: '3.8M',
    timestamp: '5 months ago',
    duration: '31:08',
    category: 'Education'
  },
  {
    id: '6',
    title: 'Node.js Express MongoDB | REST API Tutorial',
    thumbnail: 'https://i.ytimg.com/vi/fgTGADljAeg/maxresdefault.jpg',
    channelName: 'Backend Developers',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKbdBeqCLdWZotZh9gVYjIbpqN8iQHzTmWU6IJGz=s48-c-k-c0x00ffffff-no-rj',
    views: '1.5M',
    timestamp: '4 months ago',
    duration: '52:35',
    category: 'Technology'
  },
  {
    id: '7',
    title: 'Top 10 Music Hits of 2023',
    thumbnail: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg',
    channelName: 'Music Charts',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKYGoyCL0me2fNLpABbmCQOnXsPu-F9NxFJ1Yf2l=s48-c-k-c0x00ffffff-no-rj',
    views: '8.3M',
    timestamp: '2 months ago',
    duration: '15:30',
    category: 'Music'
  },
  {
    id: '8',
    title: 'Best Gaming Moments of 2023',
    thumbnail: 'https://i.ytimg.com/vi/dhnLqwd2czE/maxresdefault.jpg',
    channelName: 'Gaming Central',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZkw-0AtCp3jlvHfvFzGGcBTOOay6dP5KeXnFGE=s48-c-k-c0x00ffffff-no-rj',
    views: '4.1M',
    timestamp: '3 weeks ago',
    duration: '25:12',
    category: 'Gaming'
  },
  {
    id: '9',
    title: 'Sports Highlights: World Cup Final',
    thumbnail: 'https://i.ytimg.com/vi/sFGQlG-EvGQ/maxresdefault.jpg',
    channelName: 'Sports Today',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKbdBeqCLdWZotZh9gVYjIbpqN8iQHzTmWU6IJGz=s48-c-k-c0x00ffffff-no-rj',
    views: '15.7M',
    timestamp: '1 month ago',
    duration: '12:45',
    category: 'Sports'
  },
  {
    id: '10',
    title: 'Live Stream: Concert in Central Park',
    thumbnail: 'https://i.ytimg.com/vi/FiD8oTTRUjk/maxresdefault.jpg',
    channelName: 'Live Events',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKYGoyCL0me2fNLpABbmCQOnXsPu-F9NxFJ1Yf2l=s48-c-k-c0x00ffffff-no-rj',
    views: '327K',
    timestamp: '1 day ago',
    duration: '2:15:30',
    category: 'Live'
  },
  {
    id: '11',
    title: 'Weekly News Roundup',
    thumbnail: 'https://i.ytimg.com/vi/9Auq9mYxFEE/maxresdefault.jpg',
    channelName: 'News Network',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKbdBeqCLdWZotZh9gVYjIbpqN8iQHzTmWU6IJGz=s48-c-k-c0x00ffffff-no-rj',
    views: '789K',
    timestamp: '5 days ago',
    duration: '28:15',
    category: 'News'
  },
  {
    id: '12',
    title: 'Tech Podcast: Future of AI',
    thumbnail: 'https://i.ytimg.com/vi/f_YnD7bXrds/maxresdefault.jpg',
    channelName: 'Tech Talks',
    channelAvatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj',
    views: '1.1M',
    timestamp: '2 weeks ago',
    duration: '45:22',
    category: 'Podcasts'
  }
];

function VideoCard() {
  // Get context from parent components
  const context = useOutletContext();
  const flag = context ? context.flag : true;
  const titleName = context ? context.titleName : '';
  
  const [videoDetails, setVideoDetails] = useState([]);
  const [dummyVideoDetails, setDummyVideoDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial load of dummy data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setVideoDetails(videos);
      setDummyVideoDetails(videos);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter videos based on search query
  useEffect(() => {
    if (titleName) {
      const filteredArray = dummyVideoDetails.filter((video) =>
        video.title.toLowerCase().includes(titleName.toLowerCase()) ||
        video.channelName.toLowerCase().includes(titleName.toLowerCase())
      );
      setVideoDetails(filteredArray);
    } else {
      setVideoDetails(dummyVideoDetails);
    }
  }, [titleName, dummyVideoDetails]);

  return (
    <>
      <div id='button-category' className="fixed p-6 top-[3rem] w-[100%] bg-[#0f0f0f] z-20 left-[10.9rem] h-[4.5rem] text-white">
        <CategoryWiseFilter SetDetails={setVideoDetails} />
      </div>
      
      {loading ? (
        <Shimmer />
      ) : (
        <div id={`${flag ? 'grid' : 'grid-width'}`}>
          {videoDetails.map((video) => (
            <ShowCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </>
  );
}

export default VideoCard; 