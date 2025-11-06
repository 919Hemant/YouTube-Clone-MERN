// Import required modules for server setup
import express from 'express'; // Express framework for building the REST API
import mongoose from 'mongoose'; // MongoDB object modeling tool
import {routes} from './Routes/YoutubeData.routes.js' // Import YouTube data routes
const app=express(); // Initialize Express application
let databaseName='Youtube_Clone'; // Database name for the application
// Connect to MongoDB Atlas database
mongoose.connect(`mongodb+srv://hemant_user:Hemant%40123@hemantcluster111.cqk63uv.mongodb.net/`);
// Import additional route modules
import { userRoutes } from './Routes/User.routes.js'; // User authentication routes
import cors from 'cors'; // Cross-Origin Resource Sharing middleware
import { commentRoutes } from './Routes/comment.routes.js'; // Comment functionality routes


// Configure middleware
app.use(cors()); // Enable CORS for all routes to allow frontend to communicate with backend
app.use(express.json()); // Parse JSON request bodies

// Set up MongoDB connection event handlers
let db=mongoose.connection;
db.on('open',()=>{
  console.log(`Connection is Successful`) // Log successful connection
})
db.on('error',()=>{
  console.log(`Connection isn't successful`) // Log connection errors
})

// Register all route handlers with the Express app
routes(app); // YouTube data routes (videos, channels, etc.)
userRoutes(app); // User authentication routes (login, register)
commentRoutes(app); // Comment functionality routes


// Start the server on port 3000
app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})
