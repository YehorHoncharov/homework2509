import {Request, Response, NextFunction} from 'express';


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
}