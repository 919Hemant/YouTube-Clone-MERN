import express from 'express';
import mongoose from 'mongoose';
import {routes} from './Routes/YoutubeData.routes.js'
const app=express();
let databaseName='Youtube_Clone';
mongoose.connect(`mongodb+srv://Internshala:Internshala@cluster0.3dyau.mongodb.net/`);
import { userRoutes } from './Routes/User.routes.js';
import cors from 'cors';
import { commentRoutes } from './Routes/comment.routes.js';


app.use(cors());
app.use(express.json());

let db=mongoose.connection;
db.on('open',()=>{
  console.log(`Connection is Successful`)
})
db.on('error',()=>{
  console.log(`Connection isn't successful`)
})

routes(app);
userRoutes(app);
commentRoutes(app);


app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})