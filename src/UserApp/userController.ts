import { Request, Response } from 'express'
import userService from './userService'
import { SECRET_KEY } from '../config/token'
import { sign } from 'jsonwebtoken'

function loginPage(req: Request, res: Response){
    res.render('login')
}

// async function login(req: Request, res: Response){
//     console.log(req.body)
//     const data = req.body
//     const user: any = await userService.findUserByEmail(data.email, data.password)
//     if (user instanceof String){
//         res.sendStatus(401)
//     } else {
//         res.cookie('user', JSON.stringify(user))
//         res.sendStatus(200)
//     }
// }

async function Login(req: Request, res: Response){
    try {
        const { email, password } = req.body;
        const token = await userService.login(email, password);
        res.json({ token });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

function regPage(req: Request, res: Response){
    res.render('registration')
}

// async function authReg(req: Request, res: Response){
//     console.log("Contoller", req.body)

//     const data = req.body
//     const user: any = await userService.createUser(data)
//     if (user instanceof String){
//         res.sendStatus(401)
//     } else {
//         res.cookie('user', JSON.stringify(user))
//         res.sendStatus(200)
//     }
//     if (user.status == 'error'){
//         res.send(user.message)
//     }
//     if (user.status == 'success'){
//     const token = sign(user, SECRET_KEY, {expiresIn: '1h'})
//     res.cookie('token', token)
//     res.sendStatus(200)
//     }
// }

async function Register(req: Request, res: Response){
    try {
        const { email, password } = req.body;
        const token = await userService.register(email);
        res.json({ token });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

const userController = {
    loginPage: loginPage,
    Login: Login,
    regPage: regPage,
    Register: Register
}


export default userController