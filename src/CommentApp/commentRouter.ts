import express, { Router } from 'express'
import commentController from './commentController'

const router: Router = express.Router()

router.post('/create', commentController.createCommentForPost)
router.get('/post/:postId', commentController.getCommentsByPostId)
router.get('/user/:userId', commentController.getCommentsByUserId)

// export default
export {router as commentRouter}