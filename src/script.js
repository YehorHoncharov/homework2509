const moment = require("moment")
const express = require('express')
const path = require("path")
const postRouter = require('./routers/postRouter')

const app = express()


app.set('view engine', 'ejs')
//встановлюємо папки з шаблонами для ejs
app.set('views', path.join(__dirname, 'templates'))

app.use('/static/', express.static(path.join(__dirname, 'static')))

app.use(express.json()) 

app.use('/post/', postRouter)

app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, "./templates/index.html"))
    const context = {
        // words: ['hello', 'world', 'rinat']
        title: 'posts of the day'
     }
    res.render('index', context)
})



const PORT = 8000
const HOST = 'localhost'

app.listen(PORT, HOST, () =>{
    console.log("http://localhost:8000")
})
