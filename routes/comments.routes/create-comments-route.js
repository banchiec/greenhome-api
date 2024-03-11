const createCommentController = require('../../controllers/comments/create-comment-controller')

const router = require('express').Router()

router.post('/', createCommentController)

module.exports = router
