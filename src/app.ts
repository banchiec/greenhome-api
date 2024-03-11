const express = require('express')
const appExpress = express()
const approutes = require('./routes/index.routes')

appExpress.use('/api', approutes)

module.exports = appExpress
