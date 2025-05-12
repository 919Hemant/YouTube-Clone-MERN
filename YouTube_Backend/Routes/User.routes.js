// Import authentication controller functions
import { login, register } from "../Controller/User.controller.js";


// Define user authentication routes
export function userRoutes(app){
    // Register endpoint - creates new user accounts
    app.post('/register',(req,res)=>{
        register(req,res)
    });
    // Login endpoint - authenticates users and returns JWT token
    app.post('/login',(req,res)=>{
        login(req,res)
    })
}