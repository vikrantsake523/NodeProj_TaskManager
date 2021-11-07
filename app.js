const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connDB = require('./db/connect')
const dotenv = require('dotenv').config()

//middleware


//if we dont use it, there will not be data in req.body?
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})


app.use('/api/v1/tasks', tasks)
const port = 3000

const startDB = async() => {
    try {
        await connDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening on ${port}...`))
    } catch (error) {
        console.log(error)
    }
}
startDB()
