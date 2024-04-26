import PostsModel from "../model/posts.js";
const PostMDW = {
    checkPostID: async (req, res, next) => {
        try{
            const {postID} = req.params;
            const existPost = await PostsModel.findById(postID);
            console.log(existPost)
            if (!existPost) throw new Error('Could not find post')
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
export default PostMDW;