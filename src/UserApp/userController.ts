import { Request, Response } from 'express'
import userService from './userService'


function loginPage(req: Request, res: Response){
    res.render('login')
}

async function login(req: Request, res: Response){
    const data = await req.body
    const result = await userService.login(data.email, data.password)
    if (result.status == 'error') {
        res.send(result.message)
        return
    }
    
    res.cookie('token', result.data)
    res.sendStatus(200) 
}

function regPage(req: Request, res: Response){
    res.render('registration')
}

async function register(req: Request, res: Response){
    const data = await req.body
    const result = await userService.register(data)
    if (result.status == 'error') {
        res.send(result.message)
        return
    }

    res.cookie('token', result.data)
    res.sendStatus(200) 
}

const userController = {
    loginPage: loginPage,
    login: login,
    regPage: regPage,
    register: register
}


export default userController