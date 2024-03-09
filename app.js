const express = require('express')
const app = express()
const appRoutes = require('./routes/index.routes')

app.use('/api', appRoutes)

module.exports = app
