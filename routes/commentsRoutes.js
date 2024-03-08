const express = require('express')
const router = express.Router()
const createComment = require('../controllers/comments/createComment')
const getCommentById = require('../controllers/comments/getCommentById')
const getCommentByPhotoId = require('../controllers/comments/getCommentsByPhotoId')
const {validateAuth} = require('../middlewares')

app.get('/:commentId', getCommentById)
app.post('/:photoId', validateAuth, createComment)

module.exports = router
