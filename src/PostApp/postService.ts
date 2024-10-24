import postRepository from "./postRepository";
import { Request, Response } from 'express';
import moment from 'moment';




interface Post {
    name: string;
    src: string;
    date: string;
    description: string;
    author: string;
}



async function getAllPosts(req: Request, res: Response, max: number){
    const context = {
        posts: await postRepository.getAllPosts()
    }
    // if (max <= products.length) {
    //     context.products = products.slice(0, max)
    // }
    return context
}

async function getPostById(id: number) {

    // const context = { posts: posts[id - 1] };
    const length = await postRepository.getPostsCount()
    const context = {
        posts: await postRepository.getPostById(id)
    }
    return {
        context: context,
        length: length
    };
}


async function createPost(data: Post) {
    const context = {
        posts: await postRepository.createPost(data)
    }
    return context
}


function getDate(req: Request, res: Response): void {
    console.log(moment().format("YYYY/MM/DD hh:mm:ss"));
    res.render('date');
}

export default {
    getAllPosts,
    getPostById,
    createPost,
    getDate
};

