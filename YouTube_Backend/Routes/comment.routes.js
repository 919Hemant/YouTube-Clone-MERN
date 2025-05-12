// Import comment controller functions for handling CRUD operations
import { addComment, getComment,deleteComment, editComment } from "../Controller/comment.controller.js"
// Define routes for comment functionality
export function commentRoutes(app){
      // POST route to add a new comment
      app.post('/add',(req,res)=>{
        addComment(req,res)
      })
      // GET route to retrieve all comments
      app.get('/getComments',(req,res)=>{
        getComment(req,res)
      });
      // DELETE route to remove a comment by ID
      app.delete('/delete/:id',(req,res)=>{
        deleteComment(req,res)
      })
      // PUT route to update a comment by ID
      app.put('/edit/:id',(req,res)=>{
        editComment(req,res)
      })
}

