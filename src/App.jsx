// Import the Header component which contains the navigation bar and search functionality
import Header from "./component/Header";
/**
 * Main App component - Root component of the YouTube clone application
 * Renders the Header component which contains the navigation and routing system
 * @returns {JSX.Element} The main application structure
 */
function App(){
  return (
    <>
     {/* Render the Header component which includes navigation and nested routes */}
     <Header/>
    </>
  )
}
export default App;