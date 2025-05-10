import React, { useState, useEffect } from "react";
import Sidebar from "./SideBar";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import SuggestedVideo from "./SuggestedVideo";
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareIcon from '@mui/icons-material/Share';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import CommentSection from "./CommentSection";
import './ViewVideo.css';
import ShimmerView from "./ShimmerViewVideo";

// Same dummy data from VideoCard
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
    category: 'Coding',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
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
    category: 'Education',
    videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk'
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
    category: 'Coding',
    videoUrl: 'https://www.youtube.com/embed/VsUzmlZfYNg'
  }
];

function ViewVideo() {
   const [videoDetails, setVideoDetails] = useState([]);
   const [filteredData, setFilteredData] = useState(null);
   const [loading, setLoading] = useState(true);
   
   const context = useOutletContext();
   const flag = context ? context.flag : true;
   
   const videoId = useParams().id;
   
   // Load videos from dummy data
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setVideoDetails(videos);
         setLoading(false);
      }, 1000);
   }, []);
   
   // Filter to find the selected video
   useEffect(() => {
      if (videoDetails.length > 0) {
         const filtered = videoDetails.filter((item) => item.id === videoId);
         if (filtered.length > 0) {
            setFilteredData(filtered[0]);
         }
      }
   }, [videoDetails, videoId]);

   return (
      <>
         {flag ? '' : <Sidebar />}
         
         <div id='video_view' className="flex">
            {!loading && filteredData ? (
               <div id='video' className="ml-[2rem] mr-8 my-[4.8rem] w-[65%]">
                  <iframe 
                     id='height' 
                     src={`${filteredData.videoUrl}?autoplay=1&mute=0`}
                     className="rounded-[14px] w-[100%] h-[80vh]"
                     title={filteredData.title}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  ></iframe>
                  
                  <div className="pb-3 border-b border-gray-600">
                     <div className="mt-3">
                        <h1 id='head-des' className="text-[1.2rem] font-bold text-white">{filteredData.title}</h1>
                     </div>
                     
                     <div id='like-dislike' className="flex justify-between">
                        <div id='flex' className="flex items-center text-white">
                           <span>
                              <PersonIcon className='border border-red-100 rounded-full text-white' />
                           </span>
                           <div id='owner' className="flex flex-col mt-3 ml-2">
                              <h1 className="font-bold">{filteredData.channelName}</h1>
                              <h2 className="text-[0.7rem]">123K Subscribers</h2>
                           </div>
                           <button id='subscribe-btn' className="ml-8 bg-[#f1f1f1] text-[#000] font-bold px-6 py-2 rounded-[1.3rem] hover:bg-[#ff0000] hover:text-white">Subscribe</button>
                        </div>
                        
                        <div id='flex2' className="text-white flex justify-center items-center">
                           <button id='div-nesting-of-like_dislike' className="text-[0.8rem] bg-[#272727] py-[0.4rem] px-4 mr-2 rounded-[1.2rem]">
                              <span id='like-btn' className="px-1 hover:text-[#00ff00] border-r border-white">
                                 <ThumbUpIcon sx={{ fontSize: '1.5rem' }} />
                              </span>
                              <span id='dislike-btn' className="px-1 hover:text-[#ff0000]">
                                 <ThumbDownAltIcon sx={{ fontSize: '1.5rem' }} />
                              </span>
                           </button>
                           <button id='share-btn' className="px-3 text-[0.9rem] py-2 flex justify-center items-center bg-[#272727] hover:bg-[#ff0000] mr-2 rounded-[1.2rem]">
                              <ShareIcon /> <span className="font-bold">Share</span>
                           </button>
                           <button id='download-btn' className="px-3 text-[0.9rem] flex justify-center items-center py-2 bg-[#272727] hover:bg-[#ff0000] mr-2 rounded-[1.2rem]">
                              <span className="font-bold">
                                 <ArrowDownwardIcon /> Download
                              </span>
                           </button>
                           <button id='three-dot' className="px-1 flex justify-center items-center py-1 bg-[#272727] rounded-full hover:bg-[#ff0000]">
                              <LinearScaleIcon />
                           </button>
                        </div>
                     </div>
                  </div>
                  
                  <div className="bg-[#292929] text-white mt-3 rounded-[0.6rem] p-4">
                     <h1 className="text-[0.9rem] font-medium">{filteredData.views} <span className='ml-3'>{filteredData.timestamp}</span></h1>
                     <h3 className="text-[0.96rem]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur nisi facilis eaque sequi fuga tempore delectus temporibus eum ducimus quam itaque rerum autem, ullam velit minus tempora. Error, ipsam?...More
                     </h3>
                  </div>
                  
                  <div className="comment-section">
                     <CommentSection />
                  </div>
               </div>
            ) : (
               <ShimmerView />
            )}
            
            <div id='video_suggestion' className="w-[35%] ml-[-15px] my-[4.8rem]">
               <SuggestedVideo />
            </div>
         </div>
      </>
   );
}

export default ViewVideo;