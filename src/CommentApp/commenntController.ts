import { Request, Response } from 'express';
import { commentService } from './commentService';

export async function createCommentToPost(req: Request, res: Response){
    let comment = await commentService.createCommentToPost(+req.params.id);
    if (comment.status == "error"){
        res.send(comment.message);
    } else{
        res.json(comment.data);
    }
}

export async function getCommentsByPostId(req: Request, res: Response){
    let comments = await commentService.getCommentsByPostId(+req.params.id);
    if (comments.status == "error"){
        res.send(comments.message);
    } else{
        res.json(comments.data);
    }
}