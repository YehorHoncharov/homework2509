import { Prisma } from '@prisma/client'
import postRepository from "./postRepository"

type Post = Prisma.PostGetPayload<{}>

interface IPostError{
    status: 'error',
    message: string
}

interface IPostsSuccess{
    status: 'success',
    data: Post[]
}

interface IPostSuccess{
    status: 'success',
    data: Post
}

async function getAllPosts(): Promise<IPostsSuccess | IPostError> {
    const posts = await postRepository.getAllPosts()

    if(!posts){
        return{status: 'error', message: 'posts not found'}
    }
    return {status: 'success', data: posts}
}

async function getPostById(id: number): Promise<IPostSuccess | IPostError> {
    const post = await postRepository.getPostById(id)
    
    if (!post) {
        return {status: 'error', message: 'post not found'}
    }
    return {status: 'success', data: post}
}

async function createPost(data: Prisma.PostCreateInput): Promise< IPostSuccess | IPostError >{
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