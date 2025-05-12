// Import the comment model for database operations
import commentModel from "../Model/Comment.model.js";
// Function to add a new comment to a video
export function addComment(req,res){
            // Extract comment data from request body
            const {content,username,Video_id_Num}=req.body;
            // Create new comment document
            const new_comment=new commentModel({
                 content,
                 username,
                 Video_id_Num
            })
            // Save comment to database
            new_comment.save().then((data)=>{
                if(!data){
                    res.status(404).send('No comments found');
                }
                else{
                    res.status(200).send({message:'Comments added'})
                }
            })

}
// Function to retrieve comments for a specific video
export function getComment(req,res){
    // Find comment by video ID
    commentModel.findOne({Video_id_Num}).then((data)=>{
        if(!data){
            res.status(404).send('No comments found');
        }
        else{
            // Return comment data
            res.send(data)
        }
    }).catch((err)=>{
        res.status(503).send({message:err.message});
    })
}
// Function to delete a comment by its ID
export function deleteComment(req,res){
    // Get comment ID from URL parameter
    const id=req.params.id;
    // Find and delete the comment
    commentModel.findByIdAndDelete(id).then((data)=>{
              if(!data){
                return res.status(404).json({message:'Comment not found'})
              }
              return res.status(200).json({message:'Comment deleted successfully'})
    }).catch((err)=>{
        res.status(503).send({message:err.message})
    })

}
// Function to edit an existing comment
export function editComment(req,res){
    // Get comment ID from URL parameter
    const id=req.params.id;
    // Get updated content from request body
    const {content}=req.body;
    // Find and update the comment
    commentModel.findByIdAndUpdate(
        id,
        {content},
        {new:true,runValidators:true} // Return updated document and validate
    ).then((data)=>{
           if(!data){
             return res.status(404).send({message:'No data found'});
           }
           return res.status(200).json({message:{data}})
    }).catch((err)=>{
        res.status(503).send({message:'Internal server error'})
    })
}