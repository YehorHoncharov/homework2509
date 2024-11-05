import {Request, Response, NextFunction} from 'express';

export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    let cookies = req.cookies
    cookies = {user:JSON.parse(cookies.user)}
    
    if (cookies.user.role == "admin"){
        console.log("user is admin")
        next()
    } else {
        res.sendStatus(403)
    }
}