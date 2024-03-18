import express from 'express';
const appRoute= express.Router()
// const authRoutes = require('./auth.routes')
// const commentRoutes = require('./comments.routes')
import { router as routerComments } from "./comments.routes/index"

// router.use('/auth', authRoutes)
appRoute.use('/comments', routerComments)

export default appRoute 
