// Import required modules for token verification
import jwt from 'jsonwebtoken'; // JWT library for token verification
import userModel from '../Model/User.model.js'; // User model for database queries
/**
 * Middleware function to verify JWT token for protected routes
 * Checks if the token is valid and finds the associated user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export function verifyToken(req, res, next) {
    // Check if authorization header exists and has the JWT prefix
    if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] == 'JWT') {
        // Extract the token from the authorization header
        // Verify the token using the secret key
        jwt.verify(req.headers.authorization.split(" ")[1],"secretkey",function(err,verifiedToken){
            if(err){
                // If token is invalid, return 403 Forbidden
                return res.status(403).send({"message":"invalid Token"});
            } 
            // Find the user associated with the token ID
            userModel.findById(verifiedToken.id).then((user)=>{
                // console.log(user);
                console.log(verifiedToken.id) // Log the user ID from token
                console.log(req.headers.authorization.split(" ")[1]) // Log the token
                next(); // Proceed to the next middleware or route handler
            }).catch((err)=>{
                // Handle database errors
                res.status(500).send({message:err.message})
            })


        })
    }
    else{
        // If no token is provided, return 404 Not Found
        res.status(404).send({"message":"Token not present"});
    }

}