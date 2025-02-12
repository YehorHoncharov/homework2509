import { commentRepository } from "./commentRepository";

interface IComment{
    id: number,
    headline: string,
    body: string,
    src: string | null, 
    postId: number, 
    userId: number 
}

interface ICommentSuccess{
    status: "success",
    data: IComment
}

interface ICommentsSuccess{
    status: "success",
    data: IComment[]
}

interface ICommentError{
    status: "error",
    message: string
}

import {Prisma} from '@prisma/client'

async function getCommentsByPostId(postId: number) {
    const context = {
        comments: await commentRepository.getCommentsByPostId(postId)
    }

    if (context.comments){
        return context
    }else {
        return undefined
    }
    
}

async function getCommentsByUserId(postId: number) {
    const context = {
        comments: await commentRepository.getCommentsByPostId(postId)
    }

    if (context.comments){
        return context
    }else {
        return undefined
    }
    
}

async function createCommentForPost(postId: number, data: Prisma.CommentCreateInput){
    await commentRepository.createCommentToPost(postId, data)
}

const commentService = {
    getCommentsByPostId: getCommentsByPostId,
    getCommentsByUserId: getCommentsByUserId, 
    createCommentForPost: createCommentForPost,
}

export default commentService