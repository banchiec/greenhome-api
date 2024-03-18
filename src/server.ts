import cors from 'cors'
import { config } from  'dotenv'
import { port } from "./config/database" 
import app from "./app"

config()
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
})
