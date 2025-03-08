import { Prisma } from "@prisma/client";
import client from '../client/prismaClient'
import { errors, IErrors } from "../globalTypes/errorCodes";
import { CreateUser } from "./types";


async function findUserByEmail(email:string){
    try{
        return await client.user.findUnique({
            where: { email }
        })
        
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function createUser(data: CreateUser){
    try{
        const user = await client.user.create({
            data: data
        })
        return user
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function getUserById(userId: number){
    try{
        let user = await client.user.findUnique({
            where: {
                id: userId
            },
            include: {
                posts: true,
                comments: true,
            }
        })
        return user
    } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code in Object.keys(errors)){
                    const errorKey: keyof IErrors = error.code
                    console.log(errors[errorKey])
                }
            }
        }
}

const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
    getUserById: getUserById,
}

export default userRepository