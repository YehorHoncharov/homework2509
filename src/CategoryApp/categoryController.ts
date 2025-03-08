import { Request, Response } from 'express'
import categoryService from './categoryService'


async function getAllCategories(req:Request, res:Response) {
    const result = await categoryService.getAllCategories()
    if (result.status == 'error'){
        res.json({ status: 'error', message: 'Categories not found'})
    } else {
        res.json({ status: 'success', message: 'all good'})
    }
}

const categoryControllers = {
    getAllCategories: getAllCategories,
}

export default categoryControllers