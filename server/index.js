const express = require('express')
const app = express()
const port = 3003
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


const userApi = require('./src/API/routers/userRouter')
const operationApi = require('./src/API/routers/operationRouter');
const typeApi = require('./src/API/routers/typeRouter');


app.use('/users', userApi)
app.use('/operations', operationApi)
app.use('/types', typeApi)

const credentials = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alkemy'
}



app.listen(port, () => console.log(` servidor corriendo en ${port} `))