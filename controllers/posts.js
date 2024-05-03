import PostsModel from '../model/posts.js';
import mongoose from 'mongoose';
const PostCTL = {
    create: async (req, res) => {
        const {userID} = req.params;
        const {title, content} = req.body;
        const createPost = await PostsModel.create({
            userID,
            title,
            content
    })
    res.status(201).send({
        data: createPost,
        message: "Create post successfully!",
        success: true
    });
    },
    get: async (req, res) => {
        const {userID} = req.params;
        const posts = await PostsModel.find({userID}).populate('userID')
        res.status(200).send({
            message: "Getting posts successfully",
            data: posts
        })
    },
    update: async (req, res) => {
        const {userID, postID} = req.params;
        const {title, content} = req.body;
        const posts = await PostsModel.findByIdAndUpdate(postID, {
            title: title,
            content: content
        })
        res.status(200).send({
            message: "Updated post successfully!",
            data: posts
        })
    },
    findPost: async (req, res) => {
        const { text } = req.query;
        const posts = await PostsModel.find({ $text: { $search: text } });
        res.status(200).send({
            message: "Finding successfully",
            data: posts
        });
    
}
}
export default PostCTL;