import { Router } from "express";
import userRouter from "./users.js";
import postRouter from "./post.js";
import commentRouter from "./comments.js";

const router = Router();

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);

export default router;