import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import './VideoCard.css';
import CategoryWiseFilter from "./CategoryWiseFilter";
import { useOutletContext } from "react-router-dom";
import Shimmer from './Shimmer.jsx';

function VideoCard(){
  const { flag, titleName } = useOutletContext() || { flag: true, titleName: '' }; 
  const [video_details, setVideoDetails] = useState([]);
  const [dummy_video_details, set_dummy_VideoDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata(){
    setIsLoading(true);
    try {
      let response = await fetch('https://youtube-project-py16.onrender.com/');
      let data = await response.json();
      setVideoDetails(data);
      set_dummy_VideoDetails(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching video data:", err);
      setError("Failed to load videos. Please try again later.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (titleName) {
      const filteredArray = dummy_video_details.filter((videoDes) =>
        videoDes.description.toLowerCase().includes(titleName.toLowerCase())
      );
      setVideoDetails(filteredArray);
    } else {
      setVideoDetails(dummy_video_details);
    }
  }, [titleName, dummy_video_details]);

  return (
    <div className="video-card-container">
      <div 
        id='button-category' 
        className="fixed p-6 top-[3rem] w-[100%] bg-[#0f0f0f] z-20 left-[10.9rem] h-[4.5rem] text-white"
      > 
        <CategoryWiseFilter SetDetails={setVideoDetails} />
      </div> 
      
      {isLoading ? (
        <Shimmer />
      ) : error ? (
        <div className="error-container text-center text-white mt-32 p-4">
          <h2 className="text-xl font-bold text-red-500 mb-2">Oops!</h2>
          <p>{error}</p>
          <button 
            onClick={fetchdata} 
            className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : video_details.length > 0 ? (
        <div id={`${flag ? 'grid' : 'grid-width'}`} className="videos-grid">
          {video_details.map((video) => (
            <ShowCard key={video._id} video={video} />
          ))}
        </div>
      ) : (
        <div className="no-results text-center text-white mt-32">
          <h2 className="text-xl font-bold mb-2">No videos found</h2>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

export default VideoCard;