// Import the YouTube data model for database operations
import YoutubeDataModel from "../Model/YoutubeData.model.js";

// Function to create a new YouTube video entry in the database
export function postData(req, res) {
    // Extract video data from request body
    const { imageIcon, video_url,description,owner,views,time,genre } = req.body;
    // Create new document using the model
    const newData=new YoutubeDataModel({
        imageIcon, 
        video_url,
        description,
        owner,
        views,
        time,
        genre
    });
    // Save to database and handle response
    newData.save().then((data)=>{
        if(!data){
             res.status(404).send('Something went wrong')
        }
        else{
           // Return all videos including the new one
           getData(req,res)
        }
    }).catch((err)=>{
        return res.status(500).json({message:err.message});
    })
}
// Function to retrieve all YouTube videos from the database
export function getData(req,res){
    // Query all documents in the collection
    YoutubeDataModel.find().then((data)=>{
        if(!data){
            // Handle case where no data is found
            res.status(404).send({"message":"Data not found"})
        }
        else{
            // Return all video data to client
            res.send(data)
        }
    }).catch((err)=>{
        // Handle server errors
        return res.status(500).json({message:err.message})
    })
}