const router= require('express').Router()
const createCommentControl= require('../../controllers/comments/create-comment-controller')

router.post('/', createCommentControl)

module.exports = router
