const express = require('express')
const router = express.Router()
const createComment = require('../../controllers/comments/createComment')
const getCommentById = require('../../controllers/comments/getCommentById')
const getCommentByPhotoId = require('../../controllers/comments/getCommentsByPhotoId')
const getAllComments = require('../../controllers/comments/getComments')
const {validateAuth} = require('../../middlewares')

router.get('/', getAllComments)
router.get('/:commentId', getCommentById)
router.post('/:photoId', validateAuth, createComment)

module.exports = router
