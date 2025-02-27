// const productService = require('../services/productService')
import postService from "./postService"
// лишние импорты
import express, { Express, Request, Response } from 'express'


async function getAllPosts(req:Request, res:Response) {
    const context = await postService.getAllPosts()
    if (context.status == "error"){
        res.send("error")
    } else{
        res.render('posts', {posts: context.data})
    }
}

async function getPostById(req:Request, res:Response){
    let id = req.params.id
    const result = await postService.getPostById(+id)
    if (result.status == "error"){
        res.send("ban")
    } else{
        res.render('post', {post: result.data})
    }
}
// 
async function createPost(req:Request, res:Response){
    const data = req.body
    console.log(data)
    
    const result = await postService.createPost(data);
    if (result.status == 'error'){
        res.send('error');
    } else {
        res.send('ok')
    }
}

async function getPostWithComments(req:Request, res:Response){
    const comment = req.body.comment
    const data = await postService.getPostWithComments(comment)

    if (data.status == 'error'){
        res.send('error');
    } else {
        res.send('ok')
    }
}


const postControllers = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    getPostWithComments: getPostWithComments
}

export default postControllers