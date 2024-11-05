import { Prisma } from '@prisma/client'
import postRepository from "./postRepository"

const posts = [
    {
        name: 'Why JavaScript is still popular?',
        author: 'Alexey',
        text: "JavaScript remains essential due to its versatility in web development."
    },
    {
        name: 'How to improve CSS skills?',
        author: 'Natasha',
        text: 'Mastering CSS Grid and Flexbox can greatly enhance your layout skills.'
    },
    {
        name: 'Best skincare products for winter',
        author: "Elena",
        text: 'Check out these top products to keep your skin hydrated during cold months.'
    }
];



async function getAllPosts(){
    const context = {
        posts: await postRepository.getAllPosts()
    }
    return context
}

async function getPostById(id: number){
    const context = {
        post: await postRepository.getPostById(id)
    }

    return {
        context: context
    }
}

async function createPost(data:Prisma.PostCreateInput){
    await postRepository.createPost(data)
}

export { getAllPosts, getPostById, createPost }