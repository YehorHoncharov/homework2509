import { Request, Response } from 'express'
import commentService from './commentService'



async function getCommentsByPostId(req: Request, res: Response) {
    const postId: number = Number(req.params.id)
    const context = await commentService.getCommentsByPostId(postId)

    if (!context){
        res.render('error')
    } else{
        res.render('comments', context)
}}

async function getCommentsByUserId(req: Request, res: Response) {
    const userId: number = Number(req.params.id)
    const context = await commentService.getCommentsByUserId(userId)

    if (!context){
        res.render('error')
    } else{
        res.render('comments', context)
}}

async function createCommentForPost(req: Request, res: Response) {
    const postId: number = Number(req.params.id)
    const data = await req.body
    commentService.createCommentForPost(postId, data)
}


const commentController = {
    getCommentsByPostId: getCommentsByPostId,
    getCommentsByUserId: getCommentsByUserId,
    createCommentForPost: createCommentForPost,}

export default commentController