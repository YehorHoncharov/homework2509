import express, { Request, Response, Router } from 'express';
import postController from '../controllers/postController';

const router: Router = express.Router();


router.get('/all', (req: Request, res: Response) => postController.getAllPosts(req, res));

router.get('/date', (req: Request, res: Response) => postController.getDate(req, res));

router.get('/user', (req: Request, res: Response) => postController.User(req, res));

router.get('/:id', (req: Request, res: Response) => postController.getPostById(req, res));

router.post('/create', (req: Request, res: Response) => postController.createPost(req, res));

export default router;
