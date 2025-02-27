// не используешь и в принципе не должен
import { Post, Prisma } from '@prisma/client'
import postRepository from "./postRepository"
import { IError, ISuccess } from '../globalTypes/globalTypes'
// не используешь, а должен
import { createPost, PostWithComment } from './types'


async function getAllPosts(): Promise<ISuccess<Post[]> | IError> {
    const posts = await postRepository.getAllPosts()

    if(!posts){
        return{status: 'error', message: 'posts not found'}
    }
    return {status: 'success', data: posts}
}

async function getPostById(id: number): Promise<ISuccess<Post> | IError> {
    const post = await postRepository.getPostById(id)
    
    if (!post) {
        return {status: 'error', message: 'post not found'}
    }
    return {status: 'success', data: post}
}
// 
async function createPost(data: createPost): Promise< ISuccess<Post> | IError >{
    // camelCase
    let post_create = await postRepository.createPost(data);
    if (!post_create){
        return {status: "error", message: "post create error"}
    }

    return {status: "success", data: post_create}
}
// тут должен использовать тип PostWithComment
async function getPostWithComments(postId: number): Promise< ISuccess<Post> | IError >{
    let postwithcomment = await postRepository.getPostWithComments(postId)
    if (!postwithcomment){
        return {status: "error", message: "error"}
    }
    return {status: "success", data: postwithcomment}
}

const postService = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    getPostWithComments: getPostWithComments
} 

export default postService