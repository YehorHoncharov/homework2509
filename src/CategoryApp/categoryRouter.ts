import { Router } from "express"
import categoryControllers from "./categoryController"

const router = Router()


router.get("/all", categoryControllers.getAllCategories)


export default router