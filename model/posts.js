import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    userID: {
        type: String, 
        ref: 'users'
    },
    title: String,
    content: String
});
postSchema.index({ title: 'text', content: 'text' });
const PostsModel = mongoose.model('posts', postSchema);
export default PostsModel;