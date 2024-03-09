const express = require('express')
const router = express.Router()

const logingRoutes = require('./loginRoutes')
const registerRoutes = require('./registerRoutes')

router.use('/login', logingRoutes)
router.use('/register', registerRoutes)

module.exports = router
