const postService = require('../services/postService')
const moment = require("moment")

function getAllPosts(req, res) {
    const context = postService.getAllPosts()
    res.render('posts', context)
}

function getPostById(req, res) {
    console.log(req.params.id)
    const id = req.params.id
    const data = postService.getPostById(id)
    if (id <= data.length){
        res.render('post', data.context)
    } else{
        res.send("таких постов нет")
    }
}

function createPost(req, res) {
    const data = req.body
    console.log(data)
    postService.createPost(data)
    res.send('okey');
}

function getDate(req, res){
    console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
    res.render('date')
}

function User(req, res) {
    res.render('user')
}

module.exports = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    getDate: getDate,
    User: User
}