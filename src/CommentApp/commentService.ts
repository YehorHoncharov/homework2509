import { commentRepository } from "./commentRepository";
import { CreateComment } from "./types";

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

async function createCommentForPost(postId: number, data: CreateComment){
    await commentRepository.createCommentToPost(postId, data)
}

const commentService = {
    getCommentsByPostId: getCommentsByPostId,
    getCommentsByUserId: getCommentsByUserId, 
    createCommentForPost: createCommentForPost,
}

export default commentService