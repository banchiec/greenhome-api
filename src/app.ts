import express from  'express';
const app= express()
const approutes = require('./routes/index.routes')

app.use('/api', approutes)

export default app
