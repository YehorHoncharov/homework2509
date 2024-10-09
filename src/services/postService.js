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

function getAllPosts(req, res) {
        const context = {
            posts: posts
        }

        if (max <= posts.length) {
            context.posts = posts.slice(0, max)
        }

        return context
    }

function getPostById(id){
    
    const context = {
        posts: posts[id-1]
    }    
    
    return {
        context: context,
        length: posts.length
    }
}

function createPost(data){
    posts.push(data)
}

function getDate(req, res) {
        console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
        getDate()
        res.render('date')
    }

module.exports = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    getDate: getDate
} 