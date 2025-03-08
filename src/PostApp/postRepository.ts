import { Prisma} from '@prisma/client';
import client from '../client/prismaClient';

async function getAllPosts(){
    try{
        let posts = await client.post.findMany()
        return posts
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);

            }
        }
    }
}


async function getPostById(id: number) {
    try {
        console.log(id)
        let post = await client.post.findUnique({
            // 1? должен использовать id
            where: {id: id}
        });
        return post;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {

            if (err.code === 'P2002') {
                console.error('ошибка P2002: нарушение уникальности.', err.message);
            }

            if (err.code === 'P2015') {
                console.error('ошибка P2015: запись не найдена.', err.message);
            }

            if (err.code === 'P2019') {
                console.error('ошибка P2019: поле не существует.', err.message);
            }
        } else {
            console.error('неизвестная ошибка', err);
        }
    }
}

async function createPost(data: Prisma.PostCreateInput){
    try{
        let posts = await client.post.create({
            data: data
        })
        return posts
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {

            if (err.code === 'P2002') {
                console.error('ошибка P2002: нарушение уникальности.', err.message);

            }

            if (err.code === 'P2015') {
                console.error('ошибка P2015: запись не найдена.', err.message);

            }

            if (err.code === 'P2019') {
                console.error('ошибка P2019: поле не существует.', err.message);

            }
        } else {
            console.error('неизвестная ошибка', err);
        }
    }
}

async function getPostsCount(){
    try{
        let count = await client.post.count()
        return count
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {

            if (err.code === 'P2002') {
                console.error('ошибка P2002: нарушение уникальности.', err.message);

            }

            if (err.code === 'P2015') {
                console.error('ошибка P2015: запись не найдена.', err.message);

            }

            if (err.code === 'P2019') {
                console.error('ошибка P2019: поле не существует.', err.message);

            }
        } else {
            console.error('неизвестная ошибка', err);
        }
    }
}


export async function getAllPostsWithComments() {
    try{
        return await client.post.findMany({
            include: {
                comments: true, 
            },
        });
    } catch (err){
        if (err instanceof Prisma.PrismaClientKnownRequestError) {

            if (err.code === 'P2002') {
                console.error('ошибка P2002: нарушение уникальности.', err.message);

            }

            if (err.code === 'P2015') {
                console.error('ошибка P2015: запись не найдена.', err.message);

            }

            if (err.code === 'P2019') {
                console.error('ошибка P2019: поле не существует.', err.message);

            }
        } else {
            console.error('неизвестная ошибка', err);
        }
    }
    
}

export async function getPostWithComments(postId: number) {
    try{
        return await client.post.findUnique({
            where: { id: postId },
            include: {
                comments: true,
            },
        });
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {

            if (err.code === 'P2002') {
                console.error('ошибка P2002: нарушение уникальности.', err.message);

            }

            if (err.code === 'P2015') {
                console.error('ошибка P2015: запись не найдена.', err.message);

            }

            if (err.code === 'P2019') {
                console.error('ошибка P2019: поле не существует.', err.message);

            }
        } else {
            console.error('неизвестная ошибка', err);
        }
    }
    
}


const postRepository = {
    getAllPosts:getAllPosts,
    getPostById:getPostById,
    createPost:createPost,
    getPostsCount:getPostsCount,
    getPostWithComments: getPostWithComments
}
export default postRepository