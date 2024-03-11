const router= require('express').Router()
const getCommentById = require('../../controllers/comments/get-comment-by-id')

router.get('/', getCommentById)

module.exports = router
