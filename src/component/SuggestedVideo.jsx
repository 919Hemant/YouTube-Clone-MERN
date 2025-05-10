import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import './SuggestedVideo.css';

// Using the same dummy data format from VideoCard
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
  }
];

function SuggestedVideo() {
    const [videoDetails, setVideoDetails] = useState([]);
    
    useEffect(() => {
        // Simulate API fetch with local data
        setTimeout(() => {
            setVideoDetails(videos);
        }, 1000);
    }, []);
    
    return (
        <>
            {
                videoDetails.map((video) => {
                    return (
                        <div key={video.id} id='suggested-video-id' className="text-white grid border-b border-[#2322224c]">
                            <Link to={`/viewing_video/${video.id}`}>
                                <div id='bottom-margin' className="h-[7.3rem] mb-4">
                                    <img 
                                        id='suggested-img' 
                                        src={video.thumbnail} 
                                        alt={video.title} 
                                        className="h-[100%] w-[220px] rounded-lg"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg';
                                        }}
                                    />
                                </div>
                            </Link>
                            <div className="text-[0.5rem]">
                                <div className="mt-1 ml-1 pr-1">
                                    <h1 className="text-[0.7rem] font-bold">{video.title}</h1>
                                </div>
                                <h1 className="mt-4 ml-2 text-[#d6d1d1] font-[500] text-[0.8rem]">{video.channelName}</h1>
                                <h1 className="mt-[0.1rem] ml-2 text-[#d6d1d1] font-[500] text-[0.7rem]">
                                    <span className="mr-3">{video.views}</span>
                                    <span className="ml-[-6px]"><CircleIcon sx={{ fontSize: '0.4rem' }} /></span>
                                    <span>{video.timestamp}</span>
                                </h1>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SuggestedVideo; 