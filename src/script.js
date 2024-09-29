const moment = require("moment")
const express = require('express')
const path = require("path")

const app = express()

const PORT = 8000
const HOST = 'localhost'

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
    res.render('posts', context)
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

app.listen(PORT, HOST, () =>{
    console.log("http://localhost:8000")
})
