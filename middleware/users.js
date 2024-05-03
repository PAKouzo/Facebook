import UsersModel from "../model/users.js";
import PostsModel from "../model/posts.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
dotenv.config();
const {TOKEN_SECRET} = process.env;

const UserMDW = {
    checkSignUp: async (req, res, next) => {
        const {username} = req.body;
        try{
            const existedUsername = await UsersModel.findOne({username});
            if(existedUsername) throw new Error('Username already exists');
            next();
        }
        catch(Error){
            res.status(403).send({
                message:Error.message,
                data: null,
                success: false
            })
        }
    },
    checkLogin: async (req, res, next) => {
        const {username, password} = req.body;
        try{
            const existedUsername = await UsersModel.findOne({username});
            if(!existedUsername) {
                throw new Error('Username is wrong or does not exist');
            }
            else{
                const isPasswordValid = await bcrypt.compare(password, existedUsername.password)
                if(!isPasswordValid) throw new Error('Password is wrong');
            }
            next();
        }
        catch(Error){
            res.status(403).send({
                message:Error.message,
                data: null,
                success: false
            })
        }
    },
    validate: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        if(authHeader){
            const token = authHeader.split(' ')[1];
            jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
                if(err) {
                    console.log("JWT verification failed: ", err.message);
                    next();           
                }
                else {
                    console.log('Decoded JWT: ', decoded);
                }
        })
        } 
        else {
            res.status(401).json({message: 'Access token is missing'});
        }
    },
    checkUserID: async (req, res, next) => {
        try{
            const {userID} = req.params;
            const existUserID = await PostsModel.findOne({userID});
            if (!existUserID) throw new Error('Could not find user!')
            next()
        }
        catch(Error){
            res.status(404).send({
                message: Error.message,
                data: null,
                success: false
            })
        }
    }
}
export default UserMDW;