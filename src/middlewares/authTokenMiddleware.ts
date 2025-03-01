import { verify } from 'jsonwebtoken';
import { NextFunction, Response, Request } from "express";
import { SECRET_KEY } from '../config/token';

export interface IToken{
    id: number
    exp: number
    iat: number
}

export async function authTokenMiddleware(req: Request, res: Response, next: NextFunction){
    const headerAuth = req.headers.authorization
    if (!headerAuth){
        res.status(401).json({ status: 'error', message: 'Title not specified'})
        return
    }

    const splitedToken = headerAuth.split(" ");
    if (splitedToken[0] !== "Bearer" || splitedToken.length !== 2  ) {
        res.status(401).json({status: 'error', message: "Invalid authorization format" });
        return
    }

    const token = splitedToken[1];
    
    try{
        const decodedToken = verify(token, SECRET_KEY) as IToken;
        res.locals.userId = Number(decodedToken.id);
        next();

    }catch (err) {
        res.status(401).json({status: 'error', message: "Invalid or expired token" });
        return
    }
}