import { Router } from "express";
import UserCTL from "../controllers/users.js";
import UserMDW from "../middleware/users.js";
import PostCTL from "../controllers/posts.js";
import PostMDW from "../middleware/posts.js";
import CommentCTL from "../controllers/comments.js";

const userRouter = Router();

userRouter.post('/signup', UserMDW.checkSignUp, UserCTL.signUp) //đăng ký
userRouter.post('/login', UserMDW.checkLogin ,UserCTL.login) //đăng nhập
userRouter.post('/:userID/posts', UserMDW.checkUserID, PostCTL.create) //tạo 1 bài đăng
userRouter.get('/:userID/posts', UserMDW.checkUserID, PostCTL.get) //lấy tất cả bài đăng theo userID
userRouter.post('/:userID/:postID/comments', PostMDW.checkPostID, CommentCTL.create) //tạo 1 comment
userRouter.put('/:userID/profile', UserMDW.checkUserID, UserCTL.update)
userRouter.put('/:userID/posts/:postID', UserMDW.checkUserID, PostMDW.checkPostID, PostCTL.update)
export default userRouter;