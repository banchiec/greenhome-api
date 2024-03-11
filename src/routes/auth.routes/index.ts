const express= require('express')
const router= express.Router()

const logingRoutes = require('./login.routes')
const registerRoutes = require('./register.routes')

router.use('/login', logingRoutes)
router.use('/register', registerRoutes)

module.exports = router
