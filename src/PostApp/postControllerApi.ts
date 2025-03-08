import postService from "./postService";
import { Request, Response } from 'express'


async function getAllPostsApi(req: Request, res: Response){
    const allPosts = await postService.getAllPosts()
    res.json(allPosts);
}

async function getPostWithCommentsApi(req: Request, res: Response){
    const id = req.params.id
    const result = await postService.getPostWithComments(+id)
    res.json(result)
}

const postControllerApi = {
    getAllPostsApi: getAllPostsApi,
    getPostWithCommentsApi: getPostWithCommentsApi,
}

export default postControllerApi