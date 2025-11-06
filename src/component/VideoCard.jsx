// Import necessary React hooks and components
import { useEffect, useState } from "react";
import ShowCard from "./ShowCard"; // Component to display individual video cards
import './VideoCard.css';
import CategoryWiseFilter from "./CategoryWiseFilter"; // Component for filtering videos by category
import { useOutletContext } from "react-router-dom"; // Hook to access data from parent routes
import Shimmer from './Shimmer.jsx'; // Loading placeholder component

// Main component for displaying the grid of video cards
function VideoCard(){
  // Get sidebar visibility flag and search term from Header component
  const { flag, titleName } = useOutletContext() || { flag: true, titleName: '' }; 
  const [video_details, setVideoDetails] = useState([]); // Current filtered videos to display
  const [dummy_video_details, set_dummy_VideoDetails] = useState([]); // Original video data from API
  const [isLoading, setIsLoading] = useState(true); // Loading state for API fetch
  const [error, setError] = useState(null); // Error state for API fetch

  // Fetch video data when component mounts
  useEffect(() => {
    fetchdata();
  }, []);

  // Function to fetch video data from the backend API
  async function fetchdata(){
    setIsLoading(true);
    try {
      let response = await fetch('http://localhost:3000/');
      let data = await response.json();
      setVideoDetails(data); // Set current videos to display
      set_dummy_VideoDetails(data); // Store original data for filtering
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching video data:", err);
      setError("Failed to load videos. Please try again later.");
      setIsLoading(false);
    }
  }

  // Filter videos based on search term whenever titleName changes
  useEffect(() => {
    if (titleName) {
      // Filter videos that match the search term in their description
      const filteredArray = dummy_video_details.filter((videoDes) =>
        videoDes.description.toLowerCase().includes(titleName.toLowerCase())
      );
      setVideoDetails(filteredArray);
    } else {
      // If no search term, show all videos
      setVideoDetails(dummy_video_details);
    }
  }, [titleName, dummy_video_details]);

  return (
    <div className="video-card-container">
      {/* Category filter bar fixed at the top */}
      <div 
        id='button-category' 
        className="fixed p-6 top-[3rem] w-[100%] bg-[#0f0f0f] z-20 left-[10.9rem] h-[4.5rem] text-white"
      > 
        <CategoryWiseFilter SetDetails={setVideoDetails} />
      </div> 
      
      {/* Conditional rendering based on loading/error/data states */}
      {isLoading ? (
        // Show loading shimmer while fetching data
        <Shimmer />
      ) : error ? (
        // Show error message if fetch failed
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
        // Display grid of videos if data exists
        // Grid width changes based on sidebar visibility (flag)
        <div id={`${flag ? 'grid' : 'grid-width'}`} className="videos-grid">
          {video_details.map((video) => (
            <ShowCard key={video._id} video={video} />
          ))}
        </div>
      ) : (
        // Show message when no videos match filters/search
        <div className="no-results text-center text-white mt-32">
          <h2 className="text-xl font-bold mb-2">No videos found</h2>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

export default VideoCard;
