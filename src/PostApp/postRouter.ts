import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware'
import { userRoleMiddleware } from '../middlewares/userRoleMiddleware'
import postControllers from './postController'

const router = Router()


router.get("/all", postControllers.getAllPosts)

router.get("/:id", postControllers.getPostById)

router.post('/create', authMiddleware, userRoleMiddleware, postControllers.createPost)
// export default
export { router }