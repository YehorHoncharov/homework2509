import userControllers from './userController';
import {Router} from 'express';

const router = Router();

router.get('/login', userControllers.loginPage)
router.post('/login', userControllers.login)

router.get('/registration', userControllers.regPage)
router.post('/registration/', userControllers.authReg)

export default router;