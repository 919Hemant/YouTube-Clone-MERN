import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './component/Error.jsx'
import SideBar from './component/SideBar.jsx'
import VideoCard from './component/VideoCard.jsx'
import ViewVideo from './component/ViewVideo.jsx'
import ChannelDetails from './component/ChannelDetails.jsx'
import SignIn from './component/SignIn.jsx'
import SignUp from './component/SignUp.jsx'
import CategoryWiseFilter from './component/CategoryWiseFilter.jsx'
import React, { useState } from 'react'


const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <>
      <SideBar />
      <CategoryWiseFilter onCategorySelect={handleCategorySelect} />
      <VideoCard selectedCategory={selectedCategory} />
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/channelDetails',
        element: <ChannelDetails />
      },
      {
        path: '/viewing_video/:id',
        element: <ViewVideo />
      }
    ]
  },
  {
    path: '/SignIn',
    element: <SignIn />
  },
  {
    path: '/SignUp',
    element: <SignUp />
  },
  {
    path: '*',
    element: <Error />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
