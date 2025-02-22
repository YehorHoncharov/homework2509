import { Category } from "@prisma/client"
import { IError, ISuccess } from "../globalTypes/globalTypes"
import categoryRepository from "./categoryRepository"


async function getAllCategories(): Promise<ISuccess<Category[]> | IError> {
    const categories = await categoryRepository.getAllCategories()

    if(!categories){
        return{status: 'error', message: 'categories not found'}
    }
    return {status: 'success', data: categories}
}

const categoryService = {
    getAllCategories: getAllCategories,

} 

export default categoryService