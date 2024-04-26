import CommentsModel from "../model/comments.js";
import PostsModel from "../model/posts.js";
const CommentMDW = {
    checkCmtID: async (req, res, next) => {
        try{
            const {postID} = req.params;
            const existPost = await PostsModel.findById(postID);
            if (!existPost) throw new Error('Could not find post')
            const {commentID} = req.params;
            const existCmt = await CommentsModel.findById(commentID);
            console.log(existCmt)
            if (!existCmt) throw new Error('Could not find comments!')
            if (existCmt.postID != postID) throw new Error('Comment can be found in the post.')
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
export default CommentMDW;