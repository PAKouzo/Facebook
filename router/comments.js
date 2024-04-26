import { Router } from "express";
import CommentCTL from "../controllers/comments.js";
import PostMDW from "../middleware/posts.js";
const commentRouter = Router();
export default commentRouter;