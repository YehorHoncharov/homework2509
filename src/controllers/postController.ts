import { Request, Response } from 'express';
import postService from '../services/postService';
import moment from 'moment';

interface Post {
    id: number;
    context: string; 
}


function getAllPosts(req: Request, res: Response): void {
    const context = postService.getAllPosts();
    res.render('posts', context);
}

function getPostById(req: Request, res: Response): void {
    const id = parseInt(req.params.id, 10);
    // const id = req.params.id;
    const data = postService.getPostById(id);
    // const data: Post[] = postService.getPostById(id);

    if (id <= data.length) { //ошибка
        res.render('post', data.context);
    } else {
        res.send('таких постов нет');
    }
}

function createPost(req: Request, res: Response): void {
    const data = req.body;
    postService.createPost(data);
    res.send('okey');
}

function getDate(req: Request, res: Response): void {
    console.log(moment().format('YYYY/MM/DD hh:mm:ss'));
    res.render('date');
}

function User(req: Request, res: Response): void {
    res.render('user');
}

export default {
    getAllPosts,
    getPostById,
    createPost,
    getDate,
    User,
};
