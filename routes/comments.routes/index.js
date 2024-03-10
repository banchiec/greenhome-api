const express = require('express')
const router = express.Router()
const commentById = require('./comments-detail-route')
const commentsList = require('./comments-list-route')

router.use('/:commentId', commentById)
router.use('/', commentsList)

module.exports = router
