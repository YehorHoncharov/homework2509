import { Request, Response } from 'express';
import postService from './postService';
import moment from 'moment';

interface Post {
    id: number;
    context: string; 
}


async function getAllPosts(req: Request, res: Response) {
    const max  = Number(req.query.max)
    const context = await postService.getAllPosts(req, res, max)
    res.render('posts', context);
}

async function getPostById(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const data = await postService.getPostById(id);
    if (id <= data.length) { 
        res.render('post', data.context);
    } else {
        res.send('таких постов нет');
    }
}

async function createPost(req: Request, res: Response) {
    const data = req.body;
    // postService.createPost(data);
    const context = await postService.createPost(data)
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
