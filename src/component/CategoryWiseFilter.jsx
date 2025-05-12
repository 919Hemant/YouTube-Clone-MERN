// Imports for category filtering functionality
import { dataInfo } from "../utils/dummyData"
import { genres } from "../utils/genrecollection"; // List of video categories
import { useState, useEffect } from "react";
// Component for filtering videos by category/genre
function CategoryWiseFilter(props){
    const [video_details,setVideoDetails]=useState([]); // Store all videos
    // Fetch videos when component mounts
    useEffect(()=>{
        fetchdata()
    },[])
    // Get all videos from API
    async function fetchdata(){
        let response=await fetch('https://youtube-project-py16.onrender.com/');
        let data=await response.json();
        setVideoDetails(data);
    }
        // useEffect(()=>{
        //     fetchdata()
        // },[])
        // async function fetchdata(){
        //     let response=await fetch('https://youtube-project-py16.onrender.com/');
        //     let data=await response.json();
        //     setVideoDetails(data);
        // }
 
// Handle category button clicks
function handleClick(e){
   console.log('Genre',e.target.innerText)
   // If 'All' is clicked, show all videos
   if(e.target.innerText.toLowerCase()=='all'){
    props.SetDetails(video_details)
    return;
   }
   // Filter videos by selected genre/category
   let new_filterArr=video_details.filter((data)=>{
    if(data.genre.toLowerCase()==e.target.innerText.toLowerCase()){
        return true;
    }
   });
   // Update parent component with filtered videos
   if(new_filterArr.length>0){
    props.SetDetails(new_filterArr)
   }
}
    // Render category filter buttons
    return (
        <>
           {
            // Map through genre list to create filter buttons
            genres.map((genre,index)=>{
                return (
                    <button key={index} onClick={(e)=>{handleClick(e)}} className="text-white py-1 px-5 text-[0.9rem] font-semibold hover:bg-[#464644] rounded-md mr-3 bg-[#212121]">{genre}</button>
                    
                )
            })
           }
        </>
    )
}
export default CategoryWiseFilter;