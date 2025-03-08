import { Router } from "express";
import commentController from "./commentController";


const commentRouter = Router();

commentRouter.post("/create", commentController.createCommentForPost);
commentRouter.get("/post/:postId", commentController.getPostWithComments);

export default commentRouter