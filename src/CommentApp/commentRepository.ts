import { Prisma } from "@prisma/client";
import client from "../client/prismaClient";
import { CreateComment } from "./types";

function Error(error: unknown){
    if (error instanceof Prisma.PrismaClientKnownRequestError){
        switch (error.code) {
            case 'P2002': 
                console.log(error.message)
                throw error;
            
            case 'P2015':
                console.log(error.message);
                throw error;
            
            case 'P2019':
                console.log(error.message)
                throw error;
        }
    }
}


async function createCommentToPost(postId: number, data: CreateComment){
    try{
        let comment = client.comment.create({
            data: {
                headline: 'comment',
                body: "text body",
                
                postId: postId,
                userId: 1,
            }
        })
        return comment
    } catch(error){
        Error(error);
    }
}

async function getCommentsByPostId(postId: number){
    try{
        let comments = client.comment.findMany({
            where: {
                postId: postId
            }
        })
        return comments;
    } catch(error){
        Error(error);
    }
}

export const commentRepository = {
    createCommentToPost: createCommentToPost,
    getCommentsByPostId: getCommentsByPostId
}