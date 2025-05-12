// Import controller functions and middleware
import { getData,postData } from "../Controller/YoutubeData.Controller.js"
import { verifyToken } from "../Middleware/verifyToken.js";
// Define routes for YouTube video data
export function routes(app){
    // GET route to fetch all videos
    app.get('/',(req,res)=>{
        getData(req,res)
    })
    // POST route to create a new video
    app.post('/post',(req,res)=>{
        postData(req,res)
    });
}