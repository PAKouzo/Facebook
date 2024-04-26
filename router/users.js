import { Router } from "express";
import UserCTL from "../controllers/users.js";
import UserMDW from "../middleware/users.js";
import PostCTL from "../controllers/posts.js";
import PostMDW from "../middleware/posts.js";
import CommentCTL from "../controllers/comments.js";

const userRouter = Router();

userRouter.post('/signup', UserMDW.checkSignUp, UserCTL.signUp) //đăng ký
userRouter.post('/login', UserMDW.validate ,UserCTL.login) //đăng nhập
userRouter.post('/:userID/posts', PostCTL.create) //tạo 1 bài đăng
userRouter.get('/:userID/posts', UserMDW.checkUserID, PostCTL.get) //lấy tất cả bài đăng theo userID
userRouter.post('/:userID/:postID/comments', UserMDW.checkUserID, PostMDW.checkPostID, CommentCTL.create) //tạo 1 comment
userRouter.put('/:userID/profile', UserMDW.checkUserID, UserCTL.update)
userRouter.put('/:userID/posts/:postID', UserMDW.checkUserID, PostMDW.checkPostID, )
export default userRouter;