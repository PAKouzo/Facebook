import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    userID: {
        type: String, 
        ref: 'users'
    },
    title: String,
    content: String
});
const PostsModel = mongoose.model('posts', postSchema);
export default PostsModel;
//auth -> creater, user