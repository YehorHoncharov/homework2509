import { authTokenMiddleware } from '../middlewares/authTokenMiddleware';
import userControllers from './userController';
import {Router} from 'express';
import userControllerApi from './userControllerApi';

const router = Router();

router.get('/login', userControllers.loginPage)
router.post('/login', userControllers.login)

router.get('/registration', userControllers.regPage)
router.post('/registration/', userControllers.register)

router.get('/me', authTokenMiddleware, userControllerApi.getUserById)

export default router;