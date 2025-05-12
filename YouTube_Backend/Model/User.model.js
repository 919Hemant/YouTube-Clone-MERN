// Import mongoose for MongoDB object modeling
import mongoose from 'mongoose';
// Extract Schema class from mongoose for defining the data structure
const {Schema} =mongoose;

/**
 * User Schema - Defines the structure for user documents in MongoDB
 * Contains fields for username, email, and password
 */
let userSchema=new Schema({
    userName:{
        type:String,
        required:true // Username is mandatory
    },
    userEmail:{
        type:String,
        required:true // Email is mandatory and used for authentication
    },
    userPassword:{
        type:String,
        required:true // Password is stored as hashed string (see User.controller.js)
    }

})
// Create the User model from the schema, connected to the 'users' collection in MongoDB
let userModel=mongoose.model('users',userSchema);
// Export the model for use in other files (controllers, routes, etc.)
export default userModel;