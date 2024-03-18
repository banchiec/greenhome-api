import express from 'express';

const router = express.Router()

import { router as routerCommentsList } from './comments-list-route';

// router.use('/:commentId', commentById)
router.use('/', routerCommentsList)

export { router }
