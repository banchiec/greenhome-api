const router = require('express').Router()
const createCommentController = require('../../controllers/comments/create-comment-controller')
const getComments = require('../../controllers/comments/get-comments-controller')

router.get('/', getComments)
router.post('/', createCommentController)

module.exports = router
