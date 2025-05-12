// Import mongoose for MongoDB interactions
import mongoose from "mongoose";
import { Schema } from "mongoose";

// Schema definition for YouTube video data
const youtubeDataSchema = new Schema({
    imageIcon: { type: String, required: true }, // Thumbnail image URL
    video_url: { type: String, required: true }, // Video URL for embedding/playing
    description: { type: String, required: true }, // Video description/title
    owner: { type: String, required: true }, // Channel name
    views: { type: String, required: true }, // View count
    time: { type: String, required: true }, // Upload time or duration
    genre: { type: String, required: true } // Video category/genre
});

// Create model from schema, connected to 'YoutubeData' collection
const YoutubeDataModel = mongoose.model("YoutubeData", youtubeDataSchema);

// Export model for use in controllers and routes
export default YoutubeDataModel;
