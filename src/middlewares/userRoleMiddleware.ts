import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';

export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    let cookies = req.cookies
    cookies = {user:JSON.parse(cookies.user)}
    
    if (cookies.user.role == "admin"){
        console.log("user is admin")
        next()
    } else {
        res.sendStatus(403)
    }
    if (cookies.token){
        const token = verify(cookies.token, SECRET_KEY)
        res.locals.user = token
        next()
    } else {
        res.sendStatus(401)
    }
}