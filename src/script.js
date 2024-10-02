const moment = require("moment")
const express = require('express')
const path = require("path")

const posts = [
    {
        "name": 'Фото дня',
        "src": "https://www.spcdn.org/blog/wp-content/uploads/2021/05/Photo-of-the-day.png",
        "date": "2022-10-12 ",
        "description": "красивые фоточки",
        "author": "Телеканал Дождь"
    },
    {
        "name": 'Цитати',
        "src": "https://www.spcdn.org/blog/wp-content/uploads/2021/05/Quote.png",
        "date" : "2024-01-01",
        "description": "«вдохновляющие» цитаты",
        "author": "Словарный запас"
    },
    {
        "name": 'Опрос',
        "src": "https://www.spcdn.org/blog/wp-content/uploads/2021/05/Poll.png",
        "date" : "2023-03-16 0:10",
        "description": "У тебя есть полковая техника?",
        "author": "War Thunder"

    },
    {
        "name": 'Современная архитектура полярный станций',
        "src": "https://www.spcdn.org/blog/wp-content/uploads/2021/05/Compilation.png",
        "date" : "2024-01-10 14:20",
        "description": "Современная архитектура полярный станций",
        "author": "Academic Architecture"
    }
]

const app = express()


app.set('view engine', 'ejs')
//встановлюємо папки з шаблонами для ejs
app.set('views', path.join(__dirname, 'templates'))

app.use('/static/', express.static(path.join(__dirname, 'static')))

function getDate(){
    console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./templates/index.html"))
    const context = {
        // words: ['hello', 'world', 'rinat']
        title: 'posts of the day'
     }
    res.render('index', context)
})

app.get('/date/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "/templates/date.html"))
    res.render('date')
    getDate()
})

app.get('/posts/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./templates/posts.html"))
    const context = {
        posts: [{name1: 'Как готовить ВКУСНУЮ, СОЧНУЮ аля-шаурму', author1: 'Толік from Tajikistan'}, {name2: 'Новости дня', author2: 'Кіріл Орешкін'}]
    }
    console.log(req.query)
    const max = req.query.max
    if (max <= posts.length) {
        context.posts = posts.slice(0, max)
    }
    res.render('posts', context)
})

app.get('/post/:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const context = {
        post: posts[id-1]
    }
    if (id <= posts.length){
        res.render('post', context)
    } else{
        res.send("таких постов нет")
    }
})

// function getCurrentDate() {
//     const now = new Date(); 
//     return now.toString(); 
// }

// app.get('/date/', (req, res) => {
//     const currentDate = getCurrentDate(); 
//     console.log('Текущая дата и время:', currentDate);
//     res.send(`Текущая дата и время: ${currentDate}`);
    
// });

app.get('/user/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./templates/user.html"));
    res.render('user')
})

const PORT = 8000
const HOST = 'localhost'

app.listen(PORT, HOST, () =>{
    console.log("http://localhost:8000")
})
