import express, { Express, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import cors from "cors"
import { join } from 'path'
import moment from 'moment'
import userRouter from './UserApp/userRouter'
import categoryRouter from './CategoryApp/categoryRouter'
import postRouterApi from './PostApp/postRouterApi'
import postRouter from './PostApp/postRouter'
import commentRouter from './CommentApp/commentRouter'


const app: Express = express()


app.use(cors({
    origin: ['http://localhost:8000']
}))

app.set("view engine", "ejs")
app.set("views", join(__dirname, 'templates'))

app.use('/static/', express.static(join(__dirname, 'static')))

app.use(express.json())
app.use(cookieParser())

app.use('/comment/', commentRouter)
app.use('/post/', postRouter)
app.use('/api/post/', postRouterApi)
app.use('/api/category/', categoryRouter)
app.use('/api/user', userRouter)
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


app.listen(() =>{
    console.log("http://localhost:8000")
})