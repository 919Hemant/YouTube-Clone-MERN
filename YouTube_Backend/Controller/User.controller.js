// Import required modules for user authentication
import userModel from "../Model/User.model.js"; // User database model
import bcrypt from 'bcrypt'; // Password hashing library for security
import jwt from "jsonwebtoken"; // JWT for creating authentication tokens


/**
 * User registration function
 * Handles new user registration by checking if email already exists
 * If email is unique, creates new user with hashed password
 * @param {Object} req - Express request object containing user details
 * @param {Object} res - Express response object
 */
export function register(req,res){
    // Extract user data from request body
    const {userName,userEmail,userPassword}=req.body;
     // Check if user with this email already exists
     userModel.findOne({userEmail}).then((data)=>{
        if(data){  
            // If user exists, return 403 Forbidden status
            res.status(403).send({"Message":"User already exist"});
        }
        else{
            // Create new user object with hashed password for security
            let newUser=new userModel({
                userName,
                userEmail,
                userPassword:bcrypt.hashSync(userPassword,10) // Hash password with salt round of 10
            })
            // Save user to database
            newUser.save().then((data)=>{
                // Return success response with user data
                res.status(200).json({message:data})
            }).catch((err)=>{
                // Handle database errors
                res.status(500).send({message:err.message})
            })
           
        }
     })
}
/**
 * User login function
 * Authenticates user credentials and generates JWT token on success
 * @param {Object} req - Express request object containing login credentials
 * @param {Object} res - Express response object
 */
export function login(req,res){
     // Extract login credentials from request body
     const {userEmail,userPassword}=req.body;
     // Find user by email
     userModel.findOne({userEmail}).then((data)=>{
        if(!data){
           // User not found - return 404 Not Found
           res.status(404).send({"message":"Current user isn't a registered one"}) 
        }
        else{
            // Compare provided password with stored hash
            let validPassword=bcrypt.compareSync(userPassword,data.userPassword)
            if(!validPassword){
                // Password doesn't match - return 403 Forbidden
                return res.status(403).send({"message":"invalid Password"})
            }
            // Create JWT token with user ID and 1 year expiration
            let token=jwt.sign({id:data._id},"secretkey",{expiresIn:'1y'});
            // Send successful response with user info and token
            res.send({
                user:{
                    Name: data.userName,
                    email:data.userEmail
                },
                
            tokenNumber:token // JWT token for authentication
                
            })

        }
     }).catch((err)=>{
        // Handle server errors
        res.status(500).json({message:err.message})
     })
}