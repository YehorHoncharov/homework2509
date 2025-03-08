import postRepository from "./postRepository"
import { IError, ISuccess } from '../globalTypes/globalTypes'
import { CreatePost, Post, PostWithComment } from './types'


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

async function createPost(data: CreatePost): Promise< ISuccess<Post> | IError >{
    let postCreate = await postRepository.createPost(data);
    if (!postCreate){
        return {status: "error", message: "post create error"}
    }

    return {status: "success", data: postCreate}
}

async function getPostWithComments(postId: number): Promise< ISuccess<PostWithComment> | IError >{
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