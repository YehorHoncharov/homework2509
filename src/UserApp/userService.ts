import { CreateUser, User } from './types'
import { IError, ISuccess } from '../globalTypes/globalTypes';
import { compare, hash } from "bcrypt"
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';
import userRepository from './userRepository';


async function findUserByEmail(email: string){
    const user = await userRepository.findUserByEmail(email)
    
    if(!user){
        return {
            status: 'error',
            message: 'User not found'
        }
    }

    const userData = {
        ...user,
        password: '',
    }
    return {status: 'success', data: userData}

}


async function login(email: string, password: string): Promise<ISuccess<string> | IError > {
    const user = await userRepository.findUserByEmail(email)
    if (!user) {
        return {status: 'error', message: "User does not exist"}
    }
    
    const isMatch = await compare(password, user.password);
    
    if (!isMatch) {
        return {status: 'error', message: 'Invalid password'}
    }

    const token = sign({id: user.id}, SECRET_KEY, {expiresIn: '1d'})

    return {status:'success', data: token}
}

async function register(data: CreateUser): Promise< IError | ISuccess<string>>{
    const user = await userRepository.findUserByEmail(data.email)

    if (user) {
        return {status: 'error', message: 'User is already registered'}
    }

    const hashedPassword = await hash(data.password, 10)

    const userData = {
        ...data,
        password: hashedPassword,
    }

    const newUser = await userRepository.createUser(userData)

    if (!newUser) {
        return {status: 'error', message: 'User creation failed'}
    }

    const token = sign({id: newUser.id}, SECRET_KEY, {expiresIn: '1d'})

    return {status:'success', data: token}

}

async function getUserById(userId: number): Promise< IError | ISuccess<User> > {
    const user = await userRepository.getUserById(userId)
    
    if(!user){
        return {
            status: 'error',
            message: 'User not found'
        }
    }
    
    const userData = {
        ...user,
        password: '',
    }
    return {status: 'success', data: userData}
}

const userService = {
    findUserByEmail: findUserByEmail,
    login: login,
    register: register,
    getUserById: getUserById,
}

export default userService