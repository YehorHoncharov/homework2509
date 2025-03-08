import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware'
import { userRoleMiddleware } from '../middlewares/userRoleMiddleware'
import postControllers from './postController'

const postRouter = Router()

postRouter.get("/all", postControllers.getAllPosts)

postRouter.get("/:id", postControllers.getPostById)

postRouter.post('/create', authMiddleware, userRoleMiddleware, postControllers.createPost)

export default postRouter