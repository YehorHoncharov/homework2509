import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';


export function authMiddleware(req: Request, res: Response, next: NextFunction){
    let cookies = req.cookies
    cookies = {user:JSON.parse(cookies.user)}
    if (cookies.user){
        if (cookies.user.email && cookies.user.username && cookies.user.role){
            console.log("user authenticated")
            next()
        }
    } else {
        res.sendStatus(401)
    }
    if (cookies.token){
        const token = verify(cookies.token, SECRET_KEY)
        res.locals.user = token
        next()
    } else {
        res.sendStatus(401)
    }
}
