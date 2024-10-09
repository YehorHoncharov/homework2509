const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')


router.get('/all', postController.getAllPosts)

router.get('/date', postController.getDate)

router.get('/user', postController.User)

router.get('/:id', postController.getPostById)

router.post('/create', postController.createPost)

module.exports = router