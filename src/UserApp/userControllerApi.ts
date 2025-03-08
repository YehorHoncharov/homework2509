import { Request, Response } from 'express';
import userService from './userService';


async function authLogin(req: Request, res:Response){
    const data = await req.body
    const result = await userService.login(data.email, data.password)
    res.json(result)
}

async function authRegister(req: Request, res: Response){
    const data = await req.body
    const result = await userService.register(data)
    res.json(result)
}

async function getUserById(req: Request, res: Response){
    const userId = res.locals.userId
    const result = await userService.getUserById(userId)
    res.json(result)
}

const userControllerApi = {
    authLogin: authLogin,
    authRegister: authRegister,
    getUserById: getUserById,
 }

export default userControllerApi