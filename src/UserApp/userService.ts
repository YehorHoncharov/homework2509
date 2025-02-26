// import { SECRET_KEY } from './../config/token';
import { Prisma } from '@prisma/client'
import userRepository from "./userRepository"
import * as bcrypt from 'bcrypt';
import {CreateUser, User} from './types'
import { IError, ISuccess } from '../globalTypes/globalTypes';
import jwt from 'jsonwebtoken';



// const SECRET_KEY = process.env.SECRET_KEY 
const SECRET_KEY = 'YwbslRsce'

async function ComparePassword(hash: string, password: string): Promise<boolean>{
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
}

async function findUserByEmail(email: string, password: string){
    const user: any = await userRepository.findUserByEmail(email=email)
    if (user instanceof String){
        return user
    } else {
        const result = await ComparePassword(user.password, password)
        if (result){
            const new_user = {
                username: user.username,
                email: user.email,
                role: user.role
            }
            return new_user
        }
    }
}

async function createUser(data: {username:string, email:string, password:string, hashedPassword: string}): Promise< IError | ISuccess<User> >{
    const user = await userRepository.findUserByEmail(data.email)

    if (!user){
        const full_data = {...data, role:"user"}
        const created_user: any = await userRepository.createUser(full_data)
        const data_return = {
            username: created_user.username,
            email: created_user.email,
            role: created_user.role,
            heshedPassword: created_user.password
        }
        
        return {status: 'error', message: 'user not found'}

    } else {
        return {status: 'success', message: "user exists"}
    }
    
}



async function login(email: string, password: string): Promise< ISuccess<User> | IError > {

    const user = await userRepository.findUserByEmail(email);

    if (!user){
        return { status: "error", message: "User not found"};
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
        return { status: "error", message: "Password is incorrect" };
    }

    return { status: "success", data: user};

}

async function register(data: CreateUser): Promise< IError | ISuccess<User>>{

    const user = await userRepository.findUserByEmail(data.email)
    console.log(user);

    if (user) {
        return { status: "error", message: "User exists!"};
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const userData = {
        username: data.username,
        email: data.email,
        password: hashedPassword,
        role: "user"
    }

    const newUser = await userRepository.createUser(userData);

    if (!newUser) {
        return { status: "error", message: "User not create!"};
    }

    return { status: "success", data: newUser};

}


const userService = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
    login: login,
    register: register
}

export default userService