const express = require('express')
const app = express()
const approutes = require('./routes/index.routes')

app.use('/api', approutes)

module.exports = app
