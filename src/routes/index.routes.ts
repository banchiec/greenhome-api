const router = require('express').Router()
const authRoutes = require('./auth.routes')
const commentRoutes = require('./comments.routes')

router.use('/auth', authRoutes)
router.use('/comments', commentRoutes)

module.exports = router

export {}