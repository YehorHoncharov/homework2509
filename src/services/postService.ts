import { Request, Response } from 'express';
import moment from 'moment';

interface Post {
    name: string;
    src: string;
    date: string;
    description: string;
    author: string;
}

const posts: Post[] = [
    {
        name: 'Фото дня',
        src: "https://www.spcdn.org/blog/wp-content/uploads/2021/05/Photo-of-the-day.png",
        date: "2022-10-12",
        description: "красивые фоточки",
        author: "Телеканал Дождь"
    },
    {
        name: 'Цитати',
        src: "https://www.spcdn.org/blog/wp-content/uploads/2021/05/Quote.png",
        date: "2024-01-01",
        description: "«вдохновляющие» цитаты",
        author: "Словарный запас"
    },
    {
        name: 'Опрос',
        src: "https://www.spcdn.org/blog/wp-content/uploads/2021/05/Poll.png",
        date: "2023-03-16 0:10",
        description: "У тебя есть полковая техника?",
        author: "War Thunder"
    },
    {
        name: 'Современная архитектура полярный станций',
        src: "https://www.spcdn.org/blog/wp-content/uploads/2021/05/Compilation.png",
        date: "2024-01-10 14:20",
        description: "Современная архитектура полярный станций",
        author: "Academic Architecture"
    }
];


function getAllPosts(req: Request, res: Response): { posts: Post[] } {
    const max = parseInt(req.query.max as string, 10); 
    let context = { posts };

    if (max <= posts.length) {
        context.posts = posts.slice(0, max);
    }

    return context;
}


function getPostById(id: number): { context: { posts: Post }, length: number } {
    const context = { posts: posts[id - 1] };

    return {
        context: context,
        length: posts.length
    };
}


function createPost(data: Post): void {
    posts.push(data);
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
