import express, { Express, Request, Response } from 'express'
import { join } from 'path'
import moment from 'moment'
import { router } from './PostApp/postRouter'
import userRouter from './UserApp/userRouter'
import cookieParser from 'cookie-parser'
import cors from "cors"
import postRouterApi from './PostApp/postRouterApi'
import categoryService from './CategoryApp/categoryService'
import categoryRouter from './CategoryApp/categoryRouter'


const app: Express = express()

const PORT = 8000
const HOST = 'localhost'

app.use(cors())

app.set("view engine", "ejs")
app.set("views", join(__dirname, 'templates'))
app.use('/static/', express.static(join(__dirname, 'static')))
app.use(express.json())
app.use(cookieParser())
app.use('/post/', router)
app.use('/api/post/', postRouterApi)
app.use('/api/category/', categoryRouter)
app.use('/', userRouter)


function getDate(){
    console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
}

app.get('/', (req: Request, res: Response) => {
    res.render('index')
})

app.get('/date/', (req: Request, res: Response) => {
    res.render('date')
    getDate()
    
})

app.get('/user/', (req: Request, res: Response) => {
    res.render("user")
})




app.listen(PORT, HOST, () =>{
    console.log("http://localhost:8000")
})