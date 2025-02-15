import { Post, Prisma } from '@prisma/client'
import postRepository from "./postRepository"
import { IError, ISuccess } from '../globalTypes/globalTypes'


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

async function createPost(data: Prisma.PostCreateInput): Promise< ISuccess<Post> | IError >{
    let post_create = await postRepository.createPost(data);
    if (!post_create){
        return {status: "error", message: "post create error"}
    }

    return {status: "success", data: post_create}
}


const postService = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
} 

export default postService