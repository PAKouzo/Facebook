import { Router } from "express";
import PostMDW from "../middleware/posts.js";
import CommentCTL from "../controllers/comments.js";
import CommentMDW from "../middleware/comments.js";
const postRouter = Router();

postRouter.get('/:postID/comments', PostMDW.checkPostID, CommentCTL.getAll) //lấy tất cả comment trong post theo postID

export default postRouter;1619