import { Router } from "express"
import getComments from "../../controllers/comments/get-comments-controller"
const router = Router()

// const createCommentController = require('../../controllers/comments/create-comment-controller')
// const getComments = require('../../controllers/comments/get-comments-controller')


router.get('/', getComments)
// router.post('/', createCommentController)

export {router}
