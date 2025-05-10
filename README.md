# YouTube Clone - Frontend

This is a YouTube clone frontend built with React. It mimics the YouTube interface and functionality without requiring any backend integration initially.

## Features

- Dark themed UI matching YouTube's design
- Home page with video grid
- Category filtering
- Search functionality
- Video playback page with suggested videos
- Responsive design
- Loading states with shimmer effects
- Channel details page

## Technologies Used

- React
- React Router
- Vite
- CSS (no external UI libraries)
- Font Awesome for icons

## Prerequisites

- Node.js (v14 or later)
- npm or yarn

## Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd YouTube-Clone-MERN
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/component/` - React components
- `src/assets/` - Static assets
- `src/utils/` - Utility functions

## Future Backend Integration

The frontend is designed to be easily integrated with a backend. Currently, it uses dummy data, but can be updated to fetch data from an API.

## Creating the Backend

To create a backend for this project:

1. Set up a Node.js/Express server
2. Create MongoDB models for videos, users, comments, etc.
3. Implement RESTful APIs for:
   - Fetching videos
   - User authentication
   - Commenting functionality
   - Video upload
   - Likes and subscriptions

## License

MIT
