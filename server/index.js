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


const userApi = require('./src/API/routers/usersApiRouter')
const operationApi = require('./src/API/routers/operationsApiRoute');
const typeApi = require('./src/API/routers/typesApiRouter');


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