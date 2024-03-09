const router = require('express').Router()
const authRoutes = require('./auth.routes/index.auth.routes')
const commentRoutes = require('./comments.routes/commentsRoutes')

router.use('/auth', authRoutes)
router.use('/comments', commentRoutes)

module.exports = router
