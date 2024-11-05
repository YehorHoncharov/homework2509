import { Router } from 'express'
import { getAllPosts, getPostById, createPost } from './postController'
import { authMiddleware } from '../middlewares/authMiddleware'
import { userRoleMiddleware } from '../middlewares/userRoleMiddleware'

const router = Router()


router.get("/all", getAllPosts)

router.get("/:id", getPostById)

router.post('/create', authMiddleware, userRoleMiddleware, createPost)

export { router }