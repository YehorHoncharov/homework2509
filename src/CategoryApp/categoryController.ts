import express, { Express, Request, Response } from 'express'
import categoryService from './categoryService'


async function getAllCategories(req:Request, res:Response) {
    const context = await categoryService.getAllCategories()
    if (context.status == 'error'){
        res.send('error');
    } else {
        res.send('ok')
        console.log(context)
    }
}

const categoryControllers = {
    getAllCategories: getAllCategories,
}

export default categoryControllers