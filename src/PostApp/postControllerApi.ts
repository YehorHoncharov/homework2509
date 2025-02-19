import postService from "./postService";
import { Request, Response } from 'express'
import { PostWithComment } from "./types";

async function getAllPostsApi(req: Request, res: Response){
    const allPosts = await postService.getAllPosts()

    res.json(allPosts);
}

async function getPostWithCommentsApi(req: Request, res: Response){
    let postId = Number(req.params.postId)
    const postWithComment = await postService.getPostWithComments(postId)

    res.json(postWithComment)
}

const postControllerApi = {
    getAllPostsApi: getAllPostsApi,
    getPostWithCommentsApi: getPostWithCommentsApi,
}

export default postControllerApi