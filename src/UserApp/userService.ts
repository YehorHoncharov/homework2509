import { Prisma } from '@prisma/client'
import userRepository from "./userRepository"
import * as bcrypt from 'bcrypt';
import {User} from './types'
import { IError, ISuccess } from '../globalTypes/globalTypes';


// interface IUserSuccess{
//     status: 'success',
//     data?: User,
//     message: string
// }

const ComparePassword = async (hash: string, password: string): Promise<boolean> => {
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

async function createUser(data: {username:string, email:string, password:string}): Promise< IError | ISuccess<User> >{
    const user: any = await userRepository.findUserByEmail(data.email)

    if (!user){
        const full_data = {...data, role:"user"}
        const created_user: any = await userRepository.createUser(full_data)
        const data_return = {
            username: created_user.username,
            email: created_user.email,
            role: created_user.role
        }
        
        return {status: 'error', message: 'user not found'}

    } else {
        return {status: 'success', message: "user exists"}
    }
    
}

const userService = {
    findUserByEmail: findUserByEmail,
    createUser: createUser
}

export default userService