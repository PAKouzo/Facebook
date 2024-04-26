import bcrypt from 'bcryptjs';
import UsersModel from '../model/users.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

dotenv.config()
const {TOKEN_SECRET} = process.env;
const UserCTL = {
    signUp: async (req, res) => {
        const {username, password, phone, birthday, bio} = req.body;
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)    
        const createUser = await UsersModel.create({ 
            username,
            password: hash,
            phone,
            birthday, 
            bio
        });
        res.status(201).send({
            message: "Register successful",
            data: createUser
        })    
    },
    login: async (req, res) => {
        const {username, password} = req.body;
        const users = await UsersModel.find({username: username, password: password})
        const payload = {
            username: users.username,
            password: users.password
        }
        const token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: '10s' });
        res.status(200).send(token)
    },
    update: async (req, res) => {
        const {userID} = req.params;
        const {phone, birthday, bio} = req.body;
        const user = await UsersModel.findByIdAndUpdate(userID, {
            phone: phone,
            birthday: birthday,
            bio: bio
        })
        res.status(200).send({
            message: 'Update profile successfully!',
            data: user
        })
    }
}

export default UserCTL;