import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import users from './users-router.js'

const app = express()

const PORT = 8000;

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send("TASKS")
})

app.use((req, res) => {
    res.send(404)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
