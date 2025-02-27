import express, { Express, Request, Response } from 'express'
import categoryService from './categoryService'


async function getAllCategories(req:Request, res:Response) {
    // result
    const context = await categoryService.getAllCategories()
    // работаешь с result не корректно 
    if (context.status == 'error'){
        // должны быть json
        res.send('error');
    } else {
        // должны быть json
        res.send('ok')
        console.log(context)
    }
}

const categoryControllers = {
    getAllCategories: getAllCategories,
}

export default categoryControllers