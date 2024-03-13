// const cors = require('cors')
import cors from 'cors'
require('dotenv').config()

import Logger from "./core/Logger"
import { port } from "./config/database" 
import app from "./app"
// const app = require('./app')

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
)

app.listen( port, () => {
  Logger.info(`Server listening on http://localhost:${port}`);
}).on("error", (e: any) => Logger.error(e))
