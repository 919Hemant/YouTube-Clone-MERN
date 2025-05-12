// Import Material UI icons for the header
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import SearchIcon from '@mui/icons-material/Search'; // Search icon
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Three dots menu icon
import PersonIcon from '@mui/icons-material/Person'; // Person/user icon
import Sidebar from './SideBar'; // Sidebar component
import { useState } from 'react'; // React state hook
import LogoutIcon from '@mui/icons-material/Logout'; // Logout icon
import './Header.css'; // Header component styles
import VideoCard from './VideoCard'; // Video card component
import { dataInfo } from '../utils/dummyData'; // Sample data for videos
import { Outlet } from 'react-router-dom'; // Outlet for nested routes
import { Link, useNavigate } from 'react-router-dom'; // Router components for navigation
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount'; // Account switching icon
import GoogleIcon from '@mui/icons-material/Google'; // Google icon
import InventoryIcon from '@mui/icons-material/Inventory'; // Inventory icon
import YoutubeIcon from '../assets/Youtube_Icon.png'; // YouTube logo
/**
 * Header component - Main navigation bar for the YouTube clone
 * Contains the YouTube logo, search bar, and user authentication options
 * @returns {JSX.Element} Header component with navigation and search functionality
 */
function Header() {
   const navigate=useNavigate(); // Hook for programmatic navigation
   const [dropdownVisible, setDropdownVisible] = useState(false); // State for user dropdown menu visibility
   const token = localStorage.getItem('token'); // Get authentication token from local storage
   
   /**
    * Toggle the visibility of the user dropdown menu
    */
   function handleDropdownToggle() {
      setDropdownVisible(!dropdownVisible);
   }

   /**
    * Handle user logout process
    * Removes authentication data from local storage and redirects to home page
    */
   function handleLogout() {
      localStorage.removeItem('token'); // Remove auth token
      localStorage.removeItem('Name'); // Remove user name
      alert('Logged out Successfully'); // Show success message
      setDropdownVisible(false); // Close dropdown menu
      navigate('/') // Redirect to home page
      
   }
   // Get user information from local storage
   const Name_user = localStorage.getItem('Name'); // User's name for display
   const Email_user = localStorage.getItem('Email'); // User's email for display
   const [flag, setFlag] = useState(true); // State for sidebar visibility
   const [titleName, setTitleName] = useState(''); // State for search input

   /**
    * Update search input state as user types
    * @param {Event} e - Input change event
    */
   function handleChange(e) {
      setTitleName(e.target.value);
   }
   
   /**
    * Toggle sidebar visibility when menu icon is clicked
    */
   function handleMenuClick() {
      setFlag(!flag);
   }

   return (
      <>
         {/* Main header container with dark background */}
         <div className="header-sec fixed top-0 w-[100%] z-40  bg-[#0F0F0F] flex  justify-between p-2 text-white">
            {/* Left section - Menu and YouTube logo */}
            <div className="sec-1 flex items-center">
               {/* Hamburger menu button */}
               <div id='menu-margin' className='mr-2'>
                  <button onClick={handleMenuClick} className=' p-2 hover:rounded-full hover:bg-[#212121]'> <MenuIcon className='' /></button>
               </div>
               {/* YouTube logo and title */}
               <div id='img-container' className='flex items-center ml-3'>
                  <img src={YoutubeIcon} id='img-id' alt='' width='30px' height='28px' />
                  <h2 id='youtube-head' className='font-[500] text-[1.5rem] pl-1'>YouTube</h2>
               </div>
            </div>
            {/* Middle section - Search bar */}
            <div className="sec-2 border border-[#646060] h-[3rem]  w-[45%] rounded-[2rem] ">
               <div className='w-[100%]  h-[100%] flex justify-between'>
                  {/* Search input field */}
                  <input type="text" name="" onChange={(e) => { handleChange(e) }} id="input-id" placeholder='Search' className=' bg-[#0f0f0f] inline-block w-[89.7%] h-[100%] rounded-l-[2rem]  pl-7  outline outline-[#21212100] border-[#21212100] focus:outline-[#497dd8f1]' />
                  {/* Search button */}
                  <button id='search-btn' className='inline-block w-[10%] h-[100%] bg-[#212121] rounded-r-[2rem] hover:bg-[#30302f]'><SearchIcon /></button>
               </div>
            </div>
            {/* Right section - User profile or sign in button (conditional rendering) */}
            {token ? 
               // If user is logged in, show profile avatar and dropdown
               <div className="sec-3 mr-2">
                  <div className=' flex items-center'>
                  <MoreVertIcon id='dot-icon-first' />
                  {/* User avatar button with first letter of username */}
                  <button onClick={handleDropdownToggle} className='border flex justify-center items-center  font-bold border-[#959593b1] rounded-full bg-[#fff]  px-2  hover:rounded-full hover:bg-[#212121] hover:border-[#fff] '> <span className=' text-2xl font-bold text-[#ff0000]'>{Name_user.charAt(0).toUpperCase()}</span> </button>
                  </div>
                  {/* User dropdown menu - only visible when dropdownVisible is true */}
                  {dropdownVisible && (
                     <div id='drop-down' className="dropdown-menu  absolute  w-[24%] top-[53px] right-3 bg-[rgb(33,33,33)] p-2 rounded-lg shadow-lg">
                        {/* User profile section */}
                        <div className='flex gap-4'>
                        <button className=' flex justify-center items-center  font-bold  rounded-full   hover:rounded-full hover:bg-[#212121] hover:border-[#fff] '> <span className=' text-2xl font-bold text-[#ff0000]'>{Name_user.charAt(0).toUpperCase()}</span> </button> 
                           <div>
                              <h1>{Name_user.slice(0,1).toUpperCase()+Name_user.slice(1)}</h1>
                              <h1>{Email_user}</h1>
                              <Link to='/channelDetails'><h1 className='text-[#3d3aee] hover:text-[#ff0000] cursor-pointer font-medium'>View Your Channel</h1></Link>
                           </div>
                        </div>
                        {/* Google Account option */}
                        <div className='flex gap-2 items-center border-t-2 mt-3 pt-3'>
                           <GoogleIcon/>
                        <button className="text-white p-1 w-full text-left hover:text-[#ff0000]">Google Account</button>
                        </div>
                        {/* Purchases and Membership option */}
                        <div className='flex gap-2 items-center border-t-2 mt-3 pt-3'>
                           <InventoryIcon/>
                        <button className="text-white p-1 w-full text-left hover:text-[#ff0000]">Purchases and Membership</button>
                        </div>
                        {/* Switch Account option */}
                        <div className='flex gap-2 items-center border-t-2 mt-3 pt-3'>
                           <SwitchAccountIcon/>
                        <button className="text-white p-1 w-full text-left hover:text-[#ff0000]">Switch Account</button>
                        </div>
                        {/* Logout option */}
                        <div className='flex gap-2 items-center border-t-2 mt-3 pt-3'>
                           <LogoutIcon/>
                        <button onClick={handleLogout} className="text-white p-1 w-full text-left hover:text-[#ff0000]">Logout</button>
                        </div>
                       
                     </div>
                  )}
               </div> 
               : 
               // If user is not logged in, show sign in button
               <Link to='/SignIn'><div className="sec-3 mr-5">
                       <MoreVertIcon id='dot-icon'/>
                       <button id='sec3-button' className='border border-[#959593b1] rounded-full p-2 px-4 hover:rounded-full hover:bg-[#212121] hover:border-[#0f0f0f] '> <PersonIcon className='border border-red-100 rounded-full text-[#fff] '/> <span id='signin-text'>Sign In</span> </button>
                  </div></Link>
            }

         </div>
         {/* Main content area */}
         <div className='flex'>
            {/* Outlet for nested routes, passing sidebar visibility and search term as context */}
            <Outlet context={{ flag, titleName }} />
         </div>
      </>
   )
}
export default Header;