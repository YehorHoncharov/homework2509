import { Comment } from './../src/CommentApp/types';
import { PrismaClient } from '@prisma/client';
import { isDate } from 'moment';

const prisma = new PrismaClient()

async function createOneCategory(){
    const category = await prisma.category.create({
        data: {
            name: 'first category'
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




async function createComment(){
    const comment = await prisma.comment.create({
        data: {
            body: "zxczxczxc",
            userId: 3,
            title: "Coment1",
            postId: 3
        }
    })
    console.log(comment)
}

async function createManyComments(){

    const comments = await prisma.comment.createMany({
        data: [
            {
                userId: 1,
                body: "Я борат",
                title: " я в казахстане",
                postId: 1
            },
            {
                userId: 1,
                body: "тили тили бом",
                title: "закрой глза скорее",
                postId: 1
            }

        ]
    })
    console.log(comments)
}

async function deleteComment() {
    const comment = await prisma.comment.delete({
        where: {
            id: 8
        }
    })
    console.log(comment)
}

async function findComment() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 11
        }
    })
    console.log(comment)
}

async function findCommentById() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 11
        }
    })
    const post = await prisma.post.findUnique({
        where: {
            id: comment?.postId
        },

        include: {
            comments: true
        }
    })
}

async function updateComment() {

    const coment = await prisma.comment.update({
        where: {
            id: 8
        },

        data: {
            body: 'Updated Coment!'
        }
    })
    console.log(coment)
}

async function createUser(){
    const user = await prisma.user.create({
        data: {
          id: 3,
          username: "Test User",
          email: "test3@gmail.com",
          password: "qwerty",
          role: "user"
        }
      });
      console.log(user)
}


async function main() {
    // await createPost()
    // await createManyPosts()
    // await findPost()
    // const posts = await findManyPosts();
    // await console.log(posts.length)
    // await updatePost()
    // await deletePost()
    await createComment()
    // await createManyComments()
    // await deleteComment()
    // await findCommentById()
    // await findCommentWithPost()
    // await findPostWithComments()
    // await updateComment()
    // await createUser()
    // await createOneCategory()
}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})