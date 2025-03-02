import { authTokenMiddleware } from '../middlewares/authTokenMiddleware';
import userControllers from './userController';
import {Router} from 'express';

const router = Router();

router.get('/login', userControllers.loginPage)
router.post('/login', userControllers.Login)

router.get('/registration', userControllers.regPage)
router.post('/registration/', userControllers.Register)

router.get('/me', authTokenMiddleware, userControllers.getUserById)

export default router;