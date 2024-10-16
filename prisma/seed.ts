import { PrismaClient } from '@prisma/client';
import { isDate } from 'moment';

const prisma = new PrismaClient()


async function createPost(){
    const post = await prisma.post.create({
        data: {
            name: 'First post',
            description: 'First post description',
            src: '',
            author: "first author",
            date: 12
        }
    })
    console.log(post)
}

async function createManyPosts(){
    const post = await prisma.post.createMany({
        data: {
            name: 'First post',
            description: 'First post description',
            src: '',
            author: "first author",
            date: 21 
        }
    })
    console.log(post)
}

async function deletePost() {
    const post = await prisma.post.delete({
        where: {
            id: 1
        }
    })
    console.log(post)
}

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

async function findPost() {
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })
    console.log(post)
}

async function findManyPosts() {
    const post = await prisma.post.findMany({
        where: {
            id: 1
        }
    })
    console.log(post)
}

async function main() {
    await createPost()
    await createManyPosts()
    await findPost()
    await findManyPosts()
    await updatePost()
    await deletePost()
}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})