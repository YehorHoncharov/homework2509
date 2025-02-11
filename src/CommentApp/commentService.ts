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

async function createCommentToPost(postId: number): Promise< ICommentSuccess | ICommentError >{
    let comment = await commentRepository.createCommentToPost(postId);
    if (!comment){
        return {status: "error", message: "Couldn't create a comment"}
    }
    return {status: "success", data: comment}
}

async function getCommentsByPostId(postId: number): Promise< ICommentsSuccess | ICommentError >{
    let comments = await commentRepository.getCommentsByPostId(postId);
    if (!comments){
        return {status: "error", message: "Comments Not Found"}
    }
    return {status: "success", data: comments}
}


export const commentService = {
    createCommentToPost: createCommentToPost,
    getCommentsByPostId: getCommentsByPostId
}