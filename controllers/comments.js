import CommentsModel from "../model/comments.js";
const CommentCTL = {
    create: async (req, res) => {
        const {userID, postID} = req.params;
        const { content } = req.body;
        const createComment = await CommentsModel.create({
            userID,
            postID,
            content
        })
        res.status(200).send({
            data: createComment,
            message: 'Comment created successfully',
            success: true
        })
    },
    getAll: async (req, res) => {
        const {postID} = req.params;
        const comments = await CommentsModel.find({postID})
        res.status(200).send({
            message: "Get all comments successfully!",
            data: comments
        })
    }
}
export default CommentCTL;