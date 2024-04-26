import mongoose from 'mongoose';
const commentSchema = new mongoose.Schema({
    content: String,
    userID: {
        type: String,
        ref: "users"
    },
    postID: {
        type: String,
        ref: "posts"
    }
});
const CommentsModel = mongoose.model('comments', commentSchema);
export default CommentsModel;