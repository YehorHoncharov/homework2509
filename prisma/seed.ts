import { PrismaClient } from '@prisma/client';
import { isDate } from 'moment';

const prisma = new PrismaClient()

async function createOneCategory(){
    const category = await prisma.category.create({
        data: {
            name: 'Keyboards'
        }
    })
}

// СОЗДАНИЕ ОДНОГО ПОСТА
async function createPost(){
    const newPost = await prisma.post.create({
        data: {
            name: "ещкерре",
            description: "Post description",
            src: "https://example.com/image.png",
            author: "король ещкере",
            date: "14:20",
        }
    });
    console.log(newPost)
}
// СОЗДАНИЕ МНОЖЕСТВА ПОСТОВ
async function createManyPosts() {
    const posts = await prisma.post.createMany({
        data: [
            { name: 'New Post', description: 'desc', src: 'https://icf.listex.info/med/fc8729f1-8c87-5282-e6b2-70a8dc819984.jpg', author: 'Author', date: "14:30"},
            { name: 'New Post', description: 'desc', src: 'https://icf.listex.info/med/fc8729f1-8c87-5282-e6b2-70a8dc819984.jpg', author: 'Author', date: "14:30"},
            { name: 'New Post', description: 'desc', src: 'https://icf.listex.info/med/fc8729f1-8c87-5282-e6b2-70a8dc819984.jpg', author: 'Author', date: "14:30"},
            { name: 'New Post', description: 'desc', src: 'https://icf.listex.info/med/fc8729f1-8c87-5282-e6b2-70a8dc819984.jpg', author: 'Author', date: "14:30"},
        ]
    })
    console.log(posts) 
}


// УДАЛЕНИЕ ПОСТА
async function deletePost() {
    const post = await prisma.post.delete({
        where: {
            id: 1
        }
    })
    console.log(post)
}
// ОБНОВЛЕНИЕ ПОСТА
async function updatePost() {
    const post = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            name: 'Updated Post'
        }
    })
    console.log(post)

}
// ПОИСК И ПОЛУЧЕНИЕ ОДНОГО ПОСТА
async function findPost() {
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })
    console.log(post)
}
// ПОИСК МНОЖЕСТВА ПОСТОВ И ПОЛУЧЕНИЯ
async function findManyPosts() {
    const post = await prisma.post.findMany()
    return post
    console.log(post)
}

// Создание комментария 
async function createComment() {
    const comment = await prisma.comment.create({
        data: {
                headline: 'vtug',
                body: 'bfofby',
                postId: 1,
                userId: 1
        }
    });
    console.log(comment);
}

// Создание множества комментариев
async function createManyComments() {
    const createManyComments = await prisma.comment.createMany({
        data: [
            { headline: 'headline1', body: 'body', postId: 1, userId: 1},
            { headline: 'headline2', body: 'body', postId: 1, userId: 1},
            { headline: 'headline3', body: 'body', postId: 1, userId: 1}
        ]
    });
    console.log(createManyComments);
}

// Удаление комментария
async function deleteComment() {
    const deleteComment = await prisma.comment.delete({
        where: {
            id: 1
        }
    });
    console.log(deleteComment);
}

// Поиск комментария по id
async function findCommentById() {
    const findComment = await prisma.comment.findUnique({
        where: {
            id: 1
        }
    });
    console.log(findComment);
}

// Поиск комментария по id с выводом информации о посте
async function findCommentWithPost() {
    const findCommentWithPost = await prisma.comment.findUnique({
        where: {
            id: 1
        },
        include: {
            post: true
        }
    });
    console.log(findCommentWithPost);
}

// Поиск поста по id с комментариями 
async function findPostWithComments() {
    const findPostWithComments = await prisma.post.findUnique({
        where: {
            id: 1
        },
        include: {
            comments: true
        }
    });
    console.log(findPostWithComments);
}

// Обновление комментария
async function updateComment() {
    const updatedComment = await prisma.comment.update({
        where: {
            id: 1
        },
        data: {
            headline: "update commentariy"
        }
    });
    console.log(updatedComment);
}


async function main() {
    // await createPost()
    await createManyPosts()
    // await findPost()
    // const posts = await findManyPosts();
    // await console.log(posts.length)
    // await updatePost()
    // await deletePost()
    // await createComment()
    // await createManyComments()
    // await deleteComment()
    // await findCommentById()
    // await findCommentWithPost()
    // await findPostWithComments()
    // await updateComment()

}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})