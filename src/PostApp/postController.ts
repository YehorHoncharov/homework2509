import { Request, Response } from 'express'
import { getAllPosts as getAllPostsService, getPostById as getPostByIdService, createPost as createPostService} from './postService'

async function getAllPosts(req: Request, res: Response){
    const context = await getAllPostsService()
    res.render('posts', context)
}

async function getPostById(req: Request, res: Response){
    const id: string = req.params.id
    const data = await getPostByIdService(parseInt(id))

    if (data.context.post === null || data.context.post === undefined){
        res.render("incorrect_post")
        
    } else {
        res.render('post', data.context)
    }

}

async function createPost(req: Request, res: Response){
    const data = req.body
    await createPostService(data)
    res.send('Your post was succesfully published.')
}

export { getAllPosts, getPostById, createPost }