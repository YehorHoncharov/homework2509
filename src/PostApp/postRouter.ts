import express, { Request, Response, Router } from 'express';
import postController from './postController';

const router: Router = express.Router();


router.get('/all',  postController.getAllPosts);

router.get('/date',  postController.getDate);

router.get('/user',  postController.User);

router.get('/:id',  postController.getPostById);

router.post('/create',  postController.createPost);

export default router;
