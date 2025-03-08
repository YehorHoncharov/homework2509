import { Request, Response } from 'express'
import commentService from './commentService'


async function createCommentForPost(req: Request, res: Response) {
    const postId: number = Number(req.params.id)
    const data = await req.body
    commentService.createCommentForPost(postId, data)
}

async function getPostWithComments(req: Request, res: Response) {
    const postId: number = Number(req.params.id)
    const context = await commentService.getCommentsByPostId(postId)
    if (!context) {
        res.render("error")
    } else if ("status" in context && context.status === "error") {
        res.render("error")
    } else {
        res.render("comments", context)
    }
}

const commentController = {
    getPostWithComments: getPostWithComments,
    createCommentForPost: createCommentForPost}

export default commentController