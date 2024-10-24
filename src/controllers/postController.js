"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var postService_1 = require("../services/postService");
var moment_1 = require("moment");
function getAllPosts(req, res) {
    var context = postService_1.default.getAllPosts();
    res.render('posts', context);
}
function getPostById(req, res) {
    var id = parseInt(req.params.id, 10);
    // const id = req.params.id;
    var data = postService_1.default.getPostById(id);
    // const data: Post[] = postService.getPostById(id);
    if (id <= data.length) { //ошибка
        res.render('post', data.context);
    }
    else {
        res.send('таких постов нет');
    }
}
function createPost(req, res) {
    var data = req.body;
    postService_1.default.createPost(data);
    res.send('okey');
}
function getDate(req, res) {
    console.log((0, moment_1.default)().format('YYYY/MM/DD hh:mm:ss'));
    res.render('date');
}
function User(req, res) {
    res.render('user');
}
exports.default = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    getDate: getDate,
    User: User,
};
