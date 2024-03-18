import express from  'express';
import appRoute from './routes/index.routes';
const app= express()

app.use('/api', appRoute)

export default app
