// Import mongoose for database operations
import mongoose from "mongoose";

// Extract Schema class from mongoose
const {Schema} =mongoose;

// Define schema for comment documents
const commentSchema=new Schema({
    content:{
        type:String,
        required:String // Comment text content
    },
    username:{
        type:String,
        required:false // Username of commenter (optional)
    },
    Video_id_Num:{
        type:String,
        required:true // ID of the video being commented on
    }
})
// Create model from schema, connected to 'comments' collection
const commentModel=mongoose.model('comments',commentSchema);
// Export model for use in controllers
export default commentModel;