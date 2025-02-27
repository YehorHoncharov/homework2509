// не нужно
import { Prisma, PrismaClient } from "@prisma/client";
import client from '../client/prismaClient'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import * as bcrypt from 'bcrypt';

// не нужно
const HashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

async function findUserByEmail(email:string){
    try{
        return await client.user.findUnique({
            where: { email }
        })
        // })
        // if (user === null || user === undefined){
        //     return "not found"
        // } else {
        //     return user
        // }
        
    } catch(err){
        // вынести в types
        if (err instanceof PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                // throw - выкинет ошибку обратно в код (то есть завершит)
                throw err
            } else if (err.code == 'P2015'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2019'){
                console.log(err.message)
                throw err
            } 
        }
    }
}
// из types
async function createUser(data: Prisma.UserCreateInput){
    try{
        // console.log(typeof(data.password))
        const user = await client.user.create({
            // data: data
            data: {
                username: data.username,
                email: data.email,
                // не надо
                password: await HashPassword(data.password),
                role: data.role
            }
        })
        return user
    } catch(err){
        if (err instanceof PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2015'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2019'){
                console.log(err.message)
                throw err
            } 
        }
    }
}


const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser
}

export default userRepository