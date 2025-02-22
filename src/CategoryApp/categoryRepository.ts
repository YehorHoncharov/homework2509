import { Prisma } from "@prisma/client";
import client from "../client/prismaClient";

async function getAllCategories(){
    try{
        let categories = await client.category.findMany()
        return categories
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
        }
    }
}

const categoryRepository = {
    getAllCategories: getAllCategories,

}
export default categoryRepository