import { Request, Response } from 'express'
import userService from './userService'
import { SECRET_KEY } from '../config/token'
import { sign } from 'jsonwebtoken'

function loginPage(req: Request, res: Response){
    res.render('login')
}

async function login(req: Request, res: Response){
    console.log(req.body)
    const data = req.body
    const user: any = await userService.findUserByEmail(data.email, data.password)
    if (user instanceof String){
        res.sendStatus(401)
    } else {
        res.cookie('user', JSON.stringify(user))
        res.sendStatus(200)
    }
}


function regPage(req: Request, res: Response){
    res.render('registration')
}

async function authReg(req: Request, res: Response){
    console.log("Contoller", req.body)

    const data = req.body
    const user: any = await userService.createUser(data)
    if (user instanceof String){
        res.sendStatus(401)
    } else {
        res.cookie('user', JSON.stringify(user))
        res.sendStatus(200)
    }
    if (user == 'error'){
        res.send('error')
        return 
    }
    const token = sign(user, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200)
}

const userController = {
    loginPage: loginPage,
    login: login,
    regPage: regPage,
    authReg: authReg
}


export default userController