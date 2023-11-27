const dotenv = require('dotenv')
const express = require('express')
const taskRouter = require('./routes/task.route')
const corsMiddleware = require('./middlewares/cors.middleware')

dotenv.config()
const app = express()

app.use(express.json());
app.use(corsMiddleware);

app.use('/task', taskRouter)

const port = process.env.port || 3000
app.listen(port, ()=> console.log(`App is listening on port ${port}`))